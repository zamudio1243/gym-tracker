"use client";

import { Badge } from "@/shared/ui/badge";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";

type Muscle = { id: string; slug: string; nameEs: string };

export function MuscleFilter({ muscles }: { muscles: Muscle[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const activeSlugs =
    searchParams.get("slugs")?.split(",").filter(Boolean) ?? [];
  const toggle = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const next = activeSlugs.includes(slug)
      ? activeSlugs.filter((s) => s !== slug)
      : [...activeSlugs, slug];
    if (next.length) {
      params.set("slugs", next.join(","));
    } else {
      params.delete("slugs");
    }
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      {muscles.map((muscle) => (
        <Badge
          key={muscle.id}
          variant={activeSlugs.includes(muscle.slug) ? "default" : "outline"}
          className="shrink-0 cursor-pointer"
          onClick={() => toggle(muscle.slug)}
        >
          {muscle.nameEs}
        </Badge>
      ))}
    </div>
  );
}

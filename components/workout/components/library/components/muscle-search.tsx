"use client";

import { Input } from "@/shared/ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

export function MuscleSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const handleChange = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("muscle", term);
    } else {
      params.delete("muscle");
    }
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  return (
    <Input
      placeholder="Search muscle..."
      defaultValue={searchParams.get("muscle") ?? ""}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

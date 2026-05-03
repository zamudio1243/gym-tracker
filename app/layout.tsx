import type { Metadata } from "next";
import { cache } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import {
  assertIsLocale,
  baseLocale,
  getLocale,
  getTextDirection,
  overwriteGetLocale,
  overwriteGetUrlOrigin,
} from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ssrLocale = cache(() => ({
  locale: baseLocale,
  origin: "http://localhost:3000",
}));

overwriteGetLocale(() => assertIsLocale(ssrLocale().locale));
overwriteGetUrlOrigin(() => ssrLocale().origin);

export const metadata: Metadata = {
  title: m.app_title({}),
  description: m.app_description({}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  ssrLocale().locale =
    requestHeaders.get("x-paraglide-locale") ?? baseLocale;

  const requestUrl = requestHeaders.get("x-paraglide-request-url");
  if (requestUrl) {
    ssrLocale().origin = new URL(requestUrl).origin;
  }

  return (
    <html lang={getLocale()} dir={getTextDirection()} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

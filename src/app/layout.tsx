import "~/styles/globals.css";

import { Alegreya as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const fontSans = FontSans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const fancyFont = localFont({
  src: "../../public/KrasnopysChebanyk-Regular.ttf",
  variable: "--font-fancy",
  display: "swap",
});

export const metadata = {
  title: "Медова Птаха",
  description: "Онлайн-журнал сучасного українського мистецтва",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      {/* <body className={`font-sans ${alegreya.variable}`}> */}
      <body
        className={cn(
          [fontSans.variable, fancyFont.variable],
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
          <SpeedInsights />
          <Analytics />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

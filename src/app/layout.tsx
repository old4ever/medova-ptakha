import "~/styles/globals.css";

import { Alegreya } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Медова Птаха",
  description: "онлайн-журнал сучасного українського мистецтва",
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
      <body className={cn("grainy antialiased", alegreya.variable)}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}

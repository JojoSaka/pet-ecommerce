import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pet Shop",
  description: "Pet shop selling the best products for your pets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.variable}
      >
        <StateContext>{children}</StateContext>
        <Toaster />
      </body>
    </html>
  );
}

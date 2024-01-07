import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishwa-Lms-platform",
  description: "Lms platform for project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/meta-logo.svg" />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

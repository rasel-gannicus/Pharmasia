import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/shared/Dashboard Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloth Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <div className="p-4 sm:ml-64">{children}</div>
      </body>
    </html>
  );
}

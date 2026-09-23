import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Địa Tĩnh Tam Quan | Đo đạc, khảo sát & hồ sơ đất đai",
  description: "Dịch vụ đo đạc, khảo sát và hỗ trợ hồ sơ đất đai tại Tam Quan. Chính xác, uy tín và tận tâm.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

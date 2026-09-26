import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dodacdiatinh.github.io/websitediatinhtamquan/"),

  title: "Đo đạc địa chính Tam Quan | Khảo sát địa hình & hồ sơ đất đai",

  description:
    "Đo đạc địa chính, khảo sát địa hình, cắm mốc và hỗ trợ hồ sơ đất đai tại Tam Quan, Gia Lai. Tư vấn tận tâm, thông tin rõ ràng và chính xác.",

  alternates: {
    canonical: "https://dodacdiatinh.github.io/websitediatinhtamquan/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Đo đạc địa chính Tam Quan | Khảo sát địa hình & hồ sơ đất đai",
    description:
      "Dịch vụ đo đạc địa chính, khảo sát địa hình, cắm mốc và hỗ trợ hồ sơ đất đai tại Tam Quan, Gia Lai.",
    url: "https://dodacdiatinh.github.io/websitediatinhtamquan/",
    siteName: "Địa Tĩnh Tam Quan",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Địa Tĩnh Tam Quan - Đo đạc và khảo sát",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Đo đạc địa chính Tam Quan | Khảo sát địa hình",
    description:
      "Dịch vụ đo đạc địa chính, khảo sát địa hình và hỗ trợ hồ sơ đất đai tại Tam Quan, Gia Lai.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
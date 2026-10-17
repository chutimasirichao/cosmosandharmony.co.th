import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, Mitr } from "next/font/google";
import "./globals.css";

const display = Mitr({
  variable: "--font-mitr",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const body = IBM_Plex_Sans_Thai({
  variable: "--font-plex",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const title = "Cosmos & Harmony | ของขวัญรักษ์โลก Corporate Gift & ของชำร่วย";
const description =
  "ของขวัญองค์กร ของชำร่วย และของพรีเมียมสายรักษ์โลก สบู่ทำมือ ของใช้ส่วนตัว และเครื่องหอมจากส่วนผสมธรรมชาติ พร้อมบริการจัดเซ็ตและออกแบบตามแบรนด์ของคุณ";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Cosmos & Harmony",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffc83d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

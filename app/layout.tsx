import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samknowledgepower.github.io/woniu-takara-content/"),
  title: "窩牛 × Takara｜內容行銷與內部能力建置",
  description: "為窩牛室內設計與 Takara 代理業務建立可持續運作的年度內容系統。",
  openGraph: {
    title: "窩牛 × Takara｜把空間專業變成內容資產",
    description: "96 支短影音、24 次到場、12 個月合作。",
    type: "website",
    locale: "zh_TW",
    images: [{
      url: "https://samknowledgepower.github.io/woniu-takara-content/og.png",
      width: 1731,
      height: 909,
      alt: "窩牛 × Takara 年度內容合作提案",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "窩牛 × Takara｜把空間專業變成內容資產",
    description: "96 支短影音、24 次到場、12 個月合作。",
    images: ["https://samknowledgepower.github.io/woniu-takara-content/og.png"],
  },
  icons: {
    icon: "https://samknowledgepower.github.io/woniu-takara-content/favicon.svg",
    shortcut: "https://samknowledgepower.github.io/woniu-takara-content/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}

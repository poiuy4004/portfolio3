import type { Metadata } from "next";
import "@/src/styles/global.css";

export const metadata: Metadata = {
  title: "장용민",
  description: "장용민 포트폴리오",
  keywords: "프론트엔드,개발자,포트폴리오",
  authors: [{name: "Dev.YongMin", url: "https://poiuy4004.github.io/portfolio3"}],
  publisher: "장용민",
  classification: "장용민",
  referrer: "origin",
  robots: "",
  creator: "Dev.YongMin",
  category: "portfolio",
  generator: "장용민",
  icons: "https://avatars.githubusercontent.com/u/125282928?v=4",
  openGraph : {
    type: "website",
    url: "https://poiuy4004.github.io/portfolio3",
    title: "장용민",
    description: "장용민 포트폴리오",
    siteName: "장용민 포트폴리오",
    images: [{
      url: "https://example.com/og.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@portfolio",
    creator: "@Dev.YongMin",
    images: "https://avatars.githubusercontent.com/u/125282928?v=4"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

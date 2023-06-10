import Header from "@components/Header";
import { astronautImage } from "@constants/profile";
import { siteURL } from "@constants/siteMetaData";
import { ThemeProvider } from "@contexts/themeContext";
import { Metadata } from "next";
import "./styles/code.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <link rel="icon" type="image/gif" href={astronautImage} />
      </head>
      <body className="p-4 font-pretendard transition-all">
        <ThemeProvider>
          <Header />
          <div className="py-10" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

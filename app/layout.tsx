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
      <body className="py-20 px-4 md:px-28 max-w-7xl xl:px-0 mx-auto font-pretendard">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

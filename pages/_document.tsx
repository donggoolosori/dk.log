import { astronautImage } from "@constants/profile";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <link rel="icon" type="image/gif" href={astronautImage} />
        <meta
          name="google-site-verification"
          content="bXuH9MEJiR1rFsSNrNbO0XjIdEfHwhyCM5QEHZBazBM"
        />
      </Head>
      <body className="p-4 max-w-3xl mx-auto font-pretendard bg-white dark:bg-dark-base text-gray-800 dark:text-white transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

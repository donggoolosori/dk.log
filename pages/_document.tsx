import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="p-4 max-w-7xl mx-auto font-opensans dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

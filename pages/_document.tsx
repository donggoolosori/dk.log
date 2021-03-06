import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="bXuH9MEJiR1rFsSNrNbO0XjIdEfHwhyCM5QEHZBazBM"
        />
      </Head>
      <body className="p-4 max-w-7xl mx-auto font-opensans dark:bg-slate-800 dark:text-white transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

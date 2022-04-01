import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="p-4 lg:p-12">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

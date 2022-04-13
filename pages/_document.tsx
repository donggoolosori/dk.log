import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300&family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="p-4 max-w-7xl mx-auto font-opensans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

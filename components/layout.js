import Head from 'next/head';

const siteTitle = 'dk blog';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {children}
    </div>
  );
}

export default Layout;

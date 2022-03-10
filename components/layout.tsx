import Head from 'next/head';
import React from 'react';

const siteTitle = 'dk blog';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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

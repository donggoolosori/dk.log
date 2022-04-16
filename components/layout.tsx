import { blogName, name, siteTitle } from '@constants/blog';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <meta name={blogName} content={`${name}'s dev blog`} />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <div className="mb-20"></div>
      {children}
      <Footer />
    </div>
  );
}

import Head from 'next/head';
import { FC } from 'react';

interface BaseSEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage: string;
}

type PageSEOProps = Pick<BaseSEOProps, 'title' | 'description'>;

interface PostSEOProps {
  title: string;
  description: string;
  ogImage: string;
}

enum SiteType {
  Website = 'website',
  Article = 'article',
}

const BaseSEO: FC<BaseSEOProps> = ({ title, description, ogType, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export const PageSEO: FC<PageSEOProps> = ({ title, description }) => {
  const ogImageURL = '/images/profile.jpg';

  return (
    <BaseSEO
      title={title}
      description={description}
      ogType={SiteType.Website}
      ogImage={ogImageURL}
    />
  );
};

export const PostSEO: FC<PostSEOProps> = ({ title, description, ogImage }) => {
  return (
    <BaseSEO
      title={title}
      description={description}
      ogImage={ogImage}
      ogType={SiteType.Article}
    />
  );
};

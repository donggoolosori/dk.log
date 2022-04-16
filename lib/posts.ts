import fs from 'fs';
import path from 'path';
import rehypePrismPlus from 'rehype-prism-plus';
import { getPlaiceholder } from 'plaiceholder';
import { getRandomDefaultImage } from './image';
import { formatDate } from '@helpers/formatDate';
import { bundleMDX } from 'mdx-bundler';

export interface PostMetaData {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
  blurCss?: any;
  tags?: string[];
}

export interface PostData extends PostMetaData {
  mdxSource?: any;
}

const postsDir = path.join(process.cwd(), 'posts');

const fileExtensionRegex = /\.mdx?$/;

interface PostDataOption {
  recent: boolean;
}

export async function getSortedPostsData(options?: PostDataOption) {
  let fileNames = fs.readdirSync(postsDir);

  if (options?.recent) {
    fileNames = fileNames.slice(0, 6);
  }

  const promises: Promise<PostMetaData>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(fileExtensionRegex, '');
    const frontmatter = await getFrontMatter(id);
    return frontmatter;
  });

  const allPostsData = await Promise.all(promises);

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return +new Date(b) - +new Date(a);
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(fileExtensionRegex, ''),
      },
    };
  });
}

const root = process.cwd();

export async function getPostData(id: string): Promise<PostData> {
  const mdPath = path.join(postsDir, `${id}.md`);
  const mdxPath = path.join(postsDir, `${id}.mdx`);

  const source = fs.existsSync(mdPath)
    ? fs.readFileSync(mdPath, 'utf-8')
    : fs.readFileSync(mdxPath, 'utf-8');

  const { code } = await bundleMDX({
    source,
    cwd: path.join(root, 'components'),
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrismPlus, { ignoreMissing: true }],
      ];

      return options;
    },
  });

  const frontmatter = await getFrontMatter(id, source);

  return {
    ...frontmatter,
    mdxSource: code,
  } as PostData;
}

async function getFrontMatter(id: string, source?: string) {
  if (!source) {
    const mdPath = path.join(postsDir, `${id}.md`);
    const mdxPath = path.join(postsDir, `${id}.mdx`);

    source = fs.existsSync(mdPath)
      ? fs.readFileSync(mdPath, 'utf-8')
      : fs.readFileSync(mdxPath, 'utf-8');
  }

  const { frontmatter } = await bundleMDX({ source });

  let { date, coverImg, description } = frontmatter;
  date = formatDate(date);
  description = description || '';
  coverImg = coverImg || getRandomDefaultImage();

  const { css } = await getPlaiceholder(coverImg);

  return {
    ...frontmatter,
    id,
    date,
    coverImg,
    description,
    blurCss: css,
  } as PostMetaData;
}

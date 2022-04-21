import path from 'path';
import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import rehypePrismPlus from 'rehype-prism-plus';
import { postsDir } from './posts';

export const getMdxSource = async (source: string) => {
  const { code } = await bundleMDX({
    source,
    cwd: path.join(process.cwd(), 'components'),
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrismPlus, { ignoreMissing: true }],
      ];

      return options;
    },
  });

  return code;
};

export const readMdxFile = (id: string) => {
  const mdPath = path.join(postsDir, `${id}.md`);
  const mdxPath = path.join(postsDir, `${id}.mdx`);

  const source = fs.existsSync(mdPath)
    ? fs.readFileSync(mdPath, 'utf-8')
    : fs.readFileSync(mdxPath, 'utf-8');

  return source;
};

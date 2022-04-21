import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import rehypePrismPlus from 'rehype-prism-plus';

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

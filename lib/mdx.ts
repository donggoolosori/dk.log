import path from "path";
import fs from "fs";
import rehypePrismPlus from "rehype-prism-plus";
import { postsDir } from "./posts";
import { serialize } from "next-mdx-remote/serialize";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkBreaks from "remark-breaks";

export const getMdxSource = async (source: string) => {
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [
        rehypePrismPlus,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            content: {
              type: "element",
              tagName: "span",
              properties: { className: "anchor" },
              // children: [{ type: "text", value: "# " }],
            },
          },
        ],
      ],
      remarkPlugins: [remarkToc, remarkGfm, remarkBreaks],
      format: "mdx",
    },
  });

  return mdxSource;
};

export const readMdxFile = (id: string) => {
  const mdPath = path.join(postsDir, `${id}.md`);
  const mdxPath = path.join(postsDir, `${id}.mdx`);

  const source = fs.existsSync(mdPath)
    ? fs.readFileSync(mdPath, "utf-8")
    : fs.readFileSync(mdxPath, "utf-8");

  return source;
};

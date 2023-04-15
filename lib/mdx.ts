import path from "path";
import fs from "fs";
import rehypePrismPlus from "rehype-prism-plus";
import { postsDir } from "./posts";
import { serialize } from "next-mdx-remote/serialize";

export const getMdxSource = async (source: string) => {
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypePrismPlus],
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

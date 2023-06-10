"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MdxImage from "./MdxImage";

interface Props {
  source: MDXRemoteSerializeResult;
}

const components = {
  MdxImage,
};

const Mdx = ({ source }: Props) => {
  return <MDXRemote {...source} components={components} />;
};

export default Mdx;

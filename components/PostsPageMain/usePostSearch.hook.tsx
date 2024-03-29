"use client";

import { PostMetaData } from "@lib/posts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState, useTransition } from "react";

const usePostSearch = (posts: PostMetaData[]) => {
  const [filteredPosts, setFilteredPosts] = useState<PostMetaData[]>([]);

  const route = useRouter();

  const [isLoading, startTransition] = useTransition();

  useEffect(() => {
    setFilteredPosts(posts);
  }, [route, posts]);

  const searchHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    startTransition(() => {
      if (!value) {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(
          posts.filter((post) =>
            post.title.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    });
  };

  return { isLoading, filteredPosts, searchHandler };
};

export default usePostSearch;

import { PostMetaData } from '@lib/posts';
import { ChangeEvent, useState } from 'react';

export default function usePostSearch(posts: PostMetaData[]) {
  const [input, setInput] = useState<string>('');

  const [filteredPosts, setFilteredPosts] = useState<PostMetaData[]>(posts);

  const searchHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    setInput(value);

    if (!value) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return { input, filteredPosts, searchHandler };
}

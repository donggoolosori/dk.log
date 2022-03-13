import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  id: string;
  title: string;
  date: string;
}

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDir);

  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const filePath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const matterResult = matter(fileContent);
    const { title, date } = matterResult.data;

    return {
      id,
      title,
      date,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return +new Date(b) - +new Date(a);
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}

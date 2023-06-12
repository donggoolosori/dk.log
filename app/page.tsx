import PostCardList from "@components/PostCardList";
import ProfileCard from "@components/ProfileCard";
import { siteDescription, siteTitle, siteURL } from "@constants/siteMetaData";
import { getSortedPostsMetaData } from "@lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteURL,
    images: [
      {
        url: "/public/images/profile.jpg",
      },
    ],
  },
};

export default async function Home() {
  const allPostsMetaData = await getSortedPostsMetaData({ recent: 8 });

  return (
    <div>
      <ProfileCard />
      <PostCardList allPostsMetaData={allPostsMetaData} />
      <div className="w-full flex justify-center">
        <Link
          href={"/posts"}
          className="btn btn-outline btn-primary shadow-md text-md mt-20 rounded-2xl p-4 hover:-translate-y-1 transition-transform duration-300">
          ✍️ MORE POSTS
        </Link>
      </div>
    </div>
  );
}

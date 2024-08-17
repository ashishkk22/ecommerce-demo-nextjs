"use client";

import { getPosts } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Post } from "./Post.client";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const Posts = () => {
  const { data, isLoading } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading....</div>;
  if (!data) return <div>Not found</div>;

  return (
    <section>
      <div className="divide-y">
        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

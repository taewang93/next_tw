"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostComments } from "../_lib/getPostComments";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = { id: string };

export default function Comments({ id }: Props) {
  const { data } = useQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getPostComments,
    staleTime: 60 * 1000,
    gcTime: 300 * 100,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}

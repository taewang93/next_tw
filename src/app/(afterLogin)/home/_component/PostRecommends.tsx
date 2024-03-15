"use client";

import { useQuery } from "@tanstack/react-query";
import getPostRecommends from "../_lib/getPostRecommends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    //staleTime: 0, //fresh > stale
    //gcTime:
  });

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
}

import { useQuery } from "@tanstack/react-query";
import getFollowingPosts from "../_lib/getFollowingPosts";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "following"],
    queryFn: getFollowingPosts,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}

import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import { QueryClient } from "@tanstack/react-query";
import SinglePost from "./_component/SinglePost";
import { getSinglePost } from "./_lib/getSinglePost";
import Comments from "./_component/Comments";

type Props = { params: { id: string } };

export default async function page({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });

  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <SinglePost id={id} />
      <CommentForm />
      <div>
        <Comments id={id} />
      </div>
    </div>
  );
}

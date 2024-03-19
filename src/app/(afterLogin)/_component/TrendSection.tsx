"use client";

import style from "./trendSection.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { getTrends } from "../_lib/getTrends";
import { Hashtag } from "@/model/Hashtag";

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user, // 로그인 했을때만 가져오기
  });

  if (pathname === "/explore") return null;

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        {session?.user ? (
          <>
            <h3>나를 위한 트렌드</h3>
            {data?.map((trend: any) => (
              <Trend key={trend.tagId} trend={trend} />
            ))}
          </>
        ) : (
          <>트렌드를 가져올수 없습니다.</>
        )}
      </div>
    </div>
  );
}

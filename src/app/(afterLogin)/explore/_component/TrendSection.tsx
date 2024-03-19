"use client";

import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/model/Hashtag";
import Trend from "../../_component/Trend";
import { getTrends } from "../../_lib/getTrends";

export default function TrendSection() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  console.log("explore", data);

  return data?.map((trend) => <Trend key={trend.tagId} trend={trend} />);
}

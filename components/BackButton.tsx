"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

export const BackButton: FC = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="text-xl font-semibold">
      {"<- Back"}
    </button>
  );
};

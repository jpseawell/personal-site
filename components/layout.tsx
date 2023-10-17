import { ReactNode } from "react";

import { Inter } from "next/font/google";
import BorderContainer from "./borderContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main
        className={`max-w-2xl m-auto flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <BorderContainer>{children}</BorderContainer>
      </main>
    </>
  );
}

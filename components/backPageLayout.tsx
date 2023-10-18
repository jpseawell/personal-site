import { ReactNode } from "react";

import { Inter } from "next/font/google";
import BackButton from "./backButton";

const inter = Inter({ subsets: ["latin"] });

export default function BackPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main
        className={`p-4 max-w-2xl m-auto flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className={"text-left w-full"}>
          <div className={"pb-4"}>
            <BackButton />
          </div>

          {children}
        </div>
      </main>
    </>
  );
}

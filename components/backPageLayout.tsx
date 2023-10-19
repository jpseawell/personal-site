import { ReactNode } from "react";

import { Inter } from "next/font/google";
import BackButton from "./backButton";
import CustomHead from "./customHead";

const inter = Inter({ subsets: ["latin"] });

type BackPageLayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function BackPageLayout({
  title,
  children,
}: BackPageLayoutProps) {
  return (
    <>
      <CustomHead title={title} />
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

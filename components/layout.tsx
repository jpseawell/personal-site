import { ReactNode } from "react";

import { Inter } from "next/font/google";
import BorderContainer from "./borderContainer";
import CustomHead from "./customHead";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <CustomHead title={title} />
      <main
        className={`max-w-2xl m-auto flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <BorderContainer>{children}</BorderContainer>
      </main>
    </>
  );
}

import { ReactNode } from "react";

import { Inter, IBM_Plex_Mono } from "next/font/google";
import Container from "./container";
import CustomHead from "./customHead";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <CustomHead title={title} />
      <main
        className={`max-w-2xl m-auto flex flex-col items-center justify-between ${inter.className} ${ibmPlexMono.variable}`}
        style={{ minHeight: "calc(100vh - 3rem)" }}
      >
        <Container className="flex-1 w-full flex flex-col">
          {children}
        </Container>
      </main>
      <div className="my-4  text-center font-['IBM_Plex_Mono',monospace] text-gray-400 text-xs">
        © {new Date().getFullYear()} Justin Seawell. All rights reserved.
      </div>
    </>
  );
}

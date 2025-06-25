import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ShowcaseTileProps {
  children: React.ReactNode;
  link: string;
  imageUrl: string;
  className?: string;
}

const ShowcaseTile = ({
  children,
  link,
  imageUrl,
  className,
}: ShowcaseTileProps) => {
  return (
    <div className="relative w-full aspect-[3/1] md:aspect-[4/1] min-h-[240px] md:min-h-[300px] rounded-xl overflow-hidden">
      <div className="absolute z-0 top-0 right-0 md:right-6 w-4/5 h-full">
        <Image
          src={imageUrl}
          alt="Showcase background"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute z-10 top-4 md:top-6 left-1 md:left-6 w-2/3 bg-stone-100/90 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col items-start">
        <div className="text-md md:text-lg">{children}</div>
        <Link href={link} className="font-semibold mt-4 inline-block text-base">
          See More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseTile;

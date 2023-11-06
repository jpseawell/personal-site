import { content } from "@/data/content";
import Image from "next/image";
import githubSVG from "../public/github-mark-white.svg";

export default function Profile() {
  return (
    <div className="relative">
      <div className="mb-2 relative">
        {/* Banner */}
        <div
          className={`bg-slate-800 h-32 bg-[url('/banner.png')] bg-cover bg-center`}
        ></div>
        {/* Avatar */}
        <div
          className={`bg-slate-800 rounded-full md:h-32 md:w-32 h-24 w-24 absolute top-16 md:top-16 left-4 border-2 border-slate-800 bg-[url('/avatar.jpg')] bg-contain bg-center shadow-md`}
        ></div>
        <div className="text-right p-4">
          <a
            href="https://github.com/jpseawell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="inline-block"
              src={githubSVG}
              alt="Justin's Github"
              width={28}
              height={28}
            />
          </a>
        </div>

        {/* Profile Info */}
        <div className="prose mt-0 md:mt-8 p-4 prose dark:prose-invert">
          <h2>{content.profileName}</h2>
          <p>{content.profileBio}</p>
        </div>
      </div>
    </div>
  );
}

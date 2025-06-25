import { content } from "@/data/content";

export default function Profile() {
  return (
    <div className=" flex items-center justify-center">
      {/* Avatar */}
      <div
        className={`bg-slate-800 rounded-full h-[100px] w-[100px] md:h-[150px] md:w-[150px] bg-[url('/avatar.jpg')] bg-contain bg-center flex-shrink-0`}
      ></div>

      {/* Profile Info */}
      <div className="mt-0 pl-4 md:pl-8 flex-1 animate-in fade-in slide-in-from-top-12 duration-500">
        <h1 className="mb-0 text-2xl md:text-4xl font-semibold font-ibm-plex-mono">
          {content.profileName}
        </h1>
        <p className="mt-0 mb-3 font-medium md:text-lg">{content.profileBio}</p>
        <div className="flex gap-6">
          <a
            href={content.linkedIn}
            className="underline font-regular text-[12px] md:text-sm transition-colors hover:text-[rgb(var(--highlight))]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={content.github}
            className="underline font-regular text-[12px] md:text-sm transition-colors hover:text-[rgb(var(--highlight))]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={`mailto:${content.email}`}
            className="underline font-regular text-[12px] md:text-sm transition-colors hover:text-[rgb(var(--highlight))]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href={content.twitter}
            className="underline font-regular text-[12px] md:text-sm transition-colors hover:text-[rgb(var(--highlight))]"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
}

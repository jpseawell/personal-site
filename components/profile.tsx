import { content } from "@/data/content";

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

        {/* Profile Info */}
        <div className="prose mt-12 md:mt-20 p-4 prose dark:prose-invert">
          <h2>{content.profileName}</h2>
          <p>{content.profileBio}</p>
        </div>
      </div>
    </div>
  );
}

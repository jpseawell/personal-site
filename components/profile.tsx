import { content } from "@/data/content";

export default function Profile() {
  return (
    <div className="relative">
      <div className="mb-6 relative">
        {/* Banner */}
        <div
          className={`bg-slate-800 h-32 bg-[url('/${content.profileBannerImg}')] bg-cover bg-center`}
        ></div>
        {/* Avatar */}
        <div
          className={`bg-slate-800 rounded-full h-24 w-24 absolute top-24 left-4 border-2 border-slate-50 bg-[url('/${content.profileAvatar}')] bg-contain bg-center shadow-md`}
        ></div>

        {/* Profile Info */}
        <div className="prose mt-20 p-4 prose dark:prose-invert">
          <h2>{content.profileName}</h2>
          <p>{content.profileBio}</p>
        </div>
      </div>
    </div>
  );
}

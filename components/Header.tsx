import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="mb-12 relative">
      {/* Banner */}
      <div className="bg-slate-800 h-28 bg-[url('/banner.png')] bg-cover bg-center"></div>
      {/* Avatar */}
      <div className="bg-slate-800 rounded-full h-20 w-20 absolute top-20 left-4 border-2 border-slate-50 bg-[url('/avatar.jpg')] bg-contain bg-center shadow-md"></div>
    </div>
  );
};

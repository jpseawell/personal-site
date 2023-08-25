import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="mb-12 relative">
      <div className="bg-slate-800 h-28"></div>
      <div className="bg-slate-800 rounded-full h-20 w-20 absolute top-20 left-4 border-2 border-slate-50"></div>
    </div>
  );
};

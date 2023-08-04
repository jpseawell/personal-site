import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="mb-12 relative">
      <div className="bg-slate-800 h-28"></div>
      <div className="bg-white rounded-full h-20 w-20 absolute top-20 left-4 border-4 border-slate-950"></div>
    </div>
  );
};

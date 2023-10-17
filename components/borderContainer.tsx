import { ReactNode } from "react";

export default function BorderContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className={`w-full min-h-screen border-solid border-x border-slate-600`}
    >
      {children}
    </div>
  );
}

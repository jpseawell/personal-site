import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full px-6 pt-10 md:pt-20 pb-6 flex flex-col gap-10 md:gap-12 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}

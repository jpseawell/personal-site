import Link, { LinkProps } from "next/link";
import React from "react";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <Link className="text-orange-600" {...props}>
      {children}
    </Link>
  );
};

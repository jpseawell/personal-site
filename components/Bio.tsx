import { FC } from "react";
import { CustomLink } from "./CustomLink";

export const Bio: FC = () => {
  return (
    <div className="my-4 p-4">
      <p className="text-lg">Justin Seawell 👨🏻‍🏭</p>
      <br />
      <p>Digital Creator & Software Engineer</p>
      <br />
      <CustomLink href="/about">About Me</CustomLink> |{" "}
      <CustomLink href="/resume">Resumé</CustomLink>
    </div>
  );
};

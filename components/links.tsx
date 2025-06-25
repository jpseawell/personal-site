import Link from "next/link";
import { LinkItem } from "@/types/link";

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <>
      <h3 className="not-prose font-['IBM_Plex_Mono',monospace] font-normal !font-normal text-xl md:text-xl">
        Links
      </h3>
      <ul className="mt-4 list-disc list-inside space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="underline font-normal transition-colors hover:text-[rgb(var(--highlight))]"
              {...(link.openNewTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

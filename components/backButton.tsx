import Link from "next/link";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <Link
      href="/"
      className="inline-flex items-center text-sm font-ibm-plex-mono hover:underline"
      style={{ color: "rgb(var(--foreground-rgb))" }}
    >
      &#8592; Back
    </Link>
  );
}

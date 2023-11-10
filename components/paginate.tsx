import Link from "next/link";

type PaginateProps = {
  currentPage: number;
  isFirst?: boolean;
  isLast?: boolean;
};

export default function Paginate({
  currentPage,
  isFirst,
  isLast,
}: PaginateProps) {
  return (
    <div className="prose dark:prose-invert text-sm flex justify-between p-4 slate-700 w-full m-auto">
      <div>
        {!isFirst && (
          <Link
            href={`/feed/${currentPage - 1}`}
            className="no-underline text-slate-400"
          >
            {"<- Prev"}
          </Link>
        )}
      </div>
      <div>
        {!isLast && (
          <Link
            href={`/feed/${currentPage + 1}`}
            className="no-underline text-slate-400"
          >
            {"Next ->"}
          </Link>
        )}
      </div>
    </div>
  );
}

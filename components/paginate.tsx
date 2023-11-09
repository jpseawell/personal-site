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
  // TODO: Style buttons
  return (
    <div className="prose dark:prose-invert text-sm text-center m-auto flex justify-between">
      <div>
        {!isFirst && <a href={`/feed/${currentPage - 1}`}>{"<- Prev"}</a>}
      </div>
      <div>
        {!isLast && <a href={`/feed/${currentPage + 1}`}>{"Next ->"}</a>}
      </div>
    </div>
  );
}

import { NowReading } from "~/actions/now-reading.server";

function Book({ book }: { book: NowReading }) {
  const { url, cover, title, author } = book;
  return (
    <a
      href={url}
      target="_blank"
      title="View on Literal"
      rel="noopener noreferrer"
      className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
    >
      <div className="group flex items-center gap-4">
        <div className="relative">
          <div className="relative origin-center w-12">
            <img
              className="rounded-sm"
              src={cover}
              alt={title}
              width={64}
              height={96}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="line-clamp-1 text-sm">{title}</div>
          <div className="line-clamp-1 text-sm slashed-zero text-muted-foreground">
            {author}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Book;

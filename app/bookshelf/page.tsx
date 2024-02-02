import { SimpleLayout } from "@/components";
import { Button } from "@/components/ui/button";
import { books } from "@/db/books";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function BookshelfPage() {
  return (
    <SimpleLayout
      title="My personal favorites"
      intro="Here are a few books I highly recommend that helped me improve my product management and software development skills."
    >
      <ul role="list" className="mt-8 grid grid-cols-1">
        {books.map((book) => (
          <li key={book.title} className="flex py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-4 sm:space-y-0">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 w-32 sm:col-span-2 sm:w-40">
                <Image
                  quality={100}
                  width={135}
                  height={120}
                  className="object-cover"
                  src={book.cover}
                  alt=""
                />
              </div>
              <div className="sm:col-span-6 sm:ml-2">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-medium text-foreground sm:text-lg">
                      {book.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      by {book.author}
                    </p>
                  </div>
                  <p className="dark:text-gray-4000 text-justify font-sans text-sm text-foreground">
                    {book.review}
                  </p>
                  <div className="pt-2 ">
                    <a href={book.literalUrl} target="_blank">
                      <Button variant="link" className="text-foreground/60">
                        Literal <ArrowTopRightIcon />
                      </Button>
                    </a>
                    <a href={book.goodReadsUrl} target="_blank">
                      <Button variant="link" className="text-foreground/60">
                        Goodreads <ArrowTopRightIcon />
                      </Button>
                    </a>
                    <a href={book.amazonUrl} target="_blank">
                      <Button variant="link" className="text-foreground/60">
                        Amazon <ArrowTopRightIcon />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}

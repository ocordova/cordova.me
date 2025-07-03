import { defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData, useRevalidator } from "react-router-dom";
import { Suspense, useEffect } from "react";
import {
  getNowListening,
  type NowListening,
} from "~/actions/now-listening.server";
import { getNowReading, NowReading } from "~/actions/now-reading.server";
import {
  getNowWatching,
  type NowWatching,
} from "~/actions/now-watching.server";
import Book from "~/components/book";
import Movie from "~/components/movie";
import About from "~/components/about";
import Contact from "~/components/contact";
import Bookmarks from "~/components/latest-bookmarks";
import Now from "~/components/now";
import WorkPhilosophy from "~/components/work-philosophy";
import SongPlaying from "~/components/song-playing";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

export const meta: MetaFunction = () => {
  return [
    { title: "Óscar Córdova" },
    {
      name: "description",
      content: "Software Engineer by day, Product Manager by night",
    },
  ];
};

type LoaderData = {
  nowListeningPromise: ReturnType<typeof getNowListening>;
  nowReadingPromise: ReturnType<typeof getNowReading>;
  nowWathingPromise: ReturnType<typeof getNowWatching>;
};

function loadDeferredData() {
  return {
    nowListeningPromise: getNowListening(),
    nowReadingPromise: getNowReading(),
    nowWathingPromise: getNowWatching(),
  };
}

export const loader = async () => {
  const deferredData = loadDeferredData();

  return defer<LoaderData>({
    ...deferredData,
  });
};

const INTERVAL_30_SECONDS = 30 * 1000;

export default function Index() {
  const { nowListeningPromise, nowReadingPromise, nowWathingPromise } =
    useLoaderData<LoaderData>();

  const revalidator = useRevalidator();

  useEffect(() => {
    const interval = setInterval(() => {
      if (revalidator.state === "idle") {
        revalidator.revalidate();
      }
    }, INTERVAL_30_SECONDS);

    return () => {
      clearInterval(interval);
    };
  }, [revalidator]);

  return (
    <>
      <About />
      <WorkPhilosophy />
      <Now />
      <Bookmarks />
      <Contact />
      <NowListening promise={nowListeningPromise as Promise<NowListening>} />
      <Reading promise={nowReadingPromise as Promise<NowReading>} />
      <NowWatching promise={nowWathingPromise as Promise<NowWatching>} />
    </>
  );
}

function NowListening({
  promise,
}: {
  promise: ReturnType<typeof getNowListening>;
}) {
  return (
    <section className="mt-12">
      <Suspense
        fallback={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-16 w-16 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[140px]" />
            </div>
          </div>
        }
      >
        <Await
          resolve={promise}
          errorElement="There was an error loading the latest song"
        >
          {(latestSong) => <SongPlaying song={latestSong} />}
        </Await>
      </Suspense>
    </section>
  );
}

function Reading({ promise }: { promise: ReturnType<typeof getNowReading> }) {
  return (
    <section className="mt-12">
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Reading</h2>
        <a
          href="https://literal.club/ocordova"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -mr-3"
          >
            View all
          </Button>
        </a>
      </div>
      <div className="mt-2 list-content grid gap-4">
        <Suspense
          fallback={
            <div className="flex items-center space-x-4">
              <Skeleton className="h-16 w-12 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[140px]" />
              </div>
            </div>
          }
        >
          <Await
            resolve={promise}
            errorElement="There was an error loading the latest book"
          >
            {(latestBook) => <Book book={latestBook} />}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}

function NowWatching({
  promise,
}: {
  promise: ReturnType<typeof getNowWatching>;
}) {
  return (
    <section className="mt-16">
      <Suspense
        fallback={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-16 w-16 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[140px]" />
            </div>
          </div>
        }
      >
        <Await
          resolve={promise}
          errorElement="There was an error loading the latest movie"
        >
          {(latestMovie) => <Movie movie={latestMovie} />}
        </Await>
      </Suspense>
    </section>
  );
}

export const meta = {
  title: "404",
  description: "Page not found",
};

export const NotFound = () => {
  return (
    <>
      <div className="mx-auto min-h-full pt-20 pb-20 text-center sm:pt-40 sm:pb-40">
        <p className="text-2xl leading-8 text-foreground">404</p>
        <h1 className="mt-3 text-4xl font-normal leading-tight text-muted-foreground sm:text-5xl sm:leading-snug">
          Page not found
        </h1>
        <p className="mt-2 text-base leading-8 text-foreground">
          Sorry, we couldn’t find the page you’re looking for
        </p>
      </div>
    </>
  );
};

export default NotFound;

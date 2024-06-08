const Now = () => {
  return (
    <>
      <section className="mt-12">
        <h2 className="my-4 font-medium tracking-tight text-forground">Now</h2>
        <p className="text-sm leading-7">
          I work as a Software Engineer by day at{" "}
          <span className="font-medium">________</span> and as a Product Manager
          by night at{" "}
          <a
            className="underline-offset-4 underline hover:no-underline transition-all duration-200"
            href="https://artiflora.mx"
            target="_blank"
            rel="noreferrer"
          >
            Artiflora
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default Now;

const Now = () => {
  return (
    <>
      <section className="mt-12">
        <h2 className="my-4 font-medium tracking-tight text-forground">Now</h2>
        <p className="text-sm leading-7">
          By day, I work as a Lead Engineer at{" "}
          <a
            className="underline-offset-4 underline hover:no-underline transition-all duration-200"
            href="https://www.summit-mgmt.mx"
            target="_blank"
            rel="noreferrer"
          >
            Summit Management;
          </a>{" "}
          by night, as a Product Manager at{" "}
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

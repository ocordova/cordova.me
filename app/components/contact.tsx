const Contact = () => {
  return (
    <section className="mt-12">
      <h2 className="my-4 font-medium tracking-tight text-foreground">
        Contact
      </h2>
      <p className="text-sm leading-7">
        You can reach me at{" "}
        <a
          className="underline-offset-4 underline hover:no-underline transition-colors duration-200"
          href="mailto:oscar@cordova.me"
          target="_blank"
          rel="noreferrer"
        >
          oscar@cordova.me
        </a>{" "}
        or{" "}
        <a
          className="underline-offset-4 underline hover:no-underline transition-colors duration-200"
          href="https://t.me/ocordova"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;

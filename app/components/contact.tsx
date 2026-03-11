const Contact = () => {
  return (
    <section className="mt-12">
      <h2 className="my-4 font-serif text-lg font-medium tracking-tight text-foreground">
        Contact
      </h2>
      <p className="text-sm leading-7">
        You can reach me at{" "}
        <a
          className="link-underline"
          href="mailto:oscar@cordova.me"
          target="_blank"
          rel="noreferrer"
        >
          oscar@cordova.me
        </a>{" "}
        or{" "}
        <a
          className="link-underline"
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

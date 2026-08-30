const Contact = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-3 font-serif text-xl font-medium tracking-tight text-foreground">
        Contact
      </h2>
      <p className="text-[15px] leading-7">
        You can reach me at{" "}
        <a className="link-underline" href="mailto:oscar@cordova.me">
          oscar@cordova.me
        </a>{" "}
        or{" "}
        <a
          className="link-underline"
          href="https://t.me/ocordova"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;

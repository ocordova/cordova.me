const Introduction = () => {
  return (
    <>
      <section>
        <div className="flex flex-col">
          <h2 className="font-semibold">Óscar Córdova</h2>
          <p className="text-sm text-muted-foreground">Product Engineer</p>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="my-4 font-medium tracking-tight text-forground">
          Work Philosophy
        </h2>
        <p className="text-sm leading-7 text-justify">
          I prioritize measurable outcomes over outputs, emphasizing long-term
          sustainability over short-term profit. I engage directly with
          customers and analyze data to ensure our solutions effectively address
          real unmet needs.
        </p>
      </section>
    </>
  );
};

export default Introduction;

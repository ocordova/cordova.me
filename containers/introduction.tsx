const Introduction = () => {
  return (
    <>
      <section>
        <div className="flex flex-col">
          <h2 className="font-semibold">Óscar Córdova</h2>
          <p className="text-sm text-muted-foreground">Product Engineer</p>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="my-4 font-medium tracking-tight text-forground">
          About
        </h2>
        <p className="text-sm leading-7">
          I prioritize outcomes and impact over tools or methods. I place
          problems before ideas and craft solutions through direct customer
          engagement and data to ensure we solve real-life problems.
        </p>
        <p className="text-sm leading-7 [&:not(:first-child)]:mt-3">
          Currently, I work as a Software Engineer by day at ________ and as a
          Product Manager by night at Artiflora.
        </p>
      </section>
    </>
  );
};

export default Introduction;

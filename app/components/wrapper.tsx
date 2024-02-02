import clsx from "clsx";

export const Wrapper = ({ className, ...props }: any) => {
  return <div className={clsx("mx-auto max-w-xl my-6", className)} {...props} />;
};

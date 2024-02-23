import { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-xl my-6">{children}</div>;
};

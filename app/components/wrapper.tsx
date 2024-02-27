import { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full mx-auto max-w-lg">{children}</div>;
};

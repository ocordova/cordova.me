import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <div className="w-full mx-auto max-w-lg">{children}</div>;
}

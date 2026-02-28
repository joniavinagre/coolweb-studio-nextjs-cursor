import { type ReactNode } from "react";
import HeaderNext from "./HeaderNext";
import FooterNext from "./FooterNext";

interface LayoutNextProps {
  children: ReactNode;
}

const LayoutNext = ({ children }: LayoutNextProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeaderNext />
      <main className="flex-1">{children}</main>
      <FooterNext />
    </div>
  );
};

export default LayoutNext;

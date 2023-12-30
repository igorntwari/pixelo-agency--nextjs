import NavBar from "@/components/nav-bar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <NavBar />
      {children}
    </div>
  );
}

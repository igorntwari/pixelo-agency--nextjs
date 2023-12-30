import NavBar from "@/components/nav-bar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
}

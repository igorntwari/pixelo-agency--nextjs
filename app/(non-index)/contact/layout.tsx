import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactWrapper({ children }: PropsWithChildren) {
  return <>{children}</>;
}

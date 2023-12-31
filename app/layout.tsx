import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./assets";
import Footer from "@/components/footer";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Pixelo agency",
  description: "Graphic design company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(dmSans.className, "w-screen overflow-x-hidden")}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

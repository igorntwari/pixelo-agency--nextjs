import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./assets";
import Footer from "@/components/footer";

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
      <body className={dmSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

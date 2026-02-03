import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "../../globals.css";
import Container from "@/components/Container";

import Footer from "@/components/Footer/Footer";
import TripsNavbar from "@/components/desktop/TripsNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Julan",
  description: "Book your vacations and stay anywhere you want",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden md:block">
        <TripsNavbar />
      </div>
      <div className="">
        <Container>
          <div className="min-h-screen">{children}</div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

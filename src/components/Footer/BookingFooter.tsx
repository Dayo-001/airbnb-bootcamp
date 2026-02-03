import React from "react";
import Container from "../Container";
import Link from "next/link";
import FutureGetAways from "./FutureGetAways";
import FooterMenu from "./FooterMenu";
import { MIDDOT } from "@/lib/constants";

type Props = {};

const BookingFooter = (props: Props) => {
  return (
    <div className=" bg-gray-50">
      <Container>
        Privacy{MIDDOT}Terms{MIDDOT} Your Privacy Choices
      </Container>
    </div>
  );
};

export default BookingFooter;

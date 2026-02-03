import React from "react";
import Logo from "../logo/Logo";
import Container from "../Container";

const BookingNavbar = () => {
  return (
    <div className="bg-gray-50 w-full shadow-xs ">
      <Container>
        <div className="flex   justify-between items-center ">
          <Logo />
        </div>
      </Container>
    </div>
  );
};

export default BookingNavbar;

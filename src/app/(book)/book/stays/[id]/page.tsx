import { getListingWithRelations } from "@/db/listing";
import React from "react";
import BookingClient from "./BookingClient";

type Props = {};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const listing = await getListingWithRelations(id);
  if (!listing) {
    return <>Listing Not Found</>;
  }

  return <BookingClient listing={listing} />;
};

export default page;

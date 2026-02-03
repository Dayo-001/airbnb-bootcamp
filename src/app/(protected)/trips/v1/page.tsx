import React from "react";
import TripsClient from "./TripsClient";
import { getSession } from "next-auth/react";
import { getTrips } from "@/db/trips";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";

type Props = {};

const TripsPage = async (props: Props) => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  const trips = await getTrips(session.user.id);

  if (!trips.success) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Unable to load trips
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            {trips.message ||
              "Something went wrong while loading your trips. Please try again later."}
          </p>
          <a
            href="/trips/v1"
            className="mt-4 px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#E31C5F] transition"
          >
            Try again
          </a>
        </div>
      </div>
    );
  }

  if (trips.data.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">No trips yet</h1>
          <p className="text-gray-600 text-center max-w-md">
            When you book a trip, it will show up here.
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#E31C5F] transition"
          >
            Start exploring
          </Link>
        </div>
      </div>
    );
  }

  return <TripsClient trips={trips.data} />;
};

export default TripsPage;

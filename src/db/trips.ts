"use server";

import { prisma } from "@/lib/prisma";

export const getTrips = async (guestId: string) => {
  try {
    const trips = await prisma.reservation.findMany({
      where: {
        guestId,
      },
      include: {
        listing: {
          include: {
            photos: true,
            user: true,
          },
        },
      },
      orderBy: {
        checkInDate: "desc",
      },
    });

    if (!trips || trips.length === 0) {
      return {
        success: false,
        message: "No trips found",
        data: [],
      };
    }

    return {
      success: true,
      message: "Trips retrieved successfully",
      data: trips,
    };
  } catch (error) {
    console.error("Error fetching trips:", error);
    return {
      success: false,
      message: "Failed to fetch trips",
      error: error instanceof Error ? error.message : "Unknown error",
      data: [],
    };
  }
};
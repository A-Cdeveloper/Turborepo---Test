import { NextResponse } from "next/server";
import { prisma } from "@repo/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Prisma pagination
    const skip = (page - 1) * limit;

    //await new Promise((resolve) => setTimeout(resolve, 4000));

    const cars = await prisma.car.findMany({
      include: { brand: true },
      skip,
      take: limit,
      orderBy: { kilometers: "asc" },
    });

    return NextResponse.json({
      success: true,
      data: cars,
      error: null,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      data: null,
      error: error,
      status: 500,
    });
  }
}

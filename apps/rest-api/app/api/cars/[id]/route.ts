import { prisma } from "@repo/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const car = await prisma.car.findUnique({
      where: { id: Number(id) },
      include: { brand: true },
    });

    if (!car) {
      return NextResponse.json({
        success: false,
        data: null,
        error: "Car not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      data: car,
      error: null,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: null,
      error: error,
      status: 500,
    });
  }
}

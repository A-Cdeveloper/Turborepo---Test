import { NextResponse } from "next/server";
import { prisma } from "@repo/prisma";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      include: { brand: true },
    });

    return NextResponse.json({
      success: true,
      data: cars,
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

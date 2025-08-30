import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const cars = await prisma.car.findMany();
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

import { NextResponse } from "next/server";
import {
  getMotorcycleByIdPg,
  updateMotorcyclePg,
  deleteMotorcyclePg,
} from "@/utils/dbPg";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const motorcycle = await getMotorcycleByIdPg(id);

    if (!motorcycle) {
      return NextResponse.json(
        { error: "Motorcycle not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(motorcycle);
  } catch (error) {
    console.error("Error fetching motorcycle:", error);
    return NextResponse.json(
      { error: "Failed to fetch motorcycle" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const { id } = await params;

    const existing = await getMotorcycleByIdPg(id);
    if (!existing) {
      return NextResponse.json(
        { error: "Motorcycle not found" },
        { status: 404 }
      );
    }

    const data = {};
    if (body.brand !== undefined) data.brand = body.brand;
    if (body.name !== undefined) data.name = body.name;
    if (body.model !== undefined) data.model = body.model;
    if (body.year !== undefined) data.year = String(body.year);
    if (body.price !== undefined) data.price = Number(body.price);
    if (body.engine !== undefined) data.engine = body.engine;
    if (body.engineCapacity !== undefined)
      data.engineCapacity = parseInt(body.engineCapacity, 10);
    if (body.gear !== undefined) data.gear = body.gear;
    if (body.color !== undefined) data.color = body.color;
    if (body.tags !== undefined) data.tags = body.tags || null;
    if (body.description !== undefined)
      data.description = body.description || null;
    if (body.specification !== undefined)
      data.specification = body.specification || null;

    if (body.images !== undefined) {
      data.images = body.images.map((img, i) => ({
        url: img.url,
        displayOrder: img.displayOrder ?? i,
      }));
    }

    const motorcycle = await updateMotorcyclePg(id, data);
    return NextResponse.json(motorcycle);
  } catch (error) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A motorcycle with this brand, name, and year already exists" },
        { status: 409 }
      );
    }
    console.error("Error updating motorcycle:", error);
    return NextResponse.json(
      { error: "Failed to update motorcycle" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const existing = await getMotorcycleByIdPg(id);
    if (!existing) {
      return NextResponse.json(
        { error: "Motorcycle not found" },
        { status: 404 }
      );
    }

    await deleteMotorcyclePg(id);
    return NextResponse.json({ message: "Motorcycle deleted successfully" });
  } catch (error) {
    console.error("Error deleting motorcycle:", error);
    return NextResponse.json(
      { error: "Failed to delete motorcycle" },
      { status: 500 }
    );
  }
}

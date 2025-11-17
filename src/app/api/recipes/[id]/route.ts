import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET by ID
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const recipe = await prisma.recipe.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json(recipe);
}

// UPDATE (PUT)
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await request.json();

  const updated = await prisma.recipe.update({
    where: { id: Number(id) },
    data: {
      name: body.name,
      category: body.category,
      instructions: body.instructions,
    },
  });

  return NextResponse.json(updated);
}

// DELETE
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await prisma.recipe.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "Recipe deleted" });
}

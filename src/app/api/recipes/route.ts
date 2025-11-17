import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all recipes
export async function GET() {
  const recipes = await prisma.recipe.findMany({
    orderBy: { id: "desc" },
  });

  return NextResponse.json(recipes);
}

// CREATE new recipe
export async function POST(request: Request) {
  const body = await request.json();

  const { name, category, instructions } = body;

  const newRecipe = await prisma.recipe.create({
    data: {
      name,
      category,
      instructions,
    },
  });

  return NextResponse.json(newRecipe);
}

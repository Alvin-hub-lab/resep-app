"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Recipe {
  id: number;
  name: string;
  category: string;
  instructions: string;
  createdAt: string;
}

export default function RecipeDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <p className="container mt-5">Loading...</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-3">{recipe.name}</h2>
      <p className="text-muted">{recipe.category}</p>

      <div className="card p-4 shadow-sm mb-4">
        <h5>Instruksi:</h5>
        <p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions}</p>
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-secondary"
          onClick={() => router.push("/recipes")}
        >
          Kembali ke Daftar Resep
        </button>

        <button
          className="btn btn-warning"
          onClick={() => router.push(`/recipes/${id}/edit`)}
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={async () => {
            const confirmDelete = confirm("Yakin ingin menghapus resep ini?");
            if (!confirmDelete) return;

            await fetch(`/api/recipes/${id}`, { method: "DELETE" });

            router.push("/recipes");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

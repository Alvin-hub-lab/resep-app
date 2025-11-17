"use client";

import { useState, useEffect } from "react";

interface Recipe {
  id: number;
  name: string;
  category: string;
  instructions: string;
  createdAt: string;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Daftar Resep</h2>

      <a href="/recipes/create" className="btn btn-primary mb-3">
        + Tambah Resep Baru
      </a>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text text-muted">{recipe.category}</p>

                    <a href={`/recipes/${recipe.id}`} className="btn btn-primary btn-sm mt-2">
                        Detail
                    </a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

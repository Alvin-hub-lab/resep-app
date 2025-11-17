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

      {/* Tombol Kembali */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => (window.location.href = "/")}
      >
        Kembali ke Halaman Utama
      </button>

      <a href="/recipes/create" className="btn btn-primary mb-3 ms-2">
        Tambah Resep Baru
      </a>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div
              className="card h-100 shadow-sm"
              onClick={() => (window.location.href = `/recipes/${recipe.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="text-muted">{recipe.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

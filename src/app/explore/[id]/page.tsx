"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strInstructions?: string;
}

export default function MealDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals ? data.meals[0] : null));
  }, [id]);

  if (!meal) return <p className="container mt-5">Loading...</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-3">{meal.strMeal}</h2>
      <p className="text-muted">{meal.strCategory}</p>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="img-fluid rounded shadow mb-4"
      />

      <div className="card p-4 shadow-sm mb-4">
        <h5>Instruksi:</h5>
        <p style={{ whiteSpace: "pre-wrap" }}>{meal.strInstructions}</p>
      </div>

      <button className="btn btn-secondary" onClick={() => router.push("/explore")}>
        Kembali
      </button>
    </div>
  );
}

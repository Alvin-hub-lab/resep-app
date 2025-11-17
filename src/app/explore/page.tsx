"use client";

import { useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);

  const searchMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Explore Resep dari Internet</h2>

      <div className="input-group mb-4">
        <input
          className="form-control"
          placeholder="Cari resep (misal: chicken)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={searchMeals}>
          Cari
        </button>
      </div>

      <div className="row">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>

                <a
                  href={`/explore/${meal.idMeal}`}
                  className="btn btn-primary btn-sm mt-2"
                >
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

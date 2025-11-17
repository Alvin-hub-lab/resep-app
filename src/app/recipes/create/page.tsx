"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateRecipe() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, instructions }),
    });

    if (res.ok) {
      router.push("/recipes"); // kembali ke list
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Tambah Resep Baru</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

        <div className="mb-3">
          <label className="form-label">Nama Resep</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Kategori</label>
          <input
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Instruksi</label>
          <textarea
            className="form-control"
            rows={5}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>

        <button className="btn btn-primary">Simpan Resep</button>
      </form>
    </div>
  );
}

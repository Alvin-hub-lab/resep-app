"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditRecipePage() {
  const { id } = useParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setCategory(data.category);
        setInstructions(data.instructions);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`/api/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, instructions }),
    });

    router.push(`/recipes/${id}`);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Edit Resep</h2>

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

        <button className="btn btn-warning">Simpan Perubahan</button>
      </form>

      <button
        type="button"
        className="btn btn-secondary mt-3"
        onClick={() => router.push("/")}
      >
        Kembali ke Halaman Utama
      </button>
    </div>
  );
}

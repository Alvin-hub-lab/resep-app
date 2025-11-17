import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center mb-3">Aplikasi Web Resep</h1>

        <h5 className="text-center text-muted mb-4">
          Dibuat untuk memenuhi tugas quiz React & Next.js
        </h5>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="list-group">
              <div className="list-group-item">
                <strong>Nama:</strong> Xaverius William Alvin
              </div>
              <div className="list-group-item">
                <strong>NIM:</strong> 535240189
              </div>
              <div className="list-group-item">
                <strong>Topik Project:</strong> Aplikasi Web Resep
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="/recipes" className="btn btn-primary btn-lg">
            Mulai
          </a>
          <a href="/explore" className="btn btn-info mt-3">
            Explore Resep Internet
          </a>
        </div>
      </div>
    </div>
  );
}

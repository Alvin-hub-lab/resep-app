import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <h1 className="display-5 fw-bold">Resep Lezat di Satu Tempat</h1>
              <p className="lead mb-4">
                Temukan, buat, dan bagikan resep masakan favoritmu — cepat,
                mudah, dan penuh inspirasi.
              </p>

              <div>
                <a href="/recipes" className="btn btn-primary btn-lg me-2">
                  Bikin Resep
                </a>
                <a href="/explore" className="btn btn-outline-light btn-lg">
                  Explore
                </a>
              </div>
            </div>

            <div className="col-md-6 d-none d-md-block">
              <Image
                src="/1.svg"
                alt="Masakan lezat"
                width={700}
                height={475}
                className="img-fluid rounded shadow hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="card shadow-lg p-4">
          <h2 className="text-center mb-3">Aplikasi Web Resep</h2>

          <h5 className="text-center text-muted mb-4">
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

          {/* Middle CTA buttons removed as requested */}
        </div>
      </section>
    </main>
  );
}

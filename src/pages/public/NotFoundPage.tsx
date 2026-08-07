import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";

import "./NotFoundPage.css";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="public-not-found" aria-labelledby="not-found-title">
      <div className="public-shell-container public-not-found__inner">
        <p className="public-not-found__code">404</p>

        <h1 id="not-found-title">Halaman tidak ditemukan</h1>

        <p>
          Alamat yang dibuka mungkin salah, sudah berubah, atau tidak lagi
          tersedia.
        </p>

        <div className="public-not-found__actions">
          <Button
            variant="outline"
            leadingIcon={<ArrowLeft />}
            onClick={() => navigate(-1)}
          >
            Kembali
          </Button>

          <Button leadingIcon={<Home />} onClick={() => navigate("/")}>
            Ke Beranda
          </Button>
        </div>
      </div>
    </section>
  );
}
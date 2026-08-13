import {
  ArrowRight,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  FormField,
  PasswordInput,
  TextInput,
} from "../../components";
import { internalRoutes } from "../../routes";

import "./InternalPages.css";

export function InternalLoginPage() {
  const navigate = useNavigate();

  return (
    <section
      className="internal-login"
      aria-labelledby="internal-login-title"
    >
      <div className="internal-login__card">
        <div className="internal-login__heading">
          <span
            className="internal-login__icon"
            aria-hidden="true"
          >
            <LockKeyhole />
          </span>

          <div>
            <p className="internal-login__eyebrow">
              Portal Internal
            </p>

            <h1 id="internal-login-title">
              Masuk ke Portal Internal
            </h1>

            <p>
              Gunakan akun internal Anda untuk melanjutkan ke
              sistem pengelolaan penerimaan.
            </p>
          </div>
        </div>

        <form
          className="internal-login__form"
          onSubmit={(event) => {
            event.preventDefault();
            navigate(internalRoutes.dashboard);
          }}
        >
          <FormField
            htmlFor="internal-login-email"
            label="Email"
          >
            <TextInput
              id="internal-login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nama@stip.ac.id"
              leadingIcon={<Mail />}
              fullWidth
            />
          </FormField>

          <FormField
            htmlFor="internal-login-password"
            label="Kata Sandi"
          >
            <PasswordInput
              id="internal-login-password"
              name="password"
              autoComplete="current-password"
              placeholder="Masukkan kata sandi"
              fullWidth
            />
          </FormField>

          <Checkbox
            name="remember"
            label="Ingat saya"
          />

          <Button
            type="submit"
            size="lg"
            fullWidth
            trailingIcon={<ArrowRight />}
          >
            Masuk
          </Button>
        </form>

        <div className="internal-login__security">
          <ShieldCheck aria-hidden="true" />

          <p>
            Akses hanya untuk petugas, verifikator, admin
            keuangan, dan administrator yang berwenang.
          </p>
        </div>
      </div>
    </section>
  );
}
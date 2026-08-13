import {
  ArrowRight,
  CircleHelp,
  LockKeyhole,
  Mail,
  UserRoundPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  Checkbox,
  FormField,
  PasswordInput,
  TextInput,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

export function ParticipantLoginPage() {
  const navigate = useNavigate();

  return (
    <section
      className="participant-login"
      aria-labelledby="participant-login-title"
    >
      <div className="participant-login__card">
        <div className="participant-login__heading">
          <span
            className="participant-login__heading-icon"
            aria-hidden="true"
          >
            <LockKeyhole />
          </span>

          <div>
            <p className="participant-login__eyebrow">
              Portal Peserta
            </p>

            <h1 id="participant-login-title">
              Masuk ke akun Anda
            </h1>

            <p>
              Gunakan email dan kata sandi yang terdaftar untuk
              melanjutkan proses penerimaan.
            </p>
          </div>
        </div>

        <form
          className="participant-login__form"
          onSubmit={(event) => {
            event.preventDefault();
            navigate(participantRoutes.home);
          }}
        >
          <FormField
            htmlFor="participant-login-email"
            label="Email"
          >
            <TextInput
              id="participant-login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nama@email.com"
              leadingIcon={<Mail />}
              fullWidth
            />
          </FormField>

          <FormField
            htmlFor="participant-login-password"
            label="Kata Sandi"
          >
            <PasswordInput
              id="participant-login-password"
              name="password"
              autoComplete="current-password"
              placeholder="Masukkan kata sandi"
              fullWidth
            />
          </FormField>

          <div className="participant-login__form-options">
            <Checkbox
              name="remember"
              label="Ingat saya"
            />

            <ActionLink
              href={participantRoutes.forgotPassword}
              size="sm"
              onClick={(event) => {
                event.preventDefault();
                navigate(participantRoutes.forgotPassword);
              }}
            >
              Lupa kata sandi?
            </ActionLink>
          </div>

          <Button type="submit" size="lg" fullWidth>
            Masuk
          </Button>
        </form>

        <div className="participant-login__divider">
          <span>atau</span>
        </div>

        <Button
          variant="outline"
          size="lg"
          fullWidth
          leadingIcon={<UserRoundPlus />}
          onClick={() => navigate(participantRoutes.register)}
        >
          Buat Akun Baru
        </Button>

        <div className="participant-login__help">
          <CircleHelp aria-hidden="true" />

          <span>Butuh bantuan?</span>

          <ActionLink
            href={participantRoutes.help}
            size="sm"
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.help);
            }}
          >
            Pusat Bantuan
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
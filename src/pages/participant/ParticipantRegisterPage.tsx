import {
  ArrowRight,
  Mail,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  FormField,
  PasswordInput,
  TextInput,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

export function ParticipantRegisterPage() {
  const navigate = useNavigate();

  return (
    <section
      className="participant-login participant-register"
      aria-labelledby="participant-register-title"
    >
      <div className="participant-login__card">
        <div className="participant-login__heading">
          <span
            className="participant-login__heading-icon"
            aria-hidden="true"
          >
            <UserRound />
          </span>

          <div>
            <p className="participant-login__eyebrow">
              Portal Peserta
            </p>

            <h1 id="participant-register-title">
              Buat akun baru
            </h1>

            <p>
              Gunakan identitas dan email aktif untuk memulai proses
              penerimaan.
            </p>
          </div>
        </div>

        <form
          className="participant-login__form"
          onSubmit={(event) => {
            event.preventDefault();
            navigate(participantRoutes.login);
          }}
        >
          <FormField
            htmlFor="participant-register-name"
            label="Nama Lengkap"
          >
            <TextInput
              id="participant-register-name"
              name="name"
              placeholder="Nama sesuai identitas"
              fullWidth
            />
          </FormField>

          <FormField
            htmlFor="participant-register-email"
            label="Email"
          >
            <TextInput
              id="participant-register-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nama@email.com"
              leadingIcon={<Mail />}
              fullWidth
            />
          </FormField>

          <FormField
            htmlFor="participant-register-password"
            label="Kata Sandi"
          >
            <PasswordInput
              id="participant-register-password"
              name="password"
              autoComplete="new-password"
              placeholder="Buat kata sandi"
              fullWidth
            />
          </FormField>

          <Button
            type="submit"
            size="lg"
            fullWidth
            trailingIcon={<ArrowRight />}
          >
            Buat Akun
          </Button>
        </form>

        <div className="participant-login__help">
          <span>Sudah punya akun?</span>

          <ActionLink
            href={participantRoutes.login}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.login);
            }}
          >
            Masuk
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
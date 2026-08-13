import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Info,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormActions,
  FormField,
  FormSection,
  InlineAlert,
  Select,
  TextInput,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

export function ParticipantBiodataPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Biodata
          </p>

          <h1>Lengkapi biodata Anda</h1>

          <p>
            Pastikan seluruh informasi sesuai dengan dokumen resmi.
            Data akan dikunci setelah finalisasi.
          </p>
        </div>

        <div className="participant-page-header__meta participant-page-header__meta--progress">
          <span>Kelengkapan</span>
          <strong>72%</strong>
        </div>
      </header>

      <InlineAlert
        severity="info"
        title="Data belum difinalisasi"
      >
        Anda masih dapat mengubah data sebelum menekan tombol
        Finalisasi Biodata.
      </InlineAlert>

      <section className="participant-form-shell">
        <div className="participant-form-shell__sidebar">
          <div className="participant-form-progress">
            <p>Bagian biodata</p>

            <ol>
              <li data-state="completed">
                <CheckCircle2 />
                <span>Data Pribadi</span>
              </li>

              <li data-state="current">
                <UserRound />
                <span>Data Keluarga</span>
              </li>

              <li>
                <ClipboardCheck />
                <span>Pendidikan</span>
              </li>

              <li>
                <ClipboardCheck />
                <span>Informasi Tambahan</span>
              </li>
            </ol>
          </div>

          <div className="participant-form-help">
            <Info aria-hidden="true" />

            <p>
              Isi data dengan teliti. Gunakan informasi yang
              tercantum pada dokumen resmi Anda.
            </p>
          </div>
        </div>

        <form
          className="participant-form-content"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <FormSection
            title="Data Pribadi"
            description="Informasi dasar peserta."
            divided
          >
            <div className="participant-form-grid">
              <FormField
                htmlFor="participant-full-name"
                label="Nama Lengkap"
              >
                <TextInput
                  id="participant-full-name"
                  name="fullName"
                  defaultValue="Budi Santoso"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-nik"
                label="NIK"
              >
                <TextInput
                  id="participant-nik"
                  name="nik"
                  defaultValue="3174XXXXXXXXXXXX"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-birth-place"
                label="Tempat Lahir"
              >
                <TextInput
                  id="participant-birth-place"
                  name="birthPlace"
                  defaultValue="Jakarta"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-birth-date"
                label="Tanggal Lahir"
              >
                <TextInput
                  id="participant-birth-date"
                  name="birthDate"
                  type="date"
                  defaultValue="2005-01-12"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-gender"
                label="Jenis Kelamin"
              >
                <Select
                  id="participant-gender"
                  name="gender"
                  defaultValue="male"
                  fullWidth
                >
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </Select>
              </FormField>

              <FormField
                htmlFor="participant-phone"
                label="Nomor HP"
              >
                <TextInput
                  id="participant-phone"
                  name="phone"
                  defaultValue="081234567890"
                  fullWidth
                />
              </FormField>
            </div>
          </FormSection>

          <FormSection
            title="Data Keluarga"
            description="Informasi orang tua atau wali."
            divided
          >
            <div className="participant-form-grid">
              <FormField
                htmlFor="participant-father-name"
                label="Nama Ayah"
              >
                <TextInput
                  id="participant-father-name"
                  name="fatherName"
                  defaultValue="Ahmad Santoso"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-mother-name"
                label="Nama Ibu"
              >
                <TextInput
                  id="participant-mother-name"
                  name="motherName"
                  defaultValue="Siti Rahma"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-parent-phone"
                label="Nomor HP Orang Tua / Wali"
              >
                <TextInput
                  id="participant-parent-phone"
                  name="parentPhone"
                  defaultValue="081298765432"
                  fullWidth
                />
              </FormField>

              <FormField
                htmlFor="participant-parent-occupation"
                label="Pekerjaan Orang Tua / Wali"
              >
                <TextInput
                  id="participant-parent-occupation"
                  name="parentOccupation"
                  defaultValue="Wiraswasta"
                  fullWidth
                />
              </FormField>
            </div>
          </FormSection>

          <FormActions
            align="between"
            divided
            stackOnMobile
          >
            <Button
              variant="outline"
              onClick={() => navigate(participantRoutes.process)}
            >
              Kembali ke Proses
            </Button>

            <div className="participant-form-actions__primary">
              <Button variant="ghost">
                Simpan Draft
              </Button>

              <Button
                trailingIcon={<ArrowRight />}
                onClick={() => navigate(participantRoutes.documents)}
              >
                Simpan & Lanjutkan
              </Button>
            </div>
          </FormActions>
        </form>
      </section>
    </div>
  );
}
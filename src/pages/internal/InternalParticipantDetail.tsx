import {
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  School,
  UserRound,
} from "lucide-react";

import {
  ActionLink,
  Button,
  DescriptionList,
  DescriptionListItem,
} from "../../components";

interface InternalParticipantDetailProps {
  mode?: "participant" | "verification";
}

const documents = [
  {
    name: "KTP / Identitas Diri",
    file: "ktp-budi.pdf",
    status: "accepted",
    label: "Diterima",
  },
  {
    name: "Ijazah Terakhir",
    file: "ijazah.pdf",
    status: "accepted",
    label: "Diterima",
  },
  {
    name: "Transkrip Nilai",
    file: "transkrip.pdf",
    status: "review",
    label: "Ditangguhkan",
  },
  {
    name: "Akta Kelahiran",
    file: "akta.pdf",
    status: "accepted",
    label: "Diterima",
  },
  {
    name: "Surat Kesehatan",
    file: "sehat.pdf",
    status: "empty",
    label: "Belum Diunggah",
  },
  {
    name: "Pas Foto",
    file: "pasfoto.jpg",
    status: "accepted",
    label: "Diterima",
  },
] as const;

export function InternalParticipantDetail({
  mode = "participant",
}: InternalParticipantDetailProps) {
  return (
    <div className="internal-participant-detail">
      <section className="internal-participant-detail__identity">
        <span className="internal-participant-detail__avatar">
          AF
        </span>

        <div>
          <div className="internal-participant-detail__name">
            <h2>Ahmad Fauzi</h2>

            <span className="internal-status internal-status--success">
              Akun Aktif
            </span>
          </div>

          <p>CMA240512001</p>
        </div>
      </section>

      <section className="internal-participant-detail__section">
        <h3>Informasi Peserta</h3>

        <DescriptionList columns={1}>
          <DescriptionListItem term="Program">
            Diklat Pembentukan Nautika
          </DescriptionListItem>

          <DescriptionListItem term="Gelombang">
            Gelombang II
          </DescriptionListItem>

          <DescriptionListItem term="Tanggal Daftar">
            20 Mei 2026 · 14:32 WIB
          </DescriptionListItem>

          <DescriptionListItem term="Asal Sekolah">
            SMK Pelayaran Jakarta
          </DescriptionListItem>

          <DescriptionListItem term="Email">
            ahmad.fauzi@email.com
          </DescriptionListItem>

          <DescriptionListItem term="Nomor HP">
            0812 3456 7890
          </DescriptionListItem>
        </DescriptionList>
      </section>

      <section className="internal-participant-detail__section">
        <div className="internal-participant-detail__section-heading">
          <h3>Dokumen</h3>

          <ActionLink href="#">
            Lihat Semua
          </ActionLink>
        </div>

        <div className="internal-participant-detail__documents">
          {documents.map((document) => (
            <div
              key={document.name}
              className="internal-participant-detail__document"
            >
              <FileText aria-hidden="true" />

              <span>
                <strong>{document.name}</strong>
                <small>{document.file}</small>
              </span>

              <span
                className={`internal-status internal-status--${document.status}`}
              >
                {document.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {mode === "verification" && (
        <>
          <section className="internal-participant-detail__section">
            <h3>Catatan Verifikator</h3>

            <div className="internal-participant-detail__note">
              Transkrip nilai tidak terbaca jelas pada bagian nilai
              semester 3. Mohon unggah ulang dokumen dengan kualitas
              lebih baik.
            </div>

            <small>
              Terakhir diperbarui oleh Siti Rahma · 23 Mei 2026,
              09:15 WIB
            </small>
          </section>

          <section className="internal-participant-detail__verification">
            <h3>Aksi Verifikasi</h3>

            <div>
              <Button
                size="sm"
                leadingIcon={<CheckCircle2 />}
              >
                Terima
              </Button>

              <Button
                size="sm"
                variant="outline"
              >
                Tangguhkan
              </Button>

              <Button
                size="sm"
                variant="destructive"
              >
                Tolak
              </Button>
            </div>
          </section>
        </>
      )}

      {mode === "participant" && (
        <section className="internal-participant-detail__contacts">
          <div>
            <Mail aria-hidden="true" />
            <span>ahmad.fauzi@email.com</span>
          </div>

          <div>
            <Phone aria-hidden="true" />
            <span>0812 3456 7890</span>
          </div>

          <div>
            <School aria-hidden="true" />
            <span>SMK Pelayaran Jakarta</span>
          </div>

          <div>
            <UserRound aria-hidden="true" />
            <span>Peserta Aktif</span>
          </div>
        </section>
      )}
    </div>
  );
}
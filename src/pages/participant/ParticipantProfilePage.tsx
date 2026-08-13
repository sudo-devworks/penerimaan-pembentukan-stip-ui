import {
  AtSign,
  Edit3,
  IdCard,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import {
  Button,
  DescriptionList,
  DescriptionListItem,
} from "../../components";

import "./ParticipantPages.css";

export function ParticipantProfilePage() {
  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Profil
          </p>

          <h1>Akun dan profil peserta</h1>

          <p>
            Kelola informasi akun dasar Anda. Data pendaftaran tetap
            dikelola melalui halaman proses terkait.
          </p>
        </div>

        <Button
          variant="outline"
          leadingIcon={<Edit3 />}
        >
          Edit Profil
        </Button>
      </header>

      <section className="participant-profile-overview">
        <div className="participant-profile-overview__avatar">
          BS
        </div>

        <div>
          <h2>Budi Santoso</h2>
          <p>Peserta Penerimaan Pembentukan STIP</p>

          <span>
            <IdCard aria-hidden="true" />
            STIP24051234
          </span>
        </div>
      </section>

      <section className="participant-profile-section">
        <div className="participant-section-heading">
          <div>
            <p>Informasi akun</p>
            <h2>Data kontak</h2>
          </div>

          <UserRound aria-hidden="true" />
        </div>

        <DescriptionList columns={2}>
            <DescriptionListItem term="Nama Lengkap">
                Budi Santoso
            </DescriptionListItem>

            <DescriptionListItem term="Email">
                budi.santoso@email.com
            </DescriptionListItem>

            <DescriptionListItem term="Nomor HP">
                081234567890
            </DescriptionListItem>

            <DescriptionListItem term="NIK">
                3174XXXXXXXXXXXX
            </DescriptionListItem>
            </DescriptionList>
      </section>

      <section className="participant-profile-security">
        <div>
          <span>
            <Mail aria-hidden="true" />
          </span>

          <div>
            <h2>Email terverifikasi</h2>
            <p>budi.santoso@email.com</p>
          </div>
        </div>

        <div>
          <span>
            <Phone aria-hidden="true" />
          </span>

          <div>
            <h2>Nomor HP</h2>
            <p>081234567890</p>
          </div>
        </div>

        <div>
          <span>
            <AtSign aria-hidden="true" />
          </span>

          <div>
            <h2>Status Akun</h2>
            <p>Aktif</p>
          </div>
        </div>
      </section>
    </div>
  );
}
# Overlay Components

Overlay Components menyediakan behavior dan semantic contract untuk floating serta modal interface pada design system Penerimaan Pembentukan STIP.

## Component Families

### Dialog

Gunakan untuk task terfokus, formulir singkat, detail, atau konfigurasi.

- modal;
- focus trap;
- scroll lock;
- Escape configurable;
- backdrop dismissal configurable;
- focus dikembalikan ke trigger.

### AlertDialog

Gunakan untuk keputusan penting atau destruktif.

- memakai `role="alertdialog"`;
- backdrop dismissal nonaktif secara default;
- initial focus diarahkan ke aksi aman;
- mutation tetap dijalankan consumer;
- aksi konfirmasi tidak otomatis menutup overlay.

### Drawer

Gunakan untuk panel kontekstual, filter, detail, atau navigation composition.

Placement:

- `left`
- `right`
- `top`
- `bottom`

Drawer tidak otomatis berubah placement berdasarkan viewport.

### Popover

Gunakan untuk konten kontekstual yang dapat interaktif.

- non-modal;
- tidak memakai scroll lock;
- tidak memindahkan focus secara default;
- mendukung collision handling;
- bukan pengganti Menu, Select, atau Combobox.

### Tooltip

Gunakan untuk bantuan singkat dan non-interaktif.

- membuka melalui hover mouse dan keyboard focus;
- memakai `role="tooltip"`;
- tidak memindahkan focus;
- tidak boleh berisi tombol, link, input, atau form;
- tidak boleh menjadi satu-satunya sumber informasi penting.

### Menu

Gunakan untuk kumpulan command atau pilihan menu.

Keyboard contract:

- `ArrowDown` dan `ArrowUp`;
- `Home` dan `End`;
- typeahead;
- `Enter` dan `Space`;
- `Escape`;
- disabled item dilewati.

Menu mendukung:

- `MenuItem`
- `MenuCheckboxItem`
- `MenuRadioGroup`
- `MenuRadioItem`
- `MenuGroup`
- `MenuGroupLabel`
- `MenuSeparator`

Menu bukan pengganti Select atau Combobox.

## Controlled State

Root components mendukung:

```ts
open?: boolean;
defaultOpen?: boolean;
onOpenChange?: (
  open: boolean,
  details: {
    reason: OverlayDismissReason;
  },
) => void;
```

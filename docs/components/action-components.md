# Action Components

## Status

Milestone: MOCKUP-06-P3.2  
Status: Final Review  
Scope: Shared Action System lintas Public Website, Portal Peserta, dan Portal Internal.

## Prinsip

Action component menggunakan semantic element native:

- `button` untuk menjalankan action atau mengubah state;
- `a` untuk navigasi;
- tidak menggunakan `div` atau `span` sebagai interactive control;
- tidak menggunakan button sebagai pengganti navigasi biasa.

Seluruh component mengikuti alur token:

Primitive Token  
→ Semantic Token  
→ Component Token  
→ Component Implementation

## Button

### Tujuan

Menjalankan action utama, pendamping, utility, atau destructive.

### Variant

- Primary
- Secondary
- Outline
- Ghost
- Text
- Destructive

### Size

- Small
- Medium
- Large

### State

- Default
- Hover
- Focus-visible
- Pressed
- Disabled
- Loading

### Aturan penggunaan

Primary maksimal satu action dominan per section atau dialog.

Destructive hanya digunakan untuk tindakan yang menyebabkan kehilangan, pembatalan, pencabutan, atau perubahan kritis.

Button tidak digunakan untuk navigasi biasa.

### Accessibility

- native `button`;
- default `type="button"`;
- focus-visible;
- native disabled;
- `aria-busy` saat loading;
- spinner decorative;
- target interaksi minimal 44 × 44 px;
- density diwariskan dari container.

## IconButton

### Tujuan

Action berulang atau utility pada ruang terbatas ketika icon sudah umum dipahami.

### Contoh

- membuka notifikasi;
- menutup dialog;
- refresh;
- membuka menu;
- previous dan next;
- menampilkan password.

### Aturan

`aria-label` wajib.

IconButton tidak dipakai sebagai satu-satunya control untuk proses kritis seperti finalisasi, approve, reject utama, atau hapus permanen.

### Variant

- Primary
- Secondary
- Outline
- Ghost
- Destructive

### Shape

- Rounded
- Circular

## ButtonGroup

### Tujuan

Mengatur komposisi beberapa action yang saling berkaitan.

### Layout

- horizontal;
- vertical;
- stack on mobile;
- stretch on mobile;
- start, center, end, between, dan stretch alignment.

### Aturan

Urutan action tidak berubah secara membingungkan antarviewport.

Destructive action diberi separation yang cukup dari primary action.

`role="group"` hanya digunakan ketika tersedia accessible name melalui `aria-label` atau `aria-labelledby`.

## ActionLink

### Tujuan

Navigasi menuju halaman, lokasi, dokumen, atau situs lain.

### Variant

- Inline
- Standalone
- Navigation
- Subtle

### Aturan

Inline link di dalam paragraf menggunakan underline.

External indicator tidak otomatis membuka tab baru.

Saat memakai `target="_blank"`, component menambahkan `noopener noreferrer`.

Action yang mengubah data tidak menggunakan ActionLink.

## TextAction

### Tujuan

Action ringan tanpa visual container besar.

### Contoh

- Lihat detail
- Ubah
- Hapus filter
- Tampilkan semua

### Variant

- Default
- Subtle
- Destructive

### Accessibility

TextAction tetap menggunakan native `button`.

Loading menggunakan native disabled dan `aria-busy`.

## DropdownAction

### Tujuan

Mengelompokkan beberapa action terkait ketika semuanya tidak perlu terlihat langsung.

### Interaction

- click membuka dan menutup menu;
- ArrowDown membuka dan fokus ke item pertama;
- ArrowUp membuka dan fokus ke item terakhir;
- ArrowDown dan ArrowUp memindahkan fokus;
- Home dan End menuju item pertama dan terakhir;
- Escape menutup menu dan mengembalikan fokus;
- Tab menutup menu tanpa focus trap;
- klik di luar menutup menu;
- disabled item dilewati saat keyboard navigation.

### Item

- action item menggunakan native `button`;
- navigation item menggunakan native `a`;
- separator menggunakan `role="separator"`;
- destructive item dipisahkan secara visual;
- disabled item tidak dapat dijalankan.

### Aturan

Primary task tidak boleh disembunyikan di dalam dropdown.

Label trigger harus spesifik, misalnya `Unduh Laporan`, bukan sekadar `Action`.

## Responsive Behavior

Action component divalidasi pada:

- 320 × 720 px;
- 390 × 844 px;
- 768 × 1024 px;
- 1440 × 900 px.

ButtonGroup menangani stacking dan layout.

Button tidak mengambil keputusan portal atau viewport secara internal.

## Density

Density diwariskan dari ancestor:

```html
<div data-density="comfortable">
  <div data-density="default">
    <div data-density="compact"></div>
  </div>
</div>
```

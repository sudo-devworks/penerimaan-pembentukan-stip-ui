# Form Components — Known Issues

## Closed

### FORM-BUG-001 — Checkbox dan Radio tidak terlihat

Status: Closed

Penyebab:

- `forms.css` belum dimuat melalui global stylesheet;
- stylesheet component tidak selalu mengikuti direct component import.

Perbaikan:

- `forms.css` dimuat melalui `src/styles/globals.css`;
- component implementation mengimpor stylesheet masing-masing.

### FORM-BUG-002 — Form control border tidak terlihat

Status: Closed

Penyebab:

Beberapa semantic token foundation tidak tersedia dengan nama yang diasumsikan.

Perbaikan:

Fallback ditambahkan pada form component token layer.

### FORM-BUG-003 — Radio dot tidak presisi di tengah

Status: Closed

Perbaikan:

- menggunakan inline-grid;
- menggunakan place-items center;
- ukuran dot dibuat tetap;
- menggunakan box-sizing border-box.

## Deferred

### FORM-DEFERRED-001 — Native date input review

Status: Deferred

Baseline sementara:

```tsx
<TextInput type="date" />
```

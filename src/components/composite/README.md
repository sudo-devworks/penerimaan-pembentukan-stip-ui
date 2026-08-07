# Composite Components

Composite Components menyusun primitive dan component family yang sudah tersedia menjadi pola UI reusable lintas portal.

## Public Components

### Headers

- `PageHeader`
- `SectionHeader`

### Toolbars

- `FilterToolbar`
- `TableToolbar`
- `BulkActionBar`

### Summaries

- `DescriptionList`
- `DescriptionListItem`
- `StatGroup`
- `StatItem`
- `DetailSummary`

### Content Items

- `ActivityItem`
- `TimelineEvent`
- `NotificationItem`
- `FileItem`

## Boundary

Composite Components:

- memakai Actions, Feedback, Forms, Navigation, dan Overlay existing;
- menerima content dan callback melalui props;
- tidak melakukan API request;
- tidak menyimpan global business state;
- tidak mengetahui role atau permission;
- tidak melakukan status bisnis mapping;
- tidak mengandung data bisnis hardcoded;
- dapat digunakan pada Public Website, Portal Peserta, dan Portal Internal.

## Pattern-only Composition

Pola berikut tidak menjadi public component tersendiri:

- search and responsive filter;
- empty state with action;
- error state with retry;
- loading content;
- confirmation flow;
- dashboard layout;
- responsive page layout.

Pola tersebut didokumentasikan melalui Storybook dan integration test.

## Feature-level Components

Komponen berikut tidak termasuk generic Composite Components:

- Participant Summary Card;
- Registration Process Summary;
- Document Verification Item;
- Payment Summary;
- Selection Result Summary;
- business Audit Item.

Komponen tersebut harus ditempatkan pada layer feature karena mengetahui domain penerimaan.

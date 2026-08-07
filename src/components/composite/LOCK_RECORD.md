# MOCKUP-06-P3.7 — Composite Components Lock Record

## Status

Locked after final regression.

## Public Families

### Header Composition

- PageHeader
- SectionHeader

### Toolbar Composition

- FilterToolbar
- TableToolbar
- BulkActionBar

### Summary Composition

- DescriptionList
- DescriptionListItem
- StatGroup
- StatItem
- DetailSummary

### Content Item Composition

- ActivityItem
- TimelineEvent
- NotificationItem
- FileItem

## Pattern-only Composition

- Responsive search and filter
- Empty state with action
- Error state with retry
- Loading content
- Confirmation flow
- Responsive detail page
- Cross-portal page composition

Pattern-only composition is intentionally excluded from the public API.

## Locked Decisions

- Composite components use composition rather than duplicating primitive behavior.
- Composite components do not perform API requests.
- Composite components do not store global business state.
- Composite components do not know roles or permissions.
- Composite components do not map domain-specific statuses.
- AlertDialog remains the foundation for destructive confirmation.
- Drawer and Popover remain consumer-controlled responsive filter engines.
- Participant, registration, verification, payment, selection, and audit-specific components remain in the feature layer.
- Composite components are exported through `src/components/composite`.
- Stable component families are exported through the root `src/components` public API.

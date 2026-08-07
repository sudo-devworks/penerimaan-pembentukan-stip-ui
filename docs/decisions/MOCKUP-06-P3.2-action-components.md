# Decision Log — MOCKUP-06-P3.2 Action Components

## Status

Accepted and proposed for lock.

## Decisions

1. Action component merupakan shared system untuk seluruh portal.
2. Tidak dibuat Public Button, Participant Button, atau Internal Button.
3. Button menggunakan native `button`.
4. ActionLink menggunakan native `a`.
5. Button tidak polymorphic.
6. Default button type adalah `button`.
7. Button memiliki variant primary, secondary, outline, ghost, text, dan destructive.
8. Density diwariskan dari `data-density`.
9. Size tidak sama dengan density.
10. Loading memakai native disabled dan `aria-busy`.
11. Loading mempertahankan identitas visual variant.
12. Button icon dianggap decorative karena accessible name berasal dari label.
13. IconButton mewajibkan `aria-label`.
14. Icon-only action tidak digunakan untuk primary critical action.
15. Responsive stacking menjadi tanggung jawab ButtonGroup atau composition layer.
16. ActionLink digunakan hanya untuk navigasi.
17. TextAction tetap memakai native button.
18. Dropdown action item memakai button untuk action dan anchor untuk navigasi.
19. Dropdown mendukung Arrow keys, Home, End, Escape, Tab, focus return, dan outside click.
20. Primary action tidak disembunyikan di dropdown.
21. SplitButton ditunda.
22. Floating Action Button tidak masuk baseline P3.2.
23. Minimum touch target tetap 44 × 44 px.
24. Target accessibility adalah WCAG 2.2 Level AA.
25. Cross-portal validation mengikuti prinsip Shared System, Different Composition.

# DEC-001 — Token Architecture

## Status

Accepted

## Context

Penerimaan Pembentukan STIP membutuhkan satu visual system yang dapat
digunakan pada Public Website, Portal Peserta, dan Portal Internal.

## Decision

Design token menggunakan empat lapisan:

1. Primitive Tokens
2. Semantic Tokens
3. Component Tokens
4. Composition Tokens

CSS Custom Properties menjadi runtime source of truth.

## Consequence

Component tidak boleh menggunakan nilai warna, spacing, radius, shadow,
atau typography lokal tanpa alasan yang terdokumentasi.

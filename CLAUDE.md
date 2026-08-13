# TECITO DE LA VERDAD — Agent Entry Point

This repository is the canonical brownfield storefront for TECITO DE LA VERDAD.

## Operating mode
- Brownfield: preserve the existing Next.js Commerce + Shopify engine.
- Inspect before changing.
- Reuse before adding.
- Build one verifiable slice at a time.
- Never expose secrets.
- Never claim production without evidence.

## Product identity
- Brand: TECITO DE LA VERDAD
- Primary language: Spanish
- Secondary language: English behind a toggle
- Tagline ES: Encuentra tu verdad
- Tagline EN: Find your truth
- Supplier: Tiesta Tea
- Luxury benchmark: Bellocq
- Ecommerce merchandising reference: Pinky Up Tea
- Quote-tag reference: Yogi Tea

## Current stage routing
Read `CONTEXT.md`, then the relevant stage file under `stages/`.

## Guardrails
- Preserve Shopify cart, product, collection, search, and Storefront API abstractions unless a verified defect requires change.
- Do not add Supabase, Printify, fal.ai, or Paperclip dependencies until the stage explicitly requires them.
- All public-facing copy is Spanish-first.
- Every release needs rollback by branch/commit.

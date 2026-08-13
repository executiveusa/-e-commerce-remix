# Stage 01 — Foundation

## Goal
Establish Tecito identity, language defaults, design tokens, and agent-readable project context without changing Shopify commerce behavior.

## Allowed changes
- Project docs / ICM routing
- Metadata and brand defaults
- Global design tokens
- Language defaults
- Removal of generic Vercel demo presentation that does not affect commerce

## Forbidden changes
- Shopify query/mutation rewrites
- Cart behavior changes
- Product route rewrites
- Dependency upgrades
- New external service integrations

## Acceptance
- Brand tokens exist in code and docs
- Spanish is the document default
- Generic Vercel identity is removed from metadata/env example
- Existing cart provider and Shopify calls remain intact
- Changes are isolated on a feature branch

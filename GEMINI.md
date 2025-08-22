# AGENTS.md

This document provides guidelines for agentic coding agents working in this repository.

## Build and Execution

- **Build:** `pnpm build`
- **Development:** `pnpm dev`
- **Preview:** `pnpm preview`
- **E2E Tests:** `sudo podman run --rm -it   --ipc=host   -v "$(pwd)":/work   -w /work   mcr.microsoft.com/playwright:v1.54.0-noble   bash -c "npm install -g pnpm && pnpm test:e2e"`

_Note: There are no specified linting or testing commands. Please maintain existing code style and quality._

## Git Usage Guidelines

- **No Direct Commits:** Agents should not execute `git commit` commands directly. All changes should be staged and a draft commit message provided for user review and approval.

## Code Style Guidelines

- **Framework:** Astro
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Formatting:** Consistent with existing code. Use 2 spaces for indentation.
- **Naming:** Use PascalCase for components (e.g., `ServiceCard.astro`) and camelCase for variables and functions.
- **Imports:** Use relative paths for local modules.
- **Error Handling:** No specific error handling patterns were found.
- **Comments:** Add comments only for complex logic.
- **File Structure:** Follow the existing `src/components`, `src/layouts`, `src/pages` structure.
- **Dependencies:** Use `pnpm` for package management.

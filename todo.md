# Testing Strategy

## Unit Testing Strategy (using Vitest)
1.  **Framework Choice:** Vitest.
2.  **Installation:** Add `vitest` and `@vitest/ui` as development dependencies.
3.  **Configuration:** Configure `vitest.config.ts` (or `vitest.config.js`).
4.  **Test File Location:** Place unit test files (`.test.ts` or `.spec.ts`) alongside the components or utility functions they test, or in a `src/tests/unit` directory.
5.  **Writing Tests:** Focus on testing isolated functions, small modules, and component logic.
6.  **Running Tests:** Add a `test:unit` script to `package.json`.

## End-to-End (E2E) Testing Strategy (using Playwright)
1.  **Framework Choice:** Playwright.
2.  **Installation:** Add `@playwright/test` as a development dependency.
3.  **Configuration:** Configure Playwright to start the Astro development server.
4.  **Test File Location:** Create a dedicated `tests/e2e` directory.
5.  **Writing Tests:** Simulate user interactions and flows.
6.  **Running Tests:** Add a `test:e2e` script to `package.json`.

## Integration with CI/CD
Integrate tests into your GitHub Actions workflow.

---

## Implementation Plan: Unit Testing (Vitest)

1.  Install Vitest and related dependencies.
2.  Configure Vitest.
3.  Add a `test:unit` script to `package.json`.

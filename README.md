# QA Project

Beginner-friendly QA testing starter that covers both browser automation (Playwright) and simple API checks (Jest + Supertest).

## Prerequisites
- Node.js 18+
- npm 9+

## Install dependencies

```bash
npm ci
```

## Start the demo app
Serve `demo-app/index.html` on port 5173 (Playwright tests assume this URL):

```bash
npm run start:demo
```

## Run E2E tests (Playwright)

```bash
npm run test:e2e
```

This uses `playwright.config.js`, which stores HTML reports inside `playwright-report/`.

## Run API tests (Jest + Supertest)

```bash
npm run test:api
```

These tests hit the public JSONPlaceholder API (`https://jsonplaceholder.typicode.com`). Ensure you have internet access.

## Run the full test suite

```bash
npm test
```

This runs API tests first, followed by Playwright E2E tests.

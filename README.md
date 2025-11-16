# QA Project

Beginner-friendly QA testing starter that covers both browser automation (Playwright) and simple API checks (Jest + Supertest).

## 🎨 Demo Screenshots

### Main Interface
![QA Demo App - Main View](screenshots/QA-demo%201.png)

### Full Application View
![QA Demo App - Full View](screenshots/QA-demo%202.png)

## 📋 Features

- **Modern UI Design** - Clean, responsive interface with gradient backgrounds
- **Interactive Demo** - Type a name and see dynamic greeting updates
- **QA Testing Badge** - Visual confirmation of background testing
- **GitHub Integration** - Direct link to source code repository
- **Comprehensive Documentation** - Built-in guide explaining app functionality

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

## 🚀 Live Demo

Visit the live demo at: [QA Demo App](http://localhost:5173) (when running locally)

## 📂 Project Structure

```
QA-Project/
├── demo-app/           # Demo web application
│   └── index.html      # Modern UI with interactive features
├── tests/
│   ├── api/           # API tests using Jest + Supertest
│   └── e2e/           # E2E tests using Playwright
├── screenshots/       # Application screenshots
├── playwright.config.js
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Playwright** - End-to-end testing
- **Jest** - JavaScript testing framework
- **Supertest** - HTTP assertion library
- **http-server** - Simple static file server
- **Poppins Font** - Modern typography

## 👨‍💻 Author

**Aum Joshi**
- GitHub: [@Aum-Joshi](https://github.com/Aum-Joshi)
- Repository: [QA-Project](https://github.com/Aum-Joshi/QA-Project)

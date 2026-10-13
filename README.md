# QA Engineer Assessment

## Project Overview

This project contains manual testing documentation and automated tests for the QA Engineer job listing page.

**Application Under Test:** https://crew.tinobritty.me/jobs/qa-engineer-gxRYZg

**Testing Framework:** Playwright
**Programming Language:** JavaScript

## Project Structure

* `tests/` — Automated test cases
* `QA_Testing_Report.md` — Test scope, manual results, automated results, observations, and limitations
* `playwright.config.js` — Playwright configuration
* `package.json` — Project dependencies and test scripts
* `.github/` — GitHub Actions workflow
* `.gitignore` — Files excluded from Git

## Prerequisites

* Node.js and npm
* Git
* An internet connection

## Installation

Run these commands from the project directory:

```bash
npm install
npx playwright install
```

## Run Automated Tests

Run all configured browser tests:

```bash
npx playwright test
```

Run tests in Chromium only:

```bash
npx playwright test --project=chromium
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Test Documentation

See `QA_Testing_Report.md` for the test objectives, manual test cases, automated test cases, observations, and limitations.

## Limitations

Some application steps require GitHub authentication. The authenticated workflow and final application submission have not been fully verified.

Testing is limited to safe, non-destructive checks. No fake applications should be submitted to the live website.

## Test Results

Refer to the latest Playwright test run and `QA_Testing_Report.md` for the results. Confirm the report matches the final test execution before submission.

# QA Testing Report: QA Engineer Job Page

## 1. Project Overview

| Item                   | Details                                            |
| ---------------------- | -------------------------------------------------- |
| Project Name           | QA Engineer Job Page Testing                       |
| Application Under Test | https://crew.tinobritty.me/jobs/qa-engineer-gxRYZg |
| Testing Types          | Manual and Automated Testing                       |
| Automation Framework   | Playwright Test                                    |
| Programming Language   | JavaScript                                         |
| Automated Test File    | `tests/example.spec.js`                            |

## 2. Testing Objective

The objective of this project was to evaluate the QA Engineer job listing and its accessible application workflow through manual testing and automated browser testing.

The testing focused on page availability, job information, navigation, application entry points, usability, validation behavior, and browser compatibility.

The goal was to identify potential issues, document observed behavior, and demonstrate the use of Playwright for automating important website checks.

## 3. Test Environment

| Component                     | Details                   |
| ----------------------------- | ------------------------- |
| Operating System              | Windows                   |
| Programming Language          | JavaScript                |
| Automation Framework          | Playwright Test           |
| Browsers                      | Chromium, Firefox, WebKit |
| Test Runner                   | Playwright Test           |
| Testing Methods               | Manual and Automated      |
| Recorded Automated Executions | 15                        |
| Previously Reported Result    | 15 passed, 0 failed       |

*Note: The execution figures represent the previously recorded test run and should be confirmed against the latest results before submission.*

## 4. Scope of Testing

The following areas were included in the testing scope:

* Job page loading and availability
* Job title and company information
* Job description readability
* Job location and employment type
* Apply button visibility and navigation
* Application workflow accessibility
* Required-field indicators
* Invalid email validation
* Empty-form validation
* Page link navigation
* Mobile layout and usability
* Keyboard navigation
* Unexpected error messages
* Cross-browser behavior

Testing of authenticated functionality was limited by the GitHub sign-in requirement. No fake applications were submitted to the live portal.

## 5. Manual Testing Results

The following table summarizes the 15 manual scenarios recorded during testing.

| Test ID | Test Scenario                                                | Recorded Result      |
| ------- | ------------------------------------------------------------ | -------------------- |
| MTC001  | Verify that the job page loads successfully                  | PASS                 |
| MTC002  | Verify the job title                                         | PASS                 |
| MTC003  | Verify the company name                                      | PASS                 |
| MTC004  | Verify job description readability                           | PASS                 |
| MTC005  | Verify job location                                          | PASS                 |
| MTC006  | Verify employment type                                       | PASS                 |
| MTC007  | Verify Apply button visibility                               | PASS                 |
| MTC008  | Verify the application flow                                  | PASS                 |
| MTC009  | Verify required-field indicators                             | PASS                 |
| MTC010  | Check invalid email handling                                 | Pending verification |
| MTC011  | Attempt to submit the application with required fields empty | PASS                 |
| MTC012  | Verify page links                                            | PASS                 |
| MTC013  | Check mobile layout                                          | PASS                 |
| MTC014  | Check keyboard navigation                                    | PASS                 |
| MTC015  | Check for unexpected error messages                          | PASS                 |

**Note:** MTC010 remains pending because the precise validation behavior for an invalid email address has not yet been documented. It should not be counted as a confirmed pass or defect until verified.

The recorded results describe the observed scenarios and should not be interpreted as proof that every possible input or application behavior has been tested.

## 6. Automated Testing

Five automated test cases were implemented using Playwright and JavaScript.

The tests are located in `tests/example.spec.js`.

| Test ID | Test Scenario                                     | Verification                                                                 |
| ------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| TC001   | Verify that the job page loads successfully       | Checks that the navigation response exists and its HTTP status is below 400. |
| TC002   | Verify that the page has a title                  | Checks that the browser page title is not empty.                             |
| TC003   | Verify that the page displays a main heading      | Checks that the first `h1` element is visible.                               |
| TC004   | Verify that the page contains text content        | Checks that the page body is not empty.                                      |
| TC005   | Verify that a browser error page is not displayed | Checks that the body does not contain the specified browser error message.   |

### 6.1 Execution Summary

The previously recorded run reported the following results:

| Metric                        |       Result |
| ----------------------------- | -----------: |
| Distinct Automated Test Cases |            5 |
| Browser Projects              |            3 |
| Total Test Executions         |           15 |
| Passed Executions             |           15 |
| Failed Executions             |            0 |
| Reported Execution Time       | 31.2 seconds |

Each of the five test cases was executed across three browser projects, resulting in 15 test executions.

**Recorded result:** All 15 executions passed in the reported run.

The latest execution results should be checked before the final submission.

### 6.2 Automation Limitations

The current automated tests focus primarily on page loading and basic page content.

They do not independently verify all application-form validations, authenticated actions, or successful application submission. These areas require further testing where access is available and testing can be performed safely.

## 7. Application Flow Observations

During the recorded manual checks:

* The Apply button was visible.
* Selecting Apply opened the application flow.
* GitHub sign-in was required to continue.
* Required-field indicators were observed.
* Submitting an empty application displayed required-field validation.

The authentication requirement limited verification of the complete application workflow.

Successful authentication and final application submission have not been claimed as verified. No fake application was submitted to the live portal.

## 8. Defects and Issues

No confirmed defects were recorded within the checks documented in this report.

The following item remains unresolved:

| Observation ID | Area                     | Status               | Next Step                                                             |
| -------------- | ------------------------ | -------------------- | --------------------------------------------------------------------- |
| OBS001         | Invalid email validation | Pending verification | Record the application's actual response to an invalid email address. |

This observation is not a confirmed defect.

A potential defect should be reported only after the unexpected behavior has been reproduced and the expected and actual results have been documented.

### Bug Reporting Format

If a defect is identified, its report should include:

* Bug ID and title
* Severity
* Environment
* Preconditions
* Steps to reproduce
* Expected result
* Actual result
* Screenshot or other available evidence

## 9. Conclusion

The QA Engineer job page was evaluated through manual checks and Playwright automation.

The previously recorded automated run completed with 15 successful executions across Chromium, Firefox, and WebKit. Manual testing covered job information, navigation, the Apply button, form-related behavior, and usability.

The application workflow required GitHub sign-in, which limited verification of the complete application process. Invalid email validation also remains pending further verification.

The results indicate that the page behaved as expected in the recorded scenarios. The conclusions are limited to the areas tested and do not guarantee that all website functionality is defect-free.

## 10. Instructions to Run Automated Tests

### Prerequisites

* Node.js and npm
* Visual Studio Code or another code editor
* An internet connection to access the job page

### Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

If the Playwright browsers are not installed, run:

```bash
npx playwright install
```

### Execute Tests

Run all configured Playwright tests:

```bash
npx playwright test
```

To run tests using Chromium only:

```bash
npx playwright test --project=chromium
```

### View the HTML Report

After test execution, run:

```bash
npx playwright show-report
```

The HTML report provides details about individual test executions and their results.

## 11. Ethical Testing and Limitations

Testing was limited to the selected job listing and safely accessible functionality.

* No fake applications were submitted to the live portal.
* No production data was intentionally altered.
* No load testing was performed.
* Authenticated functionality was not reported as verified where access was unavailable.
* Test results and defect claims are limited to observed behavior.

These limitations were considered when interpreting the results and preparing this report.

# 🧪 Playwright SauceDemo E2E Automation Framework

[![Playwright Tests](https://github.com/MihaiS13/Playwright-SauceDemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/MihaiS13/Playwright-SauceDemo/actions/workflows/playwright.yml)
[![Playwright Report](https://img.shields.io/badge/Playwright-Report-blue)](https://github.com/MihaiS13/Playwright-SauceDemo/actions)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-LTS-green)

## 📌 Project Overview

This project is an end-to-end test automation framework built with **Playwright** and **JavaScript**, using the **Page Object Model (POM)** design pattern.

It follows common QA automation best practices, including reusable fixtures, externalized test data, and CI integration with GitHub Actions.

## 🎯 Key Features

- Page Object Model architecture
- End-to-end user flow testing
- Positive & negative test scenarios
- Cross-page validations
- Test data separation using JSON
- CI/CD integration with GitHub Actions
- Automatic HTML report generation
- Screenshots on failure + trace support

## 🛠️ Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI)

## 🧪 Test Scenarios

### ✅ Positive Flow

- User login
- Add product to cart
- Validate cart contents
- Complete checkout process
- Order confirmation

### ❌ Negative Flow

- Checkout flow with invalid input data (intentional failing test for reporting & debugging demonstration)

---

## 📁 Project Structure

```text
├── .github/workflows/   # GitHub Actions workflow
├── pages/                # Page Object classes
├── tests/                # Test specs (.spec.js files)
├── test-data/            # JSON test data files
├── fixtures/             # Test setup, session reuse & extensions
└── playwright.config.js  # Playwright configuration
```

## 📊 Test Data Strategy

Test data is externalized into JSON files to improve maintainability and separation of concerns.

## ⚙️ CI/CD Pipeline

This project uses GitHub Actions to:

- Run tests automatically on push and pull requests
- Execute tests across multiple browsers (Chromium, Firefox, WebKit)
- Generate and upload HTML test reports as artifacts
- Provide consistent test execution in a CI environment

## 📸 Reporting & Debugging

- HTML Test Reports available after execution
- Screenshots captured on failure
- Trace viewer enabled for debugging failed tests

## 📈 Impact

This project demonstrates:

- Ability to design and implement a maintainable test automation framework using Playwright.
- Practical knowledge of UI test automation using Playwright
- Understanding of QA best practices (POM, test separation, CI/CD)
- Experience with real-world testing flows (E2E + negative scenarios)
- Readiness for Junior QA / QA Automation roles

## 🚀 How to Run Tests

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# View test report
npx playwright show-report
```

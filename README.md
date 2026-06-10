# 🏦 ParaBank Cypress E2E Automation Framework

A portfolio-grade test automation framework built with Cypress, testing the
[ParaBank](https://parabank.parasoft.com) banking demo application.

> Built in public as part of my QA Engineering portfolio.
> Every suite, test case, and commit is documented and traceable.

---

## 🧪 Application Under Test

**ParaBank by Parasoft** — a full-featured banking simulation covering:
- User registration and authentication
- Account management (checking and savings)
- Fund transfers between accounts
- Bill payments
- Loan applications and approvals

**URL:** https://parabank.parasoft.com/parabank/index.htm

---

## 🏗️ Project Structure

    parabank-cypress-e2e/
    ├── cypress/
    │   ├── e2e/
    │   │   ├── auth/                   # TC_Auth_001–009
    │   │   ├── accounts/               # TC_Acc_001–005
    │   │   ├── transfers/              # TC_Trans_001–004
    │   │   ├── bill-pay/               # TC_Bill_001–005
    │   │   └── loans/                  # TC_Loan_001–005
    │   ├── pages/
    │   │   ├── BasePage.js
    │   │   ├── LoginPage.js
    │   │   ├── AccountsPage.js
    │   │   ├── TransferPage.js
    │   │   ├── BillPayPage.js
    │   │   └── LoanPage.js
    │   ├── fixtures/
    │   │   └── parabank.json
    │   └── support/
    │       ├── e2e.js
    │       └── commands.js
    ├── cypress.config.js
    ├── package.json
    └── .gitignore

---

## ✅ Test Suites

| Suite | Test Cases | Status |
|-------|-----------|--------|
| Authentication | TC_Auth_001 – TC_Auth_009 | ✅ Done |
| Accounts | TC_Acc_001 – TC_Acc_005 | ✅ Done |
| Transfers | TC_Trans_001 – TC_Trans_004 | ✅ Done |
| Bill Pay | TC_Bill_001 – TC_Bill_005 | ✅ Done |
| Loans | TC_Loan_001 – TC_Loan_005 | ✅ Done |

> Test cases are managed as GitHub Issues with labels, milestones, and priorities.
> [View all test cases →](https://github.com/qa-eden/Parabank-Project-Cypress/issues)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Cypress](https://cypress.io) | E2E test framework |
| [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) | HTML test reports |
| Page Object Model | Test architecture pattern |
| GitHub Actions | CI/CD pipeline *(coming soon)* |
| GitHub Issues | Test case management |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/qa-eden/Parabank-Project-Cypress.git

# Navigate into the project
cd Parabank-Project-Cypress

# Install dependencies
npm install
```

### Running Tests

```bash
# Open Cypress interactive mode
npx cypress open

# Run all tests headless
npx cypress run

# Run a specific suite
npx cypress run --spec "cypress/e2e/auth/**"
```

### Viewing Reports

After a test run, the Mochawesome HTML report is generated at:

cypress/reports/html/index.html

Open it in any browser to see the full test results with screenshots on failure.

---

## 🔐 Test Credentials

| Role | Username | Password |
|------|----------|----------|
| Standard User | john | demo |

> These are public demo credentials for the ParaBank sandbox application.

---

## 📋 Test Case Management

All 28 test cases are documented as GitHub Issues:
- Organised into 5 milestones (one per suite)
- Labelled by suite, priority, and tag (`@smoke`, `@regression`)
- Each issue links back to its Cypress spec file


[View Test Cases on GitHub Issues →](https://github.com/qa-eden/Parabank-Project-Cypress/issues)

---

## 👤 Author

**Emmanuel Adeniran**
QA Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/edenqa)
[![GitHub](https://img.shields.io/badge/GitHub-qa--eden-black)](https://github.com/qa-eden)

---

## 📌 Project Status

> 🔄 **Active build** — this project is being built and documented publicly.
> Follow along on LinkedIn for daily progress updates.


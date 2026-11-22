
# Cristal Beauty Clean — QA Portfolio

A software quality assurance (QA) and project management portfolio demonstrating manual functional testing, Postman API testing, automated API testing, defect identification, bug fixing, regression testing, and project documentation for the **Cristal Beauty Clean** e-commerce application.

## 1. Project Overview

Cristal Beauty Clean is an e-commerce web application designed to support online beauty product shopping.

The application includes customer registration, user authentication, product browsing, product searching, shopping cart management, and checkout functionality.

This QA portfolio documents selected software testing activities, defect management practices, automated API test execution, and project management documentation.

### Project Objectives

- Verify selected application functions through manual testing.
- Validate backend API functionality using Postman.
- Perform positive and negative testing.
- Identify, investigate, and document software defects.
- Verify fixes through retesting and regression testing.
- Implement repeatable automated API checks.
- Maintain structured project management documentation.
- Demonstrate software quality assurance and project coordination skills.

## 2. Testing Results Summary

| Testing Suite | Total Tests | Passed | Blocked |
|---|---:|---:|---:|
| Manual UI Testing | 11 | 11 | 0 |
| Postman API Testing | 16 | 15 | 1 |
| Automated API Testing | 4 | 4 | 0 |
| **Total** | **31** | **30** | **1** |

**Note:** Results reflect tester-reported manual and Postman executions and recorded automated test output. Some automated scenarios overlap with Postman tests. The totals represent test cases across three suites rather than 31 independent requirements.

## 3. Testing Activities

### 3.1 Manual Functional Testing

Manual functional testing was performed to verify selected frontend features and user interactions.

**Features Tested:**

- User registration
- Valid and invalid login
- Product browsing
- Product searching
- Shopping cart functionality
- Checkout functionality
- Frontend access restrictions

**Results:**

- Total Test Cases: 11
- Passed: 11
- Failed: 0

**Status:** Completed

### 3.2 API Testing Using Postman

Postman was used to evaluate selected backend API endpoints, request handling, authentication behavior, product operations, and negative scenarios.

**Test Scenarios:**

- API health check
- Invalid API endpoint handling
- Get all products
- Valid user login
- Invalid user login
- Valid user registration
- Duplicate email registration
- Missing required email validation
- Missing password validation
- Product not found
- Invalid product ID format
- Search nonexistent products
- Search existing products
- Get product by ID
- Unauthorized product creation
- Invalid product data validation

**Results:**

- Total Test Cases: 16
- Passed: 15
- Blocked: 1

**Status:** Completed with one blocked test.

**Blocked Test:** API-016 — Invalid Product Data

The test could not verify product validation because authorized administrator credentials were unavailable. The unauthenticated request returned HTTP 403 Forbidden.

### 3.3 Automated API Testing

Automated API testing was implemented using the **Node.js built-in test runner** and the **Fetch API**.

Four automated test cases were successfully executed against the locally running backend.

| Test ID | Automated Test Scenario | Status |
|---|---|---|
| AUTO-001 | API Health Check | PASS |
| AUTO-002 | Get All Products | PASS |
| AUTO-003 | Search Existing Product | PASS |
| AUTO-004 | Missing Password Validation | PASS |

**Execution Summary:**

- Automated Tests: 4
- Passed: 4
- Failed: 0
- Skipped: 0

**Execution Command:**

```bash
cd automation
node --test
```

**Recorded Test Output:**

```text
✔ API Health Check
✔ AUTO-004 - Missing Password Validation
✔ AUTO-002 - Get All Products
✔ AUTO-003 - Search Existing Product

tests 4
pass 4
fail 0
cancelled 0
skipped 0
duration_ms 1090.2448
```

**Status:** Completed

**Note:** These tests provide API-level automation only. Browser-based UI automation has not yet been implemented.

### 3.4 Defect Identification and Resolution

**Defect ID:** BUG-API-001

**Title:** Backend Crash When Login Password Is Missing

**Severity:** High

**Original Issue:**

The backend process crashed when a login request was submitted without a password.

**Original Behavior:**

- Postman displayed an `ECONNRESET` error.
- The backend process crashed.
- An error occurred during password comparison using bcrypt.

**Root Cause:**

Missing password validation before calling the password comparison function.

**Resolution:**

- Implemented required input validation.
- Improved exception handling.
- Updated invalid password handling to return HTTP 401 Unauthorized.
- Preserved the existing successful login response structure.

**Retesting and Regression Testing:**

| Test Case | Result |
|---|---|
| API-009 — Missing Password Retest | PASS |
| API-004-R — Valid Login Regression | PASS |
| API-005-R — Invalid Password Regression | PASS |
| AUTO-004 — Automated Missing Password Validation | PASS |

**Final Defect Status:** Fixed and retested successfully.

### 3.5 Access Control Testing

Selected access-control checks were performed.

**API-015 — Unauthorized Product Creation**

- HTTP Status: 403 Forbidden
- Product Created: No
- Actual Response: `You are not authorized to create a product`
- Result: PASS

**API-016 — Invalid Product Data**

- HTTP Status: 403 Forbidden
- Authorization: No Auth
- Product Created: No
- Result: BLOCKED

API-016 remains blocked because product validation could not be tested using an authorized administrator account.

These results do not establish comprehensive application security.

## 4. Tools and Technologies

| Tool / Technology | Purpose |
|---|---|
| Postman | Manual API testing |
| Node.js Test Runner | Automated API testing |
| JavaScript | Automated test development |
| Fetch API | Sending HTTP requests in automated tests |
| Visual Studio Code | Code editing and debugging |
| Node.js | Backend runtime |
| Express.js | Backend API framework |
| MongoDB | Application database |
| Git | Version control |
| GitHub | Project documentation and portfolio publishing |
| Markdown | QA and project management documentation |

## 5. Repository Structure

```text
Cristal-Beauty-QA-Portfolio/
|
|-- README.md
|
|-- test-plans/
|   |-- Software-Test-Plan.md
|
|-- manual-testing/
|   |-- Manual-Test-Cases.md
|   |-- Test-Execution-Report.md
|   |-- Overall-QA-Test-Summary.md
|
|-- api-testing/
|   |-- API-Testing-Report.md
|
|-- automation/
|   |-- api-health.test.js
|   |-- api-products.test.js
|   |-- api-search.test.js
|   |-- api-login-validation.test.js
|   |-- Automation-Testing-Report.md
|   |-- package.json
|
|-- bug-reports/
|   |-- BUG-API-001.md
|
|-- project-management/
|   |-- Project-Overview.md
|   |-- Task-Tracker.md
|   |-- Risk-Register.md
|   |-- Project-Timeline.md
|
|-- evidence/
|
|-- .gitignore
```

The repository structure illustrates the intended organization. Evidence files should only be included when actually captured and reviewed. The `.gitignore` file should be added before publishing.

## 6. Project Management Documentation

Project management documentation was prepared to demonstrate project planning, task tracking, risk management, and progress monitoring.

### 6.1 Project Overview

The project overview includes:

- Project background
- Objectives
- Scope
- Deliverables
- QA testing results
- Project phases
- Constraints
- Future improvements

### 6.2 Task Tracker

The task tracker records:

- Task identifiers
- Task descriptions
- Priorities
- Completion status
- Blocked activities
- Remaining work

### 6.3 Risk Register

The risk register documents:

- Identified risks
- Likelihood and impact
- Risk priorities
- Mitigation strategies
- Risk status

### 6.4 Project Timeline

The project timeline summarizes:

- QA planning
- Manual testing
- API testing
- Defect resolution
- Regression testing
- Automation testing
- Documentation
- Future project milestones

Exact historical task dates have not been invented.

## 7. Repository Documentation

### Test Planning

- [Software Test Plan](test-plans/Software-Test-Plan.md)

### Manual Testing

- [Manual Test Cases](manual-testing/Manual-Test-Cases.md)
- [Manual Test Execution Report](manual-testing/Test-Execution-Report.md)
- [Overall QA Test Summary](manual-testing/Overall-QA-Test-Summary.md)

### API Testing

- [API Testing Report](api-testing/API-Testing-Report.md)

### Automation Testing

- [Automation Testing Report](automation/Automation-Testing-Report.md)

### Defect Reporting

- [BUG-API-001 — Missing Password Backend Crash](bug-reports/BUG-API-001.md)

### Project Management

- [Project Overview](project-management/Project-Overview.md)
- [Task Tracker](project-management/Task-Tracker.md)
- [Risk Register](project-management/Risk-Register.md)
- [Project Timeline](project-management/Project-Timeline.md)

## 8. Key Skills Demonstrated

### Software Quality Assurance

- Software test planning
- Test case design
- Manual functional testing
- Positive and negative testing
- API testing using Postman
- HTTP response validation
- Automated API testing
- JavaScript test scripting
- Defect identification and reporting
- Bug investigation and resolution
- Retesting and regression testing
- Test execution documentation
- Basic access-control testing

### IT Project Management

- Project scope documentation
- Task planning and tracking
- Deliverable management
- Project phase tracking
- Risk identification and assessment
- Risk mitigation planning
- Issue and blocker documentation
- Progress reporting
- Project documentation
- Continuous improvement planning

## 9. Future Improvements

1. Retest API-016 using authorized administrator credentials.
2. Expand automated API test coverage.
3. Introduce browser-based UI testing using Playwright.
4. Add automated testing through GitHub Actions.
5. Export and maintain a sanitized Postman collection.
6. Expand testing for additional application features.
7. Review and update QA documentation after future changes.
8. Maintain project management records and risk tracking.

## 10. Security and Privacy

Sensitive information must not be committed to this repository.

Do not publish:

- Passwords
- Authentication tokens
- `.env` files
- Private API keys
- Real customer information
- Sensitive database connection strings
- Unreviewed Postman exports
- Screenshots containing private information

Only verified, sanitized testing evidence should be published.

## 11. Conclusion

The Cristal Beauty Clean QA portfolio demonstrates practical experience in software quality assurance, backend API testing, defect management, automated testing, and project documentation.

The recorded testing activities include:

- 11 manual UI tests passed.
- 15 Postman API tests passed.
- 1 API test blocked.
- 4 automated API tests passed.
- 1 identified backend crash resolved and retested.
- 2 additional login regression checks passed.

The project demonstrates a structured approach to testing, defect resolution, risk management, and continuous quality improvement.

---

**Project:** Cristal Beauty Clean

**Portfolio Focus:** Software Quality Assurance and IT Project Management

**Testing Approaches:** Manual Testing, Postman API Testing, Automated API Testing, Defect Reporting, and Regression Testing

**Automation Framework:** Node.js Built-in Test Runner

**Documentation:** Markdown

**Version Control:** Git and GitHub

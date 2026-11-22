
# Cristal Beauty Clean — QA Project Overview

## 1. Project Information

| Field | Description |
|---|---|
| Project Name | Cristal Beauty Clean |
| Project Type | E-Commerce Web Application |
| Portfolio Area | Software Quality Assurance and IT Project Management |
| Testing Approach | Manual Testing and API Testing |
| Testing Tools | Postman, Visual Studio Code |
| Version Control | Git and GitHub |
| Project Status | Core QA testing completed; documentation and enhancements ongoing |

## 2. Project Background

Cristal Beauty Clean is an e-commerce web application designed to support online beauty product shopping.

The application includes user registration, login, product browsing, product searching, shopping cart management, and checkout functionality.

A structured software quality assurance process was carried out to evaluate selected application functions, identify defects, and verify expected system behavior.

This project management documentation provides an organized overview of the QA activities, testing scope, deliverables, progress, risks, and future improvements.

## 3. Project Objectives

The main objectives of the QA project are:

1. Design and execute manual functional test cases for selected application features.
2. Verify backend API functionality using Postman.
3. Perform positive and negative testing.
4. Identify, investigate, and document software defects.
5. Verify bug fixes through retesting and regression testing.
6. Maintain structured QA documentation.
7. Demonstrate basic project coordination and tracking practices.

## 4. Project Scope

### In Scope

- User registration and login testing
- Product browsing and searching
- Shopping cart functionality
- Checkout functionality
- Frontend access restriction checks
- Authentication API testing
- Product retrieval and search API testing
- Selected backend access-control checks
- Negative input testing
- Defect reporting
- Retesting and regression testing

### Out of Scope / Not Yet Verified

- Comprehensive payment gateway integration testing
- Performance and load testing
- Penetration testing
- Full cross-browser compatibility testing
- Complete automated test execution
- Product creation validation with authorized administrator credentials

These areas may be included in future testing activities.

## 5. Project Deliverables

| Deliverable | Status |
|---|---|
| Software Test Plan | Prepared |
| Manual Test Cases | Completed |
| Manual Test Execution Report | Completed |
| API Testing Report | Completed |
| Defect Report | Completed |
| Overall QA Test Summary | Completed |
| GitHub Portfolio README | Completed |
| Project Management Documentation | In Progress |
| Automated Testing Scripts | Not Started |

## 6. QA Testing Results

| Testing Category | Total Cases | Passed | Blocked |
|---|---:|---:|---:|
| Manual Functional Testing | 11 | 11 | 0 |
| API Testing | 16 | 15 | 1 |
| **Total** | **27** | **26** | **1** |

The results reflect tester-reported execution and do not represent complete requirements or security coverage.

## 7. Defect Management

### BUG-API-001 — Backend Crash During Login

**Issue:** A login request without a password caused the backend process to crash.

**Root Cause:** Missing input validation before password comparison using bcrypt.

**Corrective Actions:**

- Added validation for missing login credentials.
- Improved backend exception handling.
- Updated the invalid password response status.

**Verification Results:**

- Missing password retest: PASS
- Valid login regression test: PASS
- Invalid password regression test: PASS

**Final Status:** Fixed and retested successfully.

## 8. Project Phases

| Phase | Activities | Status |
|---|---|---|
| Phase 1 | QA planning and test case preparation | Completed |
| Phase 2 | Manual functional testing | Completed |
| Phase 3 | API testing using Postman | Completed with one blocked case |
| Phase 4 | Defect investigation and retesting | Completed for identified crash |
| Phase 5 | QA documentation and reporting | In Progress |
| Phase 6 | Project management documentation | In Progress |
| Phase 7 | Test automation and future improvements | Planned |

## 9. Project Risks and Constraints

| Risk / Constraint | Impact | Mitigation / Next Action |
|---|---|---|
| Administrator test credentials unavailable | Product validation test blocked | Recover authorized test access and retest |
| Limited automated test coverage | Repeated testing requires manual execution | Introduce automated regression checks |
| Incomplete HTTP response records for some earlier tests | Limits evidence quality | Capture structured Postman test evidence |
| Backend changes may introduce regressions | Previously working functionality may fail | Repeat targeted regression tests |

## 10. Project Outcomes

The QA activities produced:

- Documented manual and API test cases.
- A structured testing execution summary.
- Identification of a backend authentication defect.
- A verified fix based on tester-reported retesting.
- Two successful login regression checks.
- A documented blocked test and future testing recommendations.

## 11. Future Improvements

1. Resolve administrator test access for API-016.
2. Add reusable automated API test assertions.
3. Implement selected Playwright automation scripts.
4. Expand testing coverage for remaining application features.
5. Maintain a project task tracker and risk register.
6. Update QA documentation after application changes.

## 12. Conclusion

The Cristal Beauty Clean QA project demonstrates a structured approach to software testing, defect management, regression verification, and documentation.

The project also provides an opportunity to demonstrate project management practices through planning, progress tracking, risk identification, and continuous improvement.

The documented results and limitations support a transparent and maintainable software quality assurance portfolio.

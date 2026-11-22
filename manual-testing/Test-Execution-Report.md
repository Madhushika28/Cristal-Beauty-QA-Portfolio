
# Manual Test Execution Report

## Cristal Beauty Clean E-Commerce System

### Project Information

**Project:** Cristal Beauty Clean E-Commerce System  
**Test Type:** Manual Functional Testing  
**Environment:** Local Development  
**Frontend:** React  
**Backend:** Node.js / Express  
**Database:** Connected during local execution  
**Executed By:** Madhushika Ireshamali  
**Reporting Date:** 2026-11-22  
**Execution Status:** Completed  
**Report Version:** 1.0  

---

## 1. Introduction

This document summarizes the initial manual functional testing performed on the Cristal Beauty Clean E-Commerce System.

The purpose of testing was to evaluate the application's core functionality, including user registration, authentication, product browsing, shopping cart operations, checkout, and selected access control scenarios.

A total of 11 manual test cases were executed.

All 11 test cases were reported as passed by the tester.

---

## 2. Test Environment

| Component | Description |
|---|---|
| Frontend | React Application |
| Backend | Node.js / Express |
| Database | Connected |
| Testing Method | Manual Functional Testing |
| Environment | Local Development |
| Test Execution | Browser-Based Testing |
| Test Automation | Not included in this execution cycle |

The frontend and backend applications were running during testing.

The backend reported successful database connectivity.

---

## 3. Test Execution Results

### TC-REG-001 — Valid User Registration

**Module:** User Registration

**Objective:** Verify successful registration with valid user information.

**Expected Result:** The application successfully registers a new user.

**Actual Result:** Registration completed successfully during manual execution.

**Status:** PASS

**Evidence:** `../evidence/TC-REG-001.png`

**Defect:** None reported.

---

### TC-REG-002 — Password Confirmation Mismatch

**Module:** User Registration

**Objective:** Verify that registration is rejected when password and confirmation values do not match.

**Expected Result:** Registration is blocked and an appropriate validation message is displayed.

**Actual Result:** Registration was rejected when different passwords were entered.

**Status:** PASS

**Evidence:** `../evidence/TC-REG-002.png`

**Observation:** Exact validation message was not recorded.

**Defect:** None reported.

---

### TC-LOG-001 — Valid User Login

**Module:** User Login

**Objective:** Verify successful authentication with valid credentials.

**Expected Result:** The user successfully logs in and reaches the appropriate application page.

**Actual Result:** The tester reported successful login using registered credentials.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Defect:** None reported.

---

### TC-LOG-002 — Invalid Password Login

**Module:** User Login

**Objective:** Verify login rejection when an incorrect password is entered.

**Expected Result:** The application rejects invalid credentials and displays an appropriate error message.

**Actual Result:** The tester reported that the login attempt was rejected.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Exact error message was not recorded.

**Defect:** None reported.

---

### TC-PROD-001 — View Products

**Module:** Product Browsing

**Objective:** Verify that available products are displayed.

**Expected Result:** Product information is displayed on the product listing page.

**Actual Result:** The tester reported successful product listing functionality.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Detailed results were not recorded.

**Defect:** None reported.

---

### TC-PROD-002 — Search Products

**Module:** Product Browsing

**Objective:** Verify product search functionality.

**Expected Result:** Products matching the search criteria are displayed.

**Actual Result:** The tester reported successful product search functionality.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Detailed search results were not recorded.

**Defect:** None reported.

---

### TC-CART-001 — Add Product to Cart

**Module:** Shopping Cart

**Objective:** Verify that a product can be added to the shopping cart.

**Expected Result:** The selected product appears in the cart with the expected information.

**Actual Result:** The tester reported successful addition of a product to the cart.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Detailed cart information was not recorded.

**Defect:** None reported.

---

### TC-CART-002 — Remove Product from Cart

**Module:** Shopping Cart

**Objective:** Verify that a product can be removed from the cart.

**Expected Result:** The selected product is removed and cart totals are updated.

**Actual Result:** The tester reported successful product removal.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Detailed cart totals were not recorded.

**Defect:** None reported.

---

### TC-CHK-001 — Valid Checkout

**Module:** Checkout

**Objective:** Verify successful completion of the configured checkout workflow.

**Expected Result:** Checkout completes successfully and order confirmation is displayed.

**Actual Result:** The tester reported successful completion of checkout.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Exact order confirmation details were not recorded.

**Defect:** None reported.

---

### TC-SEC-001 — Access Protected Page Without Login

**Module:** Authentication and Security

**Objective:** Verify that unauthenticated users cannot access protected application pages.

**Expected Result:** The application denies access or redirects unauthenticated users to the login page.

**Actual Result:** The tester observed navigation to the login page when attempting to access a protected route.

**Status:** PASS

**Evidence:** Screenshot requested; availability not independently confirmed.

**Defect:** None reported.

**Limitation:** This test verifies observed frontend routing behavior only. Backend authorization requires additional API-level testing.

---

### TC-SEC-002 — Customer Access to Admin Page

**Module:** Authentication and Security

**Objective:** Verify that a regular customer cannot access admin-only functionality.

**Expected Result:** The system denies access to restricted administrative functionality.

**Actual Result:** The tester reported that customer access to the admin-only page was denied.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Observation:** Exact redirect or access-denied behavior was not recorded.

**Defect:** None reported.

**Limitation:** API-level role-based authorization was not independently verified.

---

## 4. Test Execution Summary

| Metric | Result |
|---|---:|
| Total Planned Test Cases | 11 |
| Total Executed | 11 |
| Passed | 11 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 0 |
| Defects Reported | 0 |
| Execution Coverage | 100% |
| Reported Pass Rate | 100% |

### Test Calculations

**Execution Coverage:**

(11 / 11) × 100 = 100%

**Pass Rate:**

(11 / 11) × 100 = 100%

These percentages apply only to the 11 planned and tester-reported manual test cases.

---

## 5. Module-Wise Test Results

| Module | Total | Passed | Failed |
|---|---:|---:|---:|
| User Registration | 2 | 2 | 0 |
| User Login | 2 | 2 | 0 |
| Product Browsing | 2 | 2 | 0 |
| Shopping Cart | 2 | 2 | 0 |
| Checkout | 1 | 1 | 0 |
| Authentication & Security | 2 | 2 | 0 |
| **Total** | **11** | **11** | **0** |

---

## 6. Defect Summary

No defects were reported by the tester during the initial manual functional testing cycle.

This does not establish that the application is free of defects.

Additional negative testing, boundary testing, API testing, security testing, and automated regression testing are recommended.

---

## 7. Testing Limitations

The following limitations were identified:

1. Exact system messages were not recorded for several test cases.
2. Detailed actual observations were unavailable for some scenarios.
3. Screenshot evidence was reported for registration tests, while other evidence was not fully confirmed.
4. Database persistence was not independently verified for all workflows.
5. API-level authentication and role-based authorization require further testing.
6. Load, performance, and compatibility testing were not included.
7. Automated testing was not conducted during this execution cycle.

---

## 8. Recommendations

Future quality assurance activities should include:

- API testing using Postman.
- Automated UI regression testing using Playwright.
- Authentication and authorization testing.
- Additional negative and boundary test cases.
- Database validation.
- Defect management through GitHub Issues.
- Automated testing through GitHub Actions.
- Cross-browser and responsive testing.

---

## 9. Conclusion

The initial manual functional testing cycle for the Cristal Beauty Clean E-Commerce System has been completed.

All 11 planned test cases were executed and reported as passed by the tester, resulting in 100% execution coverage and a 100% reported pass rate.

The evaluated scenarios covered user registration, login, product browsing, shopping cart functionality, checkout, and selected access control behaviors.

The results provide initial evidence of successful operation of the tested workflows. However, additional testing is required before making broader claims about overall application reliability, security, or production readiness.

---

**Prepared By:** Madhushika Ireshamali  
**Document:** Manual Test Execution Report  
**Version:** 1.0  
**Status:** Initial Manual Testing Completed

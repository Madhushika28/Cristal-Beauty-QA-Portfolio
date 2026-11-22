
# Manual Test Cases
## Cristal Beauty Clean E-Commerce System

**Prepared for:** QA Portfolio  
**Testing Type:** Manual Functional Testing  
**Execution Status:** Completed  
**Test Environment:** Local Development  
**Execution Basis:** Tester-reported manual test results

---

## Module 01 — User Registration

### TC-REG-001: Valid User Registration

**Objective:** Verify that a new user can register with valid information.

**Preconditions:**
- Application is running.
- Test email is not already registered.

**Test Steps:**
1. Open the registration page.
2. Enter a valid first name and last name.
3. Enter a valid email address.
4. Enter a valid password.
5. Confirm the password.
6. Click Register.

**Expected Result:**  
The account is created successfully and the application displays the appropriate success message or navigates to the login page.

**Actual Result:** Registration completed successfully during manual execution.

**Status:** PASS

**Evidence:** ../evidence/TC-REG-001.png

---

### TC-REG-002: Password Confirmation Mismatch

**Test Steps:**
1. Open registration page.
2. Enter valid user details.
3. Enter different values for Password and Confirm Password.
4. Click Register.

**Expected Result:**  
Registration is rejected and a validation message is displayed.

**Actual Result:** Registration was rejected when the password and confirmation did not match. The exact validation message was not recorded.

**Status:** PASS

**Evidence:** ../evidence/TC-REG-002.png

---

## Module 02 — User Login

### TC-LOG-001: Valid Login

**Test Steps:**
1. Open Login page.
2. Enter valid registered credentials.
3. Click Login.

**Expected Result:**  
Login succeeds and the user is redirected to the appropriate page.

**Actual Result:** Login completed successfully using valid registered credentials, as reported by the tester.

**Status:** PASS

**Evidence:** Screenshot not confirmed.

---

### TC-LOG-002: Invalid Password

**Test Steps:**
1. Open Login page.
2. Enter a registered email.
3. Enter an incorrect password.
4. Click Login.

**Expected Result:**  
Login is rejected and an appropriate error message is displayed.

**Actual Result:** The invalid-password login attempt was rejected, as reported by the tester. The exact error message was not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

---

## Module 03 — Product Browsing

### TC-PROD-001: View Products

**Test Steps:**
1. Open the application home page.
2. Navigate to the product listing.
3. Observe available products.

**Expected Result:**  
Available product records are displayed with relevant product information.

**Actual Result:** The tester reported successful product listing functionality. Detailed observations were not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

---

### TC-PROD-002: Search for Products

**Test Steps:**
1. Open the product listing.
2. Enter an existing product name in the search field.
3. Execute the search.

**Expected Result:**  
Products matching the search criteria are displayed.

**Actual Result:** The tester reported that product search functioned successfully. Detailed observations were not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

---

## Module 04 — Shopping Cart

### TC-CART-001: Add Product to Cart

**Test Steps:**
1. Open a product detail page.
2. Select an available product.
3. Click Add to Cart.
4. Open the cart.

**Expected Result:**  
The selected product is displayed in the cart with the expected quantity and price.

**Actual Result:** The tester reported successful addition of a product to the shopping cart. Detailed observations were not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

---

### TC-CART-002: Remove Product from Cart

**Test Steps:**
1. Add a product to the cart.
2. Open the cart.
3. Remove the selected product.

**Expected Result:**  
The product is removed and the cart totals are updated.

**Actual Result:** The tester reported successful removal of the selected product. Detailed observations were not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

---

## Module 05 — Checkout

### TC-CHK-001: Valid Checkout

**Test Steps:**
1. Log in with a valid customer account.
2. Add an available product to the cart.
3. Navigate to checkout.
4. Enter valid required details.
5. Complete the configured test checkout workflow.

**Expected Result:**  
The checkout process completes successfully and the appropriate order confirmation is displayed.

**Actual Result:** The tester reported successful completion of the checkout workflow. Detailed observations were not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

---

## Module 06 — Authentication & Security

### TC-SEC-001: Access Protected Page Without Login

**Test Steps:**
1. Log out.
2. Open a protected application URL directly.

**Expected Result:**  
Unauthenticated access is denied or redirected to login.

**Actual Result:** The tester observed navigation to the login page when attempting to access a protected route without authentication.

**Status:** PASS

**Evidence:** Screenshot was requested; file availability not confirmed.

**Note:** This verifies the observed UI behavior. Backend authorization requires separate API testing.

---

### TC-SEC-002: Customer Access to Admin Page

**Test Steps:**
1. Log in as a customer.
2. Attempt to access an admin-only function.

**Expected Result:**  
Access is denied to the restricted function.

**Actual Result:** The tester reported that customer access to the admin-only functionality was denied. Detailed observations were not recorded.

**Status:** PASS

**Evidence:** Manual execution record; screenshot not confirmed.

**Note:** API-level role-based access control requires separate verification.

---

## Test Execution Summary

| Metric | Count |
|---|---:|
| Total Test Cases | 11 |
| Passed | 11 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 0 |

**Execution Coverage:** 100%

**Pass Rate Among Executed Tests:** 100%

---

## Testing Notes

- All 11 test cases were reported as passed by the tester.
- Detailed actual observations were not recorded for several cases.
- Screenshots were reported for TC-REG-001 and TC-REG-002.
- Other screenshot evidence has not been confirmed.
- No defects were reported during this initial manual testing cycle.
- API testing, automated regression testing, and additional security verification remain outside the completed manual test scope.

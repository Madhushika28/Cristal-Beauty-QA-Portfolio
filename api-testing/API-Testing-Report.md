# Postman API Test Execution Report

**Project:** Cristal Beauty Clean E-Commerce System  
**Environment:** Local Express backend (`http://localhost:5000`), connected test/development database as reported  
**Execution method:** Manual requests in Postman  
**Report compiled:** 2026-11-22  
**Evidence basis:** Tester-reported results and selected copied response/terminal output; most raw Postman responses and timestamps were not retained.

## Summary

| Metric | Count |
|---|---:|
| Unique cases (API-001 to API-016) | 16 |
| Final reported PASS | 15 |
| BLOCKED | 1 |
| Currently unresolved FAIL | 0 |
| Originally failed and subsequently passed retest | 1 (API-009) |
| Additional reported login regression checks | 2 (API-004-R, API-005-R) |

**Final reported pass rate:** 15/16 = **93.75%** of all planned cases. Among 15 unblocked cases, reported pass rate = **100%**. A blocked case is not a pass; these figures do not imply complete feature coverage or production readiness.

## Test results

| ID | Scenario / request | Expected behavior | Actual evidence reported | Final result |
|---|---|---|---|---|
| API-001 | `GET /health` | Healthy response | Tester reported PASS; status/body not retained | PASS (reported) |
| API-002 | `GET /api/nonexistent-test-route` | Route not found | Tester reported PASS; status/body not retained | PASS (reported) |
| API-003 | `GET /api/products` | Products listed | Tester reported PASS; product data later supplied | PASS (reported) |
| API-004 | `POST /api/users/login` valid credentials | Successful login | Tester reported PASS; status/body not retained | PASS (reported) |
| API-005 | `POST /api/users/login` wrong password | Reject credentials, ideally 401 | Tester reported PASS; original HTTP status/body not recorded | PASS (reported; initial response semantics unverified) |
| API-006 | `POST /api/users` valid registration | Account created | Tester reported PASS; status/body not retained | PASS (reported) |
| API-007 | `POST /api/users` duplicate email | Prevent duplicate account | Tester reported rejected duplicate; status/body not retained | PASS (reported) |
| API-008 | `POST /api/users` without email | Reject missing email | Tester reported PASS; status/body not retained | PASS (reported; response semantics unverified) |
| API-009 | `POST /api/users/login` without password | Reject missing password without crash | Initially backend crashed, Postman ECONNRESET; code updated and tester reported retest PASS (retest status/body not retained) | PASS after fix (reported) |
| API-010 | `GET /api/products/000000000000000000000000` | Not found | 404; `Product not found` | PASS |
| API-011 | `GET /api/products/invalid-id` | Reject invalid-format ID safely | 404; `Product not found` | PASS with observation (see below) |
| API-012 | `GET /api/products/search/NonExistingProduct987654321` | No matches returned | 200; empty array `[]` | PASS |
| API-013 | `GET /api/products/search/Cristal%20Glow%20Face%20Cream` | Matching product returned | 200; matching product confirmed | PASS |
| API-014 | `GET /api/products/CB-CR-002` | Existing product returned | 200; matching product confirmed | PASS |
| API-015 | `POST /api/products` without authorization | Reject product creation | 403; `You are not authorized to create a product`; no product created | PASS |
| API-016 | `POST /api/products` with missing name and price | With authorized admin account, reject invalid data | 403 with No Auth; no product created; admin credentials unavailable | BLOCKED (validation not exercised) |

### Regression execution (not added to the 16 unique cases)

| ID | Reason | Result |
|---|---|---|
| API-004-R | Confirm valid login still works after login controller fix | PASS (tester-reported; HTTP status unrecorded) |
| API-005-R | Confirm wrong password is rejected after controller fix | PASS (tester-reported; HTTP status unrecorded) |

### Defect and observations

- **BUG-API-001 — High severity; fixed and retest reported PASS.** Missing `password` caused `bcrypt.compareSync` to throw `data and hash arguments required`, crashing Node.js and producing Postman `ECONNRESET`. See [`../bug-reports/BUG-API-001.md`](../bug-reports/BUG-API-001.md).
- **OBS-API-001 — API design observation, not confirmed defect.** An invalid-format product identifier produced `404 Product not found` rather than a distinct `400` validation response. Whether this is acceptable depends on the API contract.
- **BLOCK-API-016 — Test environment constraint.** Missing authorized admin credentials meant product input-validation logic could not be reached. `403` only verifies authorization rejection, already covered by API-015.
- **API-005 historical uncertainty.** The original login controller returned HTTP 500 for wrong passwords, although the original test was self-reported as PASS without a recorded status. The controller was later changed to return 401. Do not present the original API-005 execution as proof of correct HTTP response handling.

### Scope and limitations

Tested only selected endpoints and representative inputs. No automated assertions or exported Postman collection were supplied. Authenticated product creation input validation, order/payment APIs, privilege escalation, full error handling, database integrity, concurrency, deployment, performance and production security were not comprehensively assessed. Avoid sharing JWTs, passwords, `.env` contents, real customer data or unredacted request histories in the public repository.

**Disposition:** The planned API testing set is closed for this reporting cycle with 15 PASS, 1 BLOCKED; follow-up recommended when admin test credentials become available.

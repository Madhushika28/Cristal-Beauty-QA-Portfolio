# BUG-API-001 — Login request without password crashes backend

| Field | Value |
|---|---|
| Project | Cristal Beauty Clean |
| Component | Backend — `controller/userController.js`, `loginUser` |
| Associated case | API-009 — Missing Password |
| Severity | High (availability impact on tested local Node.js process) |
| Original status | FAIL — reproducible from tester's Postman request and backend log |
| Resolution | Code fix applied; retest and two regression scenarios reported PASS |
| Report date | 2026-11-22 (execution dates/times not separately recorded) |

## Preconditions

Backend running locally on port 5000; a registered test user's email is available.

## Reproduction

1. Open Postman and configure `POST http://localhost:5000/api/users/login`.
2. Use Body → raw → JSON: `{ "email": "<registered-test-email>" }` (omit `password`).
3. Click **Send**; inspect Postman and backend terminal.

## Expected

Return a controlled client error (e.g., HTTP `400 Bad Request`, JSON `Email and password are required`); backend stays running and does not issue an auth token.

## Actual before fix

Postman showed `Could not get response` and `read ECONNRESET`. Terminal output included:

```text
Error: data and hash arguments required
    at Object.compareSync (.../node_modules/bcrypt/bcrypt.js:162:15)
    at .../controller/userController.js:70:51
Node.js v20.19.2
[nodemon] app crashed - waiting for file changes before starting...
```

## Cause and correction

The original controller accessed `req.body.password` without checking it and passed undefined to `bcrypt.compareSync`. The replacement controller uses `req.body ?? {}`, validates email/password strings before database lookup and bcrypt comparison, wraps the flow in `try/catch`, and returns `400` for missing fields. It also changes invalid-password response from `500` to `401` and preserves successful login payload structure.

## Verification

| Check | Reported outcome | Evidence limitation |
|---|---|---|
| API-009 retest — email without password | PASS | Exact retest HTTP status/JSON not recorded |
| API-004-R — correct credentials | PASS | Exact HTTP status not recorded |
| API-005-R — wrong password | PASS | Exact HTTP status not recorded |

**Status:** Resolved — tester-reported retest PASS. Retest artifacts should be captured before claiming independent verification. No screenshots or logs beyond the copied terminal text were attached to this report.

## Follow-up improvement

Also validate missing email, malformed bodies, and general login error handling with automated Postman assertions; use generic auth failure messages where appropriate to avoid account enumeration.

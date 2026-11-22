
# Cristal Beauty Clean — QA Risk Register

## 1. Purpose

This risk register identifies and tracks potential risks that may affect the quality assurance activities of the Cristal Beauty Clean e-commerce application.

It records identified risks, their likelihood, impact, mitigation strategies, and current status.

## 2. Risk Assessment Criteria

### Likelihood
- Low: Unlikely to occur.
- Medium: May occur.
- High: Likely to occur.

### Impact
- Low: Minor impact on project activities.
- Medium: Moderate impact on project delivery or testing.
- High: Significant impact on testing, quality, or completion.

## 3. Risk Register

| Risk ID | Risk Description | Likelihood | Impact | Priority | Mitigation Strategy | Status |
|---|---|---|---|---|---|---|
| R-001 | Administrator test credentials unavailable | High | High | High | Recover authorized admin access and retest API-016 | Open |
| R-002 | Backend crashes due to missing input validation | Medium | High | High | Implement validation, error handling, and regression testing | Mitigated |
| R-003 | Limited automated test coverage | High | Medium | High | Introduce automated API and UI regression tests | Open |
| R-004 | Incomplete API response evidence | Medium | Medium | Medium | Capture HTTP statuses and sanitized Postman responses | Open |
| R-005 | Backend changes may introduce regressions | Medium | High | High | Execute targeted regression tests after changes | Monitoring |
| R-006 | Database or backend connectivity interruptions | Medium | Medium | Medium | Verify server and database connectivity before testing | Monitoring |
| R-007 | Sensitive information accidentally published to GitHub | Medium | High | High | Review files, screenshots, and Postman exports before publishing | Open |
| R-008 | Project documentation becomes outdated | Medium | Medium | Medium | Update test reports and task tracker after changes | Monitoring |

## 4. Key Risk Details

### R-001 — Administrator Credentials Unavailable

**Description:** API-016 requires administrator authorization to verify product input validation.

**Impact:** Product validation remains unverified.

**Mitigation:** Recover authorized administrator test access and rerun the test.

**Status:** Open.

### R-002 — Backend Crash During Login

**Description:** A login request submitted without a password caused the backend process to crash.

**Impact:** Authentication endpoint availability was affected.

**Mitigation:** Added input validation and improved error handling.

**Verification:** Missing password retest and two login regression tests passed.

**Status:** Mitigated.

### R-003 — Limited Test Automation

**Description:** Current testing relies mainly on manual execution and Postman requests.

**Impact:** Repeated testing may require additional effort.

**Mitigation:** Introduce automated API assertions and selected Playwright tests.

**Status:** Open.

## 5. Risk Monitoring and Review

Risks should be reviewed when:

- A defect is identified or resolved.
- Backend functionality changes.
- A blocked test becomes executable.
- New automated tests are introduced.
- QA documentation is prepared for publication.

Risk likelihood and impact ratings are qualitative planning estimates, not measured probabilities.

## 6. Conclusion

This risk register supports structured QA planning, risk identification, prioritization, and mitigation.

It also provides a foundation for monitoring testing constraints and improving the reliability of future QA activities.

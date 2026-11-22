
# Cristal Beauty Clean — QA Task Tracker

## Project Information

- **Project:** Cristal Beauty Clean
- **Workstream:** Software Quality Assurance
- **Tracking Method:** Task-based progress tracking
- **Overall Status:** Core testing completed; documentation and automation improvements ongoing

## Task Tracking Table

| Task ID | Task Description | Priority | Status |
|---|---|---|---|
| QA-001 | Prepare Software Test Plan | High | Completed |
| QA-002 | Design Manual Test Cases | High | Completed |
| QA-003 | Execute Manual Functional Tests | High | Completed |
| QA-004 | Prepare Manual Test Execution Report | High | Completed |
| QA-005 | Configure Postman API Testing | High | Completed |
| QA-006 | Execute Authentication API Tests | High | Completed |
| QA-007 | Execute Product API Tests | High | Completed |
| QA-008 | Investigate Login Backend Crash | High | Completed |
| QA-009 | Fix Login Input Validation Defect | High | Completed |
| QA-010 | Perform Login Regression Testing | High | Completed |
| QA-011 | Prepare Final API Testing Report | High | Completed |
| QA-012 | Prepare Defect Report | High | Completed |
| QA-013 | Prepare QA Portfolio README | Medium | Completed |
| QA-014 | Prepare Project Overview | Medium | Completed |
| QA-015 | Prepare QA Task Tracker | Medium | Completed |
| QA-016 | Prepare Project Risk Register | Medium | Completed |
| QA-017 | Prepare Project Timeline | Medium | Completed |
| QA-018 | Retest Invalid Product Data with Admin Access | High | Blocked |
| QA-019 | Implement Automated Tests | Medium | Completed |
| QA-020 | Review and Publish Portfolio on GitHub | High | In Progress |


## Task Status Definitions

- **Completed:** Work has been performed and recorded.
- **In Progress:** Work is currently being prepared.
- **Not Started:** Work has not begun.
- **Blocked:** Work cannot continue until a dependency is resolved.

## Current Blocker

**QA-018 — Invalid Product Data Retest**

The test requires a valid administrator authentication token.

The initial unauthenticated request returned HTTP 403 Forbidden. Product field validation remains unverified because authorized administrator test credentials are unavailable.

**Next Action:** Recover authorized administrator test access and execute API-016 again.

## Completed Milestones

- Manual Testing: 11/11 tester-reported PASS
- API Testing: 15/16 PASS, 1 BLOCKED
- BUG-API-001: Fixed and retested
- Login Regression Testing: 2/2 tester-reported PASS

## Next Priorities

1. Complete the project risk register.
2. Document the project timeline.
3. Add automated regression testing.
4. Resolve the blocked product validation test.
5. Review and publish the final GitHub portfolio.

## Notes

This tracker reflects documented QA activities rather than a formal team assignment system. Dates, effort estimates, and task owners have not been invented. Task statuses should be updated as work progresses.

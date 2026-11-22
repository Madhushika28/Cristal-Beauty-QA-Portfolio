
const test = require("node:test");
const assert = require("node:assert/strict");

test("AUTO-004 - Missing Password Validation", async () => {
    const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "qa.test@example.com"
            })
        }
    );

    assert.equal(response.status, 400);

    const data = await response.json();

    assert.equal(
        data.message,
        "Email and password are required"
    );

    assert.equal(data.token, undefined);
});

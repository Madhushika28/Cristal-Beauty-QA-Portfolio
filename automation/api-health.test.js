
const test = require("node:test");
const assert = require("node:assert/strict");

test("API Health Check", async () => {
    const response = await fetch("http://localhost:5000/health");

    assert.equal(response.status, 200);
});

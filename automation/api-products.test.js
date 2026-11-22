
const test = require("node:test");
const assert = require("node:assert/strict");

test("AUTO-002 - Get All Products", async () => {
    const response = await fetch(
        "http://localhost:5000/api/products"
    );

    assert.equal(response.status, 200);

    const products = await response.json();

    assert.ok(
        Array.isArray(products),
        "Expected products response to be an array"
    );
});
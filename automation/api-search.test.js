
const test = require("node:test");
const assert = require("node:assert/strict");

test("AUTO-003 - Search Existing Product", async () => {
    const productName = "Cristal Glow Face Cream";

    const response = await fetch(
        `http://localhost:5000/api/products/search/${encodeURIComponent(productName)}`
    );

    assert.equal(response.status, 200);

    const products = await response.json();

    assert.ok(
        Array.isArray(products),
        "Expected search response to be an array"
    );

    assert.ok(
        products.some(
            (product) => product.name === productName
        ),
        "Expected product was not found in search results"
    );
});

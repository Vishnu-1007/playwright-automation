const { test, expect } = require('@playwright/test');

// Test 1 — happy path (already written)
test('mock API success', async ({ page }) => {
    await page.route('https://jsonplaceholder.typicode.com/users/1', route => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({ name: 'Fake Vishnu', username: 'fakevishnu' })
        });
    });

    await page.goto('https://jsonplaceholder.typicode.com/users/1');
    await expect(page.getByText('Fake Vishnu')).toBeVisible();
});

// Test 2 — failure scenario (NEW test to add)
test('mock API failure', async ({ page }) => {
    await page.route('https://jsonplaceholder.typicode.com/users/1', route => {
        route.fulfill({
            status: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        });
    });

    await page.goto('https://jsonplaceholder.typicode.com/users/1');
    await expect(page.getByText('Internal Server Error')).toBeVisible();
});
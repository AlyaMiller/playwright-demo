# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> get started link
- Location: tests/example.spec.ts:13:16

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | //using playwright test function
  4  | test("has title", async ({ page }) => {
  5  |   await page.goto("https://playwright.dev/");
  6  | 
  7  |   // Expect a title "to contain" a substring.
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | test("get started link", async ({ page }) => {
  12 |   await page.goto("https://playwright.dev/");
  13 | 
  14 |   // Click the get started link.
  15 |   await page.getByRole("link", { name: "Get started" }).click();
> 16 | 
     |              ^ Error: page.goto: Target page, context or browser has been closed
  17 |   // Expects page to have a heading with the name of Installation.
  18 |   await expect(
  19 |     page.getByRole("heading", { name: "Installation" }),
  20 |   ).toBeVisible();
  21 | });
  22 | 
  23 | // npx playwright codegen https://selectors-practice.onrender.com/
  24 | // import { test, expect } from '@playwright/test';
  25 | 
  26 | // test('test', async ({ page }) => {
  27 | //   await page.goto('https://selectors-practice.onrender.com/');
  28 | //   await page.getByRole('textbox', { name: 'Username' }).click();
  29 | //   await page.getByPlaceholder('Password').click();
  30 | //   await page.getByPlaceholder('Password').fill('hellow');
  31 | //   await page.getByRole('textbox', { name: 'Username' }).click();
  32 | //   await page.getByRole('textbox', { name: 'Username' }).fill('alya');
  33 | //   await page.getByRole('button', { name: 'Login' }).click();
  34 | //   await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  35 | //   await page.getByRole('button', { name: 'Double Click Me' }).click();
  36 | //   await page.locator('body').click();
  37 | //   await page.getByRole('textbox', { name: 'Email' }).click();
  38 | //   await page.getByRole('textbox', { name: 'Email' }).fill('ninsu@gmail.com');
  39 | //   await page.getByLabel('Password').click();
  40 | //   await page.getByLabel('Password').fill('eer3');
  41 | //   await page.getByRole('button', { name: 'Submit Form' }).click();
  42 | 
```
import { test, expect } from "@playwright/test";

//using playwright test function
test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

// npx playwright codegen https://selectors-practice.onrender.com/
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://selectors-practice.onrender.com/');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('hellow');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('alya');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('button', { name: 'Click Me', exact: true }).click();
//   await page.getByRole('button', { name: 'Double Click Me' }).click();
//   await page.locator('body').click();
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('ninsu@gmail.com');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('eer3');
//   await page.getByRole('button', { name: 'Submit Form' }).click();

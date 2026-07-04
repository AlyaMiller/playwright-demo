//Assertions
import { test, expect } from "@playwright/test";

//------------Task 1
test("fills Login Form and verifies the message", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Username").fill("arianna_smith@gmail.com");
  await page.getByPlaceholder("Password").fill("ht234h");
  await page.getByRole("button", { name: "Login" }).click();
  //checks a fixed fragment
  await expect(page.locator("#loginMessage")).toContainText("Logged in as");
});

//------------Task 2
test("verifies the paragraph's text matches", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await expect(page.locator("#textParagraph")).toContainText(
    "This is a sample text",
  );
});

//------------Task 3
test("checks if the buttons are disabled or enabled", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await expect(
    page.getByRole("button", { name: "Disabled Button" }),
  ).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Click Me", exact: true }),
  ).toBeEnabled();
  await expect(
    page.getByRole("button", { name: "Double Click Me", exact: true }),
  ).toBeEnabled();
});

//------------Task 4
test("verifies the exact number of fruit options", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await expect(page.locator("#searchOptions li")).toHaveCount(7);
});

//------------Task 5
test("clicks the link,and verifies the resulting page's URL", async ({
  page,
}) => {
  await page.goto("https://selectors-practice.onrender.com/");
  //sets up a listener
  const popup = page.waitForEvent("popup");
  //result is the actual new tab
  const result = await popup;
  //checks the URL of the new tab (result), but page
  //page still points at the original practice site tab
  await expect(result).toHaveURL("https://example.com/");
});

//------------Mini Challenge
test("fills Login Form and verifies the visibility, text, and state", async ({
  page,
}) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Username").fill("arianna_smith@gmail.com");
  await page.getByPlaceholder("Password").fill("ht234h");
  await page.getByRole("button", { name: "Login" }).click();
  //verifies the login message appeared with the right content
  await expect(page.locator("#loginMessage")).toContainText("Logged in as");
  //verifies Remember Me is checked by default
  await expect(page.locator("#rememberMe")).toBeChecked();
  //verifies the message container is visible
  await expect(page.locator("#loginMessage")).toBeVisible();
  //verifies the dropdown defaults to USA
  await expect(page.locator("#country")).toHaveValue("USA");
});

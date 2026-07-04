import { test, expect } from "@playwright/test";

//------------Task 1
test("clicks the submit button", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("button", { name: "Login" }).click();
});

//------------Task 2
test("sample sentence text is visible", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  console.log(await page.getByText("This is a sample").textContent());
});

//------------Task 3
test("fills Email and Password fields using labels", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByLabel("Email").fill("alina.su@gmail.com");
  await page.getByLabel("Password").fill("67rye3");
});

//------------Task 4
test("types username and password by placeholder", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Username").fill("Alina Su");
  await page.getByPlaceholder("Password").fill("yt743");
});

//------------Task 5
test("clicks button using data-testid", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByTestId("submit-button").click();
});

//------------Task 6
test("selects the Choice B radio button", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("radio", { name: "Choice B" }).check();
});

//------------Task 7
//text sitting inside the same wrapping label
test("selects the Option 1 checkbox", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("checkbox", { name: "Option 1" }).check();
});

//------------Mini Challenge
//CSS- #loginForm [type="submit"]. -attribute-based
//XPath by text- //button[text()="Login"]  -attribute-based
//XPath by attribute- //form[@id="loginForm"]//button[@type="submit"]. -attribute-based
//getByRole()- Task 1. ---role-based

//role-based- breaks on meaningful user-visible change
//attribute-based- breaks on invisible code-level change

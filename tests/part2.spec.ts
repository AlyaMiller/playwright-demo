//Interacting with Elements
import { test, expect } from "@playwright/test";

//------------Task 1
test("clicks Click Me and double clicks Double Click Me buttons", async ({
  page,
}) => {
  await page.goto("https://selectors-practice.onrender.com/");
  //added exact: true, otherwise 2 elements matching locator
  await page.getByRole("button", { name: "Click Me", exact: true }).click();
  //shorter- await page.click("#btnClick");
  await page.getByRole("button", { name: "Double Click Me" }).dblclick();
});

// //------------Task 2
test("filling the Login Form and changing the country", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Username").fill("assima_su@gmail.com");
  await page.getByPlaceholder("Password").fill("76hyr63");
  await page.fill("#password", "76hyr63"); //css, hpath
  await page.locator("#country").selectOption("Canada");
});

// //------------Task 3
test("checks and unchecks Option 1 checkbox", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("checkbox", { name: "Option 1" }).check();
  await page.getByRole("checkbox", { name: "Option 1" }).uncheck();
});

//------------Task 4
test("hovers over menu and clicks revealed submenu", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("css=div.menu").hover();
  await page.locator("#submenuItem").click();
});

//------------Task 5
test("moving Finish report to the Done list", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByText("Finish report").dragTo(page.locator("#doneList"));
});

//------------Task 6
test("types text and submits it", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Type something...").click();
  await page.keyboard.type("Hello World");
  await page.keyboard.press("Enter");
});

//Alternative
test("alternative", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page
    .getByPlaceholder("Type something...")
    .pressSequentially("Hello World", { delay: 1000 });
  await page.keyboard.press("Enter");
});

//------------Task 7
test("clicks Load Data and waits for result", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("button", { name: "Load Data" }).click();
  //await page.waitForSelector("#data");
  await page.locator("#data").waitFor({ state: "visible" });
});

//Mini Challenge
test("verifies that the single-file downloaded", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download Single File" }).click();
  const result = await download;
  console.log(result.suggestedFilename());
});

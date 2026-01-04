const { test, expect } = require('@playwright/test');

test('Handle Multiple Windows', async ({ page, context }) => {

  // ✅ 1️⃣ Create a new browser context & page
//   const context = await browser.newContext();- if you write browser in fixture then these 2 lines required
//   const page = await context.newPage();

  // ✅ 2️⃣ Go to the main page
  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

  // ✅ 3️⃣ Listen for new page event BEFORE clicking (very important)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // waits for new window/tab
    page.locator('#newWindowBtn').click() // action that opens it
  ]);

  // ✅ 4️⃣ Wait until new page is loaded
  await newPage.waitForLoadState();

  // ✅ 5️⃣ Enter text in the child window
  await newPage.locator('#firstNamez').fill('Hariprasad - Child Window');
  console.log(await newPage.locator('#firstName').inputValue());// to get entered dynamic value

  await newPage.waitForTimeout(1000);

  


  const text = await newPage.locator("//h1[contains(text(),'Basic Controls') and @itemprop='name']").textContent();
  const cutText = text.split(" ")[0];
  console.log(cutText)


  // ✅ 6️⃣ Close the child window
  await newPage.close();// this is not mandatory coz above you said newpage means childs below page means parent

  // ✅ 7️⃣ Back to parent window and enter text
  await page.locator('#name').fill(cutText);
  await page.waitForTimeout(1000);

  // ✅ 8️⃣ Close the parent window
  await page.close();

});

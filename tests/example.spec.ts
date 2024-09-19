import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator("")).toContainText("");
});

test('Create Account LUMA', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await expect(page).toHaveTitle('Home Page');
  await page.waitForTimeout(5000);
  await page.locator('xpath=(//a[text()="Create an Account"])[1]').click();
  await page.locator('#firstname').fill('Dixith');
  await page.locator('#lastname').fill('Thiru');
  await page.locator('#email_address').fill('Thiru@gmail.com');
  await page.locator('#password').first().fill('Dixith593');
  await page.locator('#password-confirmation').fill('Dixith593');
  await page.locator('#password-confirmation').fill('Dixith593');
  await page.locator('Create an Account').click();
  
 

  

  // await page.locator('xpath=//span[text()="Create an Account"]').click();
  // await page.locator('xpath=//span[text()="Create an Account"]').click();
  // await page.locator('xpath=//span[text()="Create an Account"]').click();
  // await page.locator('xpath=//span[text()="Create an Account"]').click();
});

test('Check popups', async ({ page }) => {
//Input To Alert
await page.goto('https://demo.automationtesting.in/Alerts.html');
await page.locator("//a[@href='#CancelTab']").click();
 page.on('dialog',async dialog=>
  {
    console.log ('Alert Message - '+ dialog.message());
    console.log('Input text - '+dialog.defaultValue());
    dialog.accept('QA Team');
  }
);
await new Promise(resolve => setTimeout(resolve, 5000));
await page.locator("//button[@onclick='confirmbox()']").click();
await new Promise(resolve => setTimeout(resolve, 5000));


await page.goto('https://demo.automationtesting.in/Alerts.html');
await page.locator("//a[@href='#CancelTab']").click();

});



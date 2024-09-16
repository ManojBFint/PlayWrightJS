// @ts-check
const { test, expect } = require('@playwright/test');



test('should navigate to example.com and check the title', async ({ page }) => {


  await page.goto('https://www.salesforce.com/in/form/signup/freetrial-sales/?d=topnav2-btn-ft');

  const newPage=page;
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Try for free' }).click();
  // const newPage = await page1Promise;
  // await newPage.waitForLoadState('networkidle');
  // await newPage.waitForLoadState('domcontentloaded');
  // await newPage.waitForLoadState('load');
  // // Wait for the page to load
  // await newPage.waitForTimeout(10000);
  const userName = `cris-${Math.floor(Math.random() * 10000)}`;
  const lname = `john-${Math.floor(Math.random() * 10000)}`;
  // Fill in the form fields
  await newPage.fill('input[id*="UserFirstName"]', userName);
  await newPage.fill('input[id*="UserLastName"]', lname);

  const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
  await newPage.fill('input[id*="UserEmail"]', "guduru.sateesh@gmail.com");
  await newPage.waitForTimeout(1500);
  await newPage.fill('input[id*="CompanyName"]', "test");
  await newPage.waitForTimeout(1500);
  const randomPhone = `123-456-${Math.floor(Math.random() * 10000)}`;
  await newPage.fill('input[id*="UserPhone"]', randomPhone);
  await newPage.waitForTimeout(1500);
  // Select options from dropdowns
  await newPage.selectOption('select[id*="UserTitle"]', 'Sales Manager');
  await newPage.waitForTimeout(1500);
  await newPage.selectOption('select[id*="CompanyEmployees"]', '1 - 25 employees');
  await newPage.waitForTimeout(1500);
  // Click the checkbox and the submit button
  //await newPage.click("(//*[@class='checkbox-ui'])[2]");
  await page.evaluate(() => {
    const element = document.querySelector("(//*[@class='checkbox-ui'])[2]"); // Replace 'selector' with the actual selector
    if (element) {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(event); // Dispatch the event to simulate a click
    } else {
        console.error('Element not found');
    }
});
  await newPage.waitForLoadState('networkidle');
  await newPage.waitForLoadState('domcontentloaded');
  await newPage.waitForLoadState('load');
  // Wait for the page to process the form
  await newPage.waitForTimeout(20000);

  // Click through the setup process
  await newPage.click('text="Sales"');
  await newPage.click('text="Next"');
  await newPage.click('text="Contacts and info are disorganized"');
  await newPage.click('text="Submit"');

  // Click to create a new account
  await newPage.click('text="Accounts"');
  await newPage.click('text="New"');

  // Fill in the new account form
  await newPage.fill('input[id*="input"]', 'Test Account');
  await newPage.fill('input[name="Name"]', 'John Doe');
  await newPage.fill('input[name="Website"]', 'https://example.com');
  await newPage.selectOption('select[name="Type"]', 'Customer');
  await newPage.fill('textarea[name="Description"]', 'This is a test description');
  await newPage.fill('input[name="Phone"]', '123-456-7890');
  await newPage.fill('textarea[name="Billing Street"]', '123 Main St');
  await newPage.fill('input[name="Billing City"]', 'Anytown');
  await newPage.fill('input[name="Billing Zip/Postal Code"]', '12345');
  await newPage.fill('input[name="Billing State/Province"]', 'CA');
  await newPage.fill('input[name="Billing Country"]', 'USA');
  await newPage.fill('textarea[name="Shipping Street"]', '456 Oak Ave');
  await newPage.fill('input[name="Shipping City"]', 'Sometown');
  await newPage.fill('input[name="Shipping Zip/Postal Code"]', '54321');
  await newPage.fill('input[name="Shipping State/Province"]', 'NY');
  await newPage.fill('input[name="Shipping Country"]', 'USA');

  // Save the form
  await newPage.click('text="Save"');

  // Close the browser

});



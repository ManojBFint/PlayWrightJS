const { chromium } = require('playwright');

(async () => {
  // First Scenario: Registration process
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.salesforce.com/in/?ir=1');
  // Click the "Start Free Trial" button
  const page2Promise = page.waitForEvent('popup');
  await page.getByLabel('Start free trial: We bring').click();
  const page2 = await page2Promise;
  await page2.getByLabel('First name').fill('QASW');
  await page2.getByLabel('Last name').fill('WEDS');
  await page2.getByLabel('Email').fill('QA@FINTINC.COM');
  await page2.getByLabel('Job Title').selectOption('Sales_Manager_ANZ');
  await page2.getByLabel('Company', { exact: true }).fill('FINT');
  await page2.getByLabel('Employees').selectOption('1001');
  await page2.getByLabel('Phone').fill('1234567890');
  await page2.locator('.msaCheckbox > div > .field > .checkbox-ui').click();
  await page2.getByRole('button', { name: 'start my free trial' }).click();
  await context.close();
  await browser.close();

  // Second Scenario: Log out and then log back in
  const browser2 = await chromium.launch({ headless: false });
  const page3 = await browser2.newPage();
  await page3.goto('https://www.salesforce.com/in/?ir=1');
  await page3.locator('hgf-button', { hasText: 'Login' }).click();
  await page3.locator("hgf-popover.hgf-popover [data-tracking-stable='salesforceLogin']").click();
  await page3.locator("//input[@id='username']").fill('fintmobile-52he@force.com');
  await page3.locator("//input[@id='password']").fill('Test@123');
  await page3.locator("//input[@id='Login']").click();
  await browser2.close();

  // Third Scenario: Create Account, Opportunity, and verify details
  const browser3 = await chromium.launch({ headless: false });
  const context3 = await browser3.newContext();
  const page4 = await context3.newPage();

  // Login to Salesforce
  await page4.goto('https://login.salesforce.com');
  await page4.fill('#username', 'your-username');
  await page4.fill('#password', 'your-password');
  await page4.click('#Login');
  await page4.waitForLoadState('load');

  // Rest of the code here...

  await context3.close();
  await browser3.close();
})();
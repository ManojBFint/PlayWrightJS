const { chromium } = require('playwright');
Feature('Salesforce Opportunity Workflow');

Scenario('registration process for the application', async () => {
  
  (async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.salesforce.com/in/?ir=1');
  // Click the "Start Free Trial" button
  const page2Promise = page.waitForEvent('popup');
  await page.getByLabel('Start free trial: We bring').click();
  const page2 = await page2Promise;
  await page2.getByLabel('First name').click();
  await page2.getByLabel('First name').fill('QASW');
  await page2.getByLabel('Last name').click();
  await page2.getByLabel('Last name').fill('WEDS');
  await page2.getByLabel('Email').click();
  await page2.getByLabel('Email').fill('QA@FINTINC.COM');
  await page2.getByLabel('Job Title').selectOption('Sales_Manager_ANZ');
  await page2.getByLabel('Company', { exact: true }).click();
  await page2.getByLabel('Company', { exact: true }).fill('FINT');
  await page2.getByLabel('Employees').selectOption('1001');
  await page2.getByLabel('Phone').click();
  await page2.getByLabel('Phone').fill('1234567890');
  await page2.locator('.msaCheckbox > div > .field > .checkbox-ui').click();
  await page2.getByRole('button', { name: 'start my free trial' }).click();
  await context.close();
  await browser.close();
  
  })();

});

Scenario('Log out and then log back in', async () => {
  
  (async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.salesforce.com/in/?ir=1');
    await page.locator('hgf-button',{hasText:'Login'}).locator('visible=true').click();
    await page.locator("hgf-popover.hgf-popover [data-tracking-stable='salesforceLogin']").click();
    await page.locator("//input[@id='username']").fill('fintmobile-52he@force.com');
    await page.locator("//input[@id='password']").fill('Test@123');
    await page.locator("//input[@id='Login']").click();
  })();
});



Scenario('Create Account, Opportunity, and verify details', async ({ I }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Login to Salesforce
  await page.goto('https://login.salesforce.com');
  await page.fill('#username', 'your-username');
  await page.fill('#password', 'your-password');
  await page.click('#Login');
  await page.waitForLoadState('load');

  // Step 3: Navigate to Accounts section
  await page.getByText('Accounts').click();
  await page.waitForLoadState('load');
  
  // Step 4: Create a new Account
  await page.click('button[title="New"]');
  await page.fill('input[placeholder="Account Name"]', 'New Test Account');
  await page.click('button[title="Save"]');
  await page.waitForSelector('span[title="Account"]'); // Wait for the confirmation
  
  // Step 5: Confirm Account creation
  const accountName = await page.textContent('span[title="Account"]');
  console.log('Account created:', accountName);

  // Step 6: Create a new Opportunity linked to the Account
  await page.click('button[title="New Opportunity"]');
  await page.fill('input[placeholder="Opportunity Name"]', 'New Test Opportunity');
  await page.fill('input[placeholder="Close Date"]', '2024-09-30');
  await page.selectOption('select[placeholder="Stage"]', { label: 'Prospecting' });
  await page.click('button[title="Save"]');
  await page.waitForSelector('span[title="Opportunity"]'); // Wait for the confirmation

  // Step 7: Verify Opportunity creation
  const opportunityName = await page.textContent('span[title="Opportunity"]');
  console.log('Opportunity created:', opportunityName);

  // Step 8: Open the created Opportunity and upload an Excel file
  await page.click(`span[title="${opportunityName}"]`); // Navigate to Opportunity page
  await page.click('button[title="Upload Files"]');
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('button[title="Upload"]')
  ]);
  await fileChooser.setFiles('path/to/your/file.xlsx');
  await page.click('button[title="Done"]');

  // Step 9: Update Opportunity stage and create an Event & Task
  await page.selectOption('select[placeholder="Stage"]', { label: 'Completed' });
  await page.click('button[title="Save"]');
  
  // Create Event
  await page.click('button[title="New Event"]');
  await page.fill('input[placeholder="Subject"]', 'Follow-up Call');
  await page.click('button[title="Save"]');

  // Create Task
  await page.click('button[title="New Task"]');
  await page.fill('input[placeholder="Subject"]', 'Send Proposal');
  await page.click('button[title="Save"]');

  // Step 10: Ensure Activity section displays the new Events and Tasks
  const events = await page.locator('span[title="Follow-up Call"]').count();
  const tasks = await page.locator('span[title="Send Proposal"]').count();
  console.log('Events created:', events, 'Tasks created:', tasks);

  // Step 11: Create a Call by adding a new Contact
  await page.click('button[title="New Contact"]');
  await page.fill('input[placeholder="First Name"]', 'John');
  await page.fill('input[placeholder="Last Name"]', 'Doe');
  await page.fill('input[placeholder="Phone"]', '1234567890');
  await page.click('button[title="Save"]');

  // Step 12: Verify Opportunity content and status
  const status = await page.textContent('span[title="Completed"]');
  console.log('Opportunity Status:', status);

  // Step 13: Confirm the newly created Account appears under the All Accounts tab
  await page.getByText('Accounts').click();
  const allAccounts = await page.textContent('span[title="New Test Account"]');
  console.log('Account appears under All Accounts:', allAccounts !== null);

  await context.close();
  await browser.close();
});


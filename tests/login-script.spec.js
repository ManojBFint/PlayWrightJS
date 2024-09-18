const { chromium } = require('playwright'); // Correct import for Playwright

// Helper function to wait for a specified time
const waitFor = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // Set headless: true to run without a UI
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  await page.goto('https://login.salesforce.com/'); // Replace with your website URL
  
  // Optionally wait for a specific amount of time (e.g., 5 seconds)
  await waitFor(3000); // Wait for 5000 milliseconds (5 seconds)

// Fill in the username and password fields
  await page.fill('input[name="username"]', 'aruna.akurathi205-hq4l@force.com'); // Replace with your username selector and value
  await page.fill('input[name="pw"]', 'Salesforce@24'); // Replace with your password selector and value

  // Click the login button
  await page.click('input[type="submit"]'); // Replace with your submit button selector

  // Optionally wait for navigation
  await waitFor(5000);
   // Locate the image by its src attribute and click it
  await page.locator('img[src="https://platform-momentum-503.my.salesforce.com/logos/Salesforce/EasyAccounts/logo.png"]').click(); // Replace with your image src
  await waitFor(10000);
  // Wait for the div element with a specific title attribute to be available
  const divTitle = 'New'; // Replace with the actual title attribute value
  await page.waitForSelector(`div[title="${divTitle}"]`);

  // Click on the div element
  await page.click(`div[title="${divTitle}"]`);

  await waitFor(10000);
  //create and save Account   
  await page.fill('input[name="Name"]', 'test-PW');
  await page.fill('input[name="Website"]', 'test-website');
   // Click the dropdown to open it
   await page.click(`div[class="slds-combobox_container"]`); // Replace with the selector for your dropdown
   await page.click(`lightning-base-combobox-item[data-value="Analyst"]`);
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('test description');
  await page.getByPlaceholder('Search Accounts...').click();
  await page.getByRole('option', { name: 'test', exact: true }).locator('span').nth(2).click();
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('123456789');
  await page.getByLabel('Billing Street').click();
  await page.getByLabel('Billing Street').fill('address');
  await page.getByLabel('Billing City').click();
  await page.getByLabel('Billing City').fill('city');
  await page.getByLabel('Billing Zip/Postal Code').click();
  await page.getByLabel('Billing Zip/Postal Code').fill('54321');
  await page.getByLabel('Billing Country').click();
  await page.getByLabel('Billing Country').fill('Billcountry');
  await page.getByLabel('Shipping Street').click();
  await page.getByLabel('Shipping Street').fill('shippingstreet');
  await page.getByLabel('Shipping City').click();
  await page.getByLabel('Shipping City').fill('shippingcity');
  await page.getByLabel('Shipping Street').click();
  await page.getByLabel('Shipping Zip/Postal Code').click();
  await page.getByLabel('Shipping Zip/Postal Code').fill('54321');
  await page.getByLabel('Shipping State/Province').click();
  await page.getByLabel('Shipping Country').click();
  await page.getByLabel('Shipping Country').fill('shippingcountry');
  await page.click('button[name="SaveEdit"]');
  await waitFor(5000);

  await page.getByLabel('Upload FilesOr drop files').setInputFiles([]);
  await page.getByLabel('Upload FilesOr drop files').setInputFiles('testPW.txt');
  await page.getByRole('button', { name: 'Done' }).click();
  await waitFor(5000);
  //create task 
  //await page.getByRole('button', { title:'New Task' }).click();
  await page.locator('button[value="NewTask"]').click(); 
  //await page.click(`div[class="slds-icon-standard-task slds-icon_container"]`);
  await page.getByRole('combobox', { name: 'Subject' }).click();
  await page.getByRole('combobox', { name: 'Subject' }).fill('testtask');
  await page.getByRole('button', { name: 'Select a date for Due Date' }).click();
  await page.getByRole('button', { name: '13' }).click();
  await page.getByPlaceholder('Search Contacts...').click();
  await page.getByPlaceholder('Search Contacts...').click();
  await page.getByLabel('testtask').getByRole('button', { name: 'Maximize' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await waitFor(10000);
  //Create and save Opportunities
  //await page.locator('span:text("Opportunities")').click()
  //await page.locator('a:has(span:has-text("Opportunities"))').click();  // Replace "Span Text" with the actual text
  //await page.locator('lightning-button:has-text("New")').click();
  //await waitFor(10000);
  //await page.locator('.runtime_platform_actions-executor-page-reference.lightning-button.button:has-text("New Opportunity")').click();
  //await page.locator('runtime_platform_actions-action-renderer[apiname="Global.NewOpportunity"] lightning-button >> button:has-text("New Opportunity")').click();
  //await waitFor(10000);
  //await page.fill('input[name="Name"]', 'test -opportunities');
  //await page.getByRole('button', { name: 'Select a date for Close Date' }).click();
  //await page.getByRole('button', { name: '13' }).click();
  //await page.fill('input[name="Amount"]', '10000');
  //await page.fill('div[data-target-selection-name="sfdc:RecordField.Opportunity.Amount"]', '10000');
  //await page.fill('div[data-target-selection-name="sfdc:RecordField.Opportunity.NextStep"]', 'next');
  
  //await page.getByLabel('Description').click();
  //await page.getByLabel('Description').fill('test description');
  //await page.click(`div[class="slds-combobox_container"]`); // Replace with the selector for your dropdown
  //await page.click(`lightning-base-combobox-item[data-value="Qualify"]`);
  //await page.fill('input[name="NextStep"]', 'next');
  await page.getByRole('button', { name: 'New Opportunity' }).click();
  await waitFor(10000);
  await page.getByLabel('Amount').click();
  await page.getByLabel('Amount').fill('10000');
  await page.getByLabel('Next Step').click();
  await page.getByLabel('Next Step').fill('next');
  await page.getByRole('button', { name: 'Save' }).click();
  // Close the browser
  await browser.close();
})();

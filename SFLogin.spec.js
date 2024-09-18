import { test, expect } from '@playwright/test';

test('sflogin', async ({ page }) => {
  test.setTimeout(500000);
  //await page.goto('https://www.salesforce.com/in/?ir=1');
  await page.goto('https://login.salesforce.com/?locale=in');

  //**Login ***
  await page.locator("//input[@id='username']").click();
  await page.locator("//input[@id='username']").fill('sushma.vejendla-qzn4@force.com');
  await page.locator("//input[@name='pw']").click();
  await page.locator("//input[@name='pw']").fill('salesforcepassword1');
  await page.locator("//input[@id='rememberUn']").check();
  await page.locator("#Login").click();

  //****Account Creation****
  // await page.locator("//a[@title='Accounts']").waitFor();


  await page.locator("//a[@title='Accounts']").click();

  await page.locator("//a[@title='New']").click();
  await page.locator("//input[@name='Name']").waitFor();
  await page.locator("//input[@name='Name']").fill("Test Account5");

  //await page.getByRole('combobox', { name: 'Type' }).click();

  await page.locator("//button[@aria-label='Type']").click();
  await page.getByText('Analyst').click();
  await page.waitForTimeout(2000);

  await page.locator("//button[@aria-label='Industry']").click();
  await page.getByText('Retail').click();
  await page.locator("//button[@name='SaveEdit']").click();
  //await page.pause();


  // ****Opportunity creation****
  await page.locator("//a[@title='Opportunities']").waitFor({ timeout: 40000 });
  //await page.pause();
  await page.locator("//a[@title='Opportunities']").click();
  await page.locator("//span[text()='Recently Viewed']").waitFor({ timeout: 40000 })
  await page.locator("//div[@title='New']").click();

  await page.locator("//input[contains(@placeholder,'Search Accounts')]").click();
  await page.locator("(//span[@title='Test Account5'])[1]").click()

  await page.locator("//input[@name='Name']").fill('Test Opportunity5');
  await page.locator("//input[@name='CloseDate']").fill('10/09/2024');

  await page.locator("//button[@aria-label='Forecast Category']").click();
  await page.getByText('Best Case').click();

  //await page.locator("//button[@aria-label='Stage']").click();
  //await page.getByText('Proposal').click();

  await page.click('button[aria-label="Stage"]');

  await page.click('[title="Qualification"]');


  await page.waitForTimeout(2000);


  await page.locator("//button[@name='SaveEdit']").click();
  //await page.pause();


  /* Creating a call event*/
  await page.locator("//a[@title='Opportunities']").click();
  await page.locator("//a[@title='Test Opportunity5']").click();
  await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('Log a Call').click()

  //  await page.locator("//button[@title='Log a Call']").click();
  await page.locator("//textarea[@role='textbox']").fill("Creating a call event");
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();


  /* Creating a new task*/

  // await page.getByLabel('New Task').click();
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Task').click()
  await page.waitForTimeout(2000);

  await page.getByLabel('*Subject').click();
  //await page.getByText('Other', { exact: true }).click();

  //await page.getByText('Send Quote', { exact: true }).click();
  await page.locator('//span[@title="Send Quote"]//parent::span[@class="slds-media__body"]').click();


  await page.getByRole('button', { name: 'Select a date for Due Date' }).click();
  await page.getByRole('button', { name: '26' }).click();
  await page.getByText('--None--').click();
  await page.getByRole('option', { name: 'List Email' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();



  /* Creating a new event*/

  //await page.getByLabel('New Event').click();
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click()
  await page.waitForTimeout(2000);
  await page.getByLabel('*Subject').click();

  //await page.waitForLoadState('load');
  await page.waitForTimeout(2000);


  await page.waitForSelector('//span[@title="Email"]//parent::span[@class="slds-media__body"]');
  await page.locator('//span[@title="Email"]//parent::span[@class="slds-media__body"]').click();

  //await page.getByText('Meeting', { exact: true }).click();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();




  //Uploading a fie

  await page.locator('//input[@name="fileInput"]').setInputFiles("./Organisational framework on KRA's.xlsx");
  await page.getByRole('button', { name: 'Done' }).click();
  if (await page.isVisible('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]')) {
    await page.click('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]')
  }
  await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();


  await page.selectOption('//select[@class="stepAction required-field select"]', 'Closed Won')
  await page.click('//button[@class="slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton"]')
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'screenshot.png' });
  //await page.pause();  


});



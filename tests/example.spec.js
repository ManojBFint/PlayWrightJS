// @ts-check
const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

//From the Home page, navigate to the Accounts section.
test('has title', async ({ page }) => {
  test.setTimeout(5000000)
  await page.goto('https://login.salesforce.com/?locale=in');
  //await page.getByLabel('Site tools', { exact: true }).locator('span').filter({ hasText: 'Login' }).click();
  //await page.getByRole('link', { name: 'Salesforce', exact: true }).click();
  //await page.waitForSelector('#username');
  await page.getByLabel('Username').fill('saipriya.allada-kshp@force.com');
  await page.getByLabel('Password').fill('@Fint12345');
  await page.getByLabel('Remember me').check();
  await page.locator('#Login').click();
  


//Createda new Account by filling out the form and saving it.
await page.getByTitle('Accounts').click();
await page.waitForSelector('//a[@title="New"]');
await page.locator('//a[@title="New"]').click();
//await page.locator('//a[@title="New"]').click();
await page.locator('input[name="Name"]').fill('SaiPriya');
await page.locator('input[name="Phone"]>>nth=0').fill('7989971320');
await page.waitForSelector('//button[@aria-label="Type"]');
await page.locator('button[aria-label="Type"]').click();
await page.waitForSelector('span[title="Analyst"]');
await page.locator('span[title="Analyst"]').click();
await page.locator('button[aria-label="Industry"]').click();
await page.locator('[data-value="Agriculture"]').click();
await page.locator('[name="street"]>>nth=0').click();
await page.locator('[name="street"]>>nth=0').fill('22-13, LB Nagar');
await page.locator('[name="city"]>>nth=0').fill('LB');
await page.locator('[name="postalCode"]>>nth=0').fill('503502');
await page.locator('[name="province"]>>nth=0').fill('Telangana');
await page.locator('[name="country"]>>nth=0').fill('India');
await page.locator('[name="street"]>>nth=1').fill('22-13, LB nagar');
await page.locator('[name="city"]>>nth=1').fill('LB');
await page.locator('[name="postalCode"]>>nth=1').fill('503502');
await page.locator('[name="province"]>>nth=1').fill('Telangana');
await page.locator('[name="country"]>>nth=1').fill('India');
await page.locator('button[name="SaveEdit"]').click(); 
//Create da new Opportunity linked to the newly created Account.
//Verify that the Opportunity was created successfully.
await page.waitForLoadState('domcontentloaded');
await page.locator('a[title="Opportunities"]').click();
await page.waitForLoadState('load')
await page.waitForSelector('//a[@title="New"]');
await page.locator('//a[@title="New"]').click();
await page.waitForLoadState('domcontentloaded')
await page.waitForSelector('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]')
await page.locator('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]').fill('SaiPriya');
await page.keyboard.press('Enter')
await page.waitForLoadState('load');
await page.waitForSelector('//*[@title="SaiPriya"]//parent::span');
await page.locator('//*[@title="SaiPriya"]//parent::span').click();
await page.locator('input[name="Name"]').fill('Opportunity');
await page.locator('input[name="Amount"]').fill('1000');
await page.locator('input[name="Probability"]').fill('200');
await page.locator('//button[@aria-label="Forecast Category"]').click();
await page.locator('//button[@aria-label="Forecast Category"]').click();
await page.waitForSelector('[title="Best Case"]');
await page.locator('[title="Best Case"]').click();
await page.locator('input[name="CloseDate"]').fill('30/09/2024');
await page.locator('button[aria-label="Stage"]').click();
await page.locator('button[aria-label="Stage"]').click();
await page.locator('[title="Qualification"]').click();
await page.locator('button[name="SaveEdit"]').click();
await page.waitForLoadState('load');
await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();

//Create New Event
await page.waitForLoadState('load');
await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click()
await page.locator('input[class="slds-combobox__input slds-input"]').click()
await page.waitForLoadState('load')
await page.waitForSelector('(//span[@title="Email"]//parent::span/.)[2]')
await page.locator('(//span[@title="Email"]//parent::span/.)[2]').click();
await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill("Description");
await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
await page.waitForLoadState('load');
await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();

//Log a Call
await page.waitForLoadState('load');
await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('Log a Call').click()
await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill("box comment");
await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
await page.waitForLoadState('load');
await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();

//Created a New Task
await page.waitForLoadState('load');
await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Task').click()
await page.locator('input[class="slds-combobox__input slds-input"]').click();
await page.locator('(//span[@title="Send Letter"]//parent::span/.)[2]').click()
await page.locator('(//input[@class="slds-input"])[5]').fill('29/09/2024');
await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click()
await page.waitForLoadState('load');
await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();

//Uploading File Open the created Opportunity and uploaded an Excel file.
await page.waitForLoadState('load');
await page.setInputFiles('input[name="fileInput"]','./EmpNames.xlsx');
await page.waitForLoadState('domcontentloaded');
await page.locator('button[class="slds-button slds-button_neutral ok desktop uiButton--default uiButton--brand uiButton"]').click()

//close popup
await page.waitForLoadState('load');
if(await page.isVisible('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]'))
{
  await page.locator('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]').click()
}
await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
await page.locator('//select[@class="stepAction required-field select"]').selectOption('Closed Won')
await page.locator('//button[@class="slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton"]').click()
await page.waitForTimeout(5000)
});
   





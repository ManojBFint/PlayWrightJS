import { test, expect } from '@playwright/test';


const { timeout } = require('../playwright.config');

function generateRandomAcctName(length) {
  let result = '';
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charLen = char.length;
  for (let i = 0; i < length; i++) {
      result += char.charAt(Math.floor(Math.random() * charLen));
  }
  return result;
}



test('has title', async ({ page }) => {
  const RandomAcctName = generateRandomAcctName(10);
  test.setTimeout(5000000)
  await page.goto('https://www.salesforce.com/in/?ir=1',{timeout:20000});
  await page.getByLabel('Site tools', { exact: true }).locator('span').filter({ hasText: 'Login' }).click();
  await page.getByRole('link', { name: 'Salesforce', exact: true }).click();
  
  await page.getByLabel('Username').fill('chandrikarani.pesala-g0ay@force.com');
  await page.getByLabel('Password').fill('SalesForce123');
  await page.getByLabel('Remember me').check();
  await page.locator('#Login').click();
  

//Account Creation
await page.getByTitle('Accounts').click();
await page.waitForSelector('#brandBand_1 a');
await page.click('#brandBand_1 a');
await page.fill('input[name="Name"]',RandomAcctName); // change Name for every run and it should match with 54, 57 & 58 lines
await page.fill('input[name="Phone"]>>nth=0','9940032385');
await page.waitForSelector('//button[@aria-label="Type"]')
await page.click('button[aria-label="Type"]');
await page.waitForSelector('span[title="Competitor"]');
await page.click('span[title="Competitor"]');
await page.click('button[aria-label="Industry"]');
await page.click('[data-value="Banking"]');
await page.click('[name="street"]>>nth=0')
await page.fill('[name="street"]>>nth=0','310, 4th Floor, Putta Estate')
await page.fill('[name="city"]>>nth=0','Nellore')
await page.fill('[name="postalCode"]>>nth=0','524001')
await page.fill('[name="province"]>>nth=0','AndhraPradesh')
await page.fill('[name="country"]>>nth=0','India')

await page.fill('[name="street"]>>nth=1','310, 4th Floor, Putta Estate')
await page.fill('[name="city"]>>nth=1','Nellore')
await page.fill('[name="postalCode"]>>nth=1','524001')
await page.fill('[name="province"]>>nth=1','AndhraPradesh')
await page.fill('[name="country"]>>nth=1','India')
await page.click('button[name="SaveEdit"]');


  
//Opportunity Creation -- change AccountName for every run at lines# 67, 70 & 71 and it should match at line #35
await page.waitForLoadState('domcontentloaded');
await page.locator('a[title="Opportunities"]').click();
await page.waitForLoadState('load')
await page.waitForSelector('#brandBand_1 a');
await page.click('#brandBand_1 a');
await page.waitForLoadState('domcontentloaded')
await page.waitForSelector('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]')
await page.fill('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]',RandomAcctName);
await page.keyboard.press('Enter')
await page.waitForLoadState('load');
await page.waitForSelector(`//*[@title="${RandomAcctName}"]//parent::span`);
await page.click(`//*[@title="${RandomAcctName}"]//parent::span`);

await page.fill('input[name="Name"]','Opportunity');
await page.fill('input[name="Amount"]','2000');
await page.fill('input[name="Probability"]','200');
await page.click('//button[@aria-label="Forecast Category"]');
await page.click('//button[@aria-label="Forecast Category"]');
await page.waitForSelector('[title="Best Case"]');
await page.click('[title="Best Case"]');
await page.fill('input[name="CloseDate"]','30/10/2024');
await page.click('button[aria-label="Stage"]');
await page.click('button[aria-label="Stage"]');
await page.click('[title="Qualification"]');
await page.click('button[name="SaveEdit"]');


await page.waitForLoadState('load');
await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

//Create New Event
await page.waitForLoadState('load');
await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click()

await page.click('input[class="slds-combobox__input slds-input"]')
await page.waitForLoadState('load')
await page.waitForSelector('(//span[@title="Email"]//parent::span/.)[2]')
await page.click('(//span[@title="Email"]//parent::span/.)[2]')
await page.fill('//textarea[@aria-describedby="quickTextKeyboardTip"]',"Description");
await page.click('//div[@class="bottomBarRight slds-col--bump-left"]//button')
await page.waitForLoadState('load');
await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

//Log a Call
await page.waitForLoadState('load');

await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('Log a Call').click()
await page.fill('//textarea[@aria-describedby="quickTextKeyboardTip"]',"box comment");
await page.click('//div[@class="bottomBarRight slds-col--bump-left"]//button')
await page.waitForLoadState('load');
await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

//Create New Task
await page.waitForLoadState('load');

await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Task').click()
await page.click('input[class="slds-combobox__input slds-input"]')
await page.click('(//span[@title="Send Letter"]//parent::span/.)[2]')
await page.fill('(//input[@class="slds-input"])[5]','29/09/2024')
await page.click('//div[@class="bottomBarRight slds-col--bump-left"]//button')
await page.waitForLoadState('load');
await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

//Uploading File
await page.waitForLoadState('load');
await page.setInputFiles('input[name="fileInput"]','./TestfileForSalesForce.rtf');
await page.waitForLoadState('domcontentloaded');
await page.click('button[class="slds-button slds-button_neutral ok desktop uiButton--default uiButton--brand uiButton"]')

//close popup
await page.waitForLoadState('load');
if(await page.isVisible('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]'))
{
  await page.click('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]')
}
await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');


await page.selectOption('//select[@class="stepAction required-field select"]','Closed Won')
await page.click('//button[@class="slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton"]')
await page.waitForTimeout(5000)
});
   





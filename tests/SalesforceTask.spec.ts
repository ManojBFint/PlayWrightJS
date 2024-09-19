import { test, expect } from '@playwright/test';
import { Env } from '../utils/config';


test('Account and Opportunity creation', async ({ page }) => {
  test.setTimeout(5000000)
 console.log(process.env.USER_NAME)
 console.log(process.env.PASSWORD)
  await page.goto('/');
  await page.fill('#username', Env.username);
  await page.fill('#password', Env.password);
  await page.check('#rememberUn');
  await page.click('#Login');

  //Account Creation
  await page.getByTitle('Accounts').click();
  await page.waitForSelector('#brandBand_1 a');
  await page.click('#brandBand_1 a');
  await page.fill('input[name="Name"]', 'Testing');
  await page.fill('input[name="Phone"]>>nth=0', '9876543210');
  await page.waitForSelector('//button[@aria-label="Type"]')
  await page.click('button[aria-label="Type"]');
  await page.waitForSelector('span[title="Analyst"]');
  await page.click('span[title="Analyst"]');
  await page.click('button[aria-label="Industry"]');
  await page.click('[data-value="Agriculture"]');
  await page.click('[name="street"]>>nth=0')
  await page.fill('[name="street"]>>nth=0', '2-456/98, GN Road')
  await page.fill('[name="city"]>>nth=0', 'KNR')
  await page.fill('[name="postalCode"]>>nth=0', '6878659')
  await page.fill('[name="province"]>>nth=0', 'Telangana')
  await page.fill('[name="country"]>>nth=0', 'India')
  await page.fill('[name="street"]>>nth=1', '2-456/98, GN Road')
  await page.fill('[name="city"]>>nth=1', 'KNR')
  await page.fill('[name="postalCode"]>>nth=1', '6878659')
  await page.fill('[name="province"]>>nth=1', 'Telangana')
  await page.fill('[name="country"]>>nth=1', 'India')
  await page.click('button[name="SaveEdit"]');


  //Opportunity Creation
  await page.waitForLoadState('domcontentloaded');
  await page.locator('a[title="Opportunities"]').click();
  await page.waitForLoadState('load')
  await page.waitForSelector('#brandBand_1 a');
  await page.click('#brandBand_1 a');
  await page.waitForLoadState('domcontentloaded')
  await page.waitForSelector('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]')
  await page.fill('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]', 'Testing');
  await page.keyboard.press('Enter')
  await page.waitForLoadState('load');
  await page.waitForSelector('//*[@title="Testing"]//parent::span');
  await page.click('//*[@title="Testing"]//parent::span');
  await page.fill('input[name="Name"]', 'Opportunity Name');
  await page.fill('input[name="Amount"]', '5000');
  await page.fill('input[name="Probability"]', '100');
  await page.click('//button[@aria-label="Forecast Category"]');
  await page.click('//button[@aria-label="Forecast Category"]');
  await page.waitForSelector('[title="Best Case"]');
  await page.click('[title="Best Case"]');
  await page.fill('input[name="CloseDate"]', '30/09/2024');
  await page.click('button[aria-label="Stage"]');
  await page.click('button[aria-label="Stage"]');
  await page.click('[title="Qualification"]');
  await page.click('button[name="SaveEdit"]');

  // click MarkasComplete
  await page.waitForLoadState('load');
  await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

  //Create New Event
  await page.waitForLoadState('load');
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click()
  await page.click('input[class="slds-combobox__input slds-input"]')
  await page.waitForLoadState('load')
  await page.waitForSelector('//span[@title="Email"]//parent::span[@class="slds-media__body"]')
  await page.click('//span[@title="Email"]//parent::span[@class="slds-media__body"]')
  await page.fill('//textarea[@aria-describedby="quickTextKeyboardTip"]', "Description");
  await page.click('//div[@class="bottomBarRight slds-col--bump-left"]//button')
  await page.waitForLoadState('load');
  await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

  //Log a Call
  await page.waitForLoadState('load');
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('Log a Call').click()
  await page.fill('//textarea[@aria-describedby="quickTextKeyboardTip"]', "Comments");
  await page.click('//div[@class="bottomBarRight slds-col--bump-left"]//button')
  await page.waitForLoadState('load');
  await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

  //Create New Task
  await page.waitForLoadState('load');
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Task').click()
  await page.click('input[class="slds-combobox__input slds-input"]')
  await page.click('//span[@title="Send Letter"]//parent::span[@class="slds-media__body"]')
  await page.fill('(//input[@class="slds-input"])[5]', '28/09/2024')
  await page.click('//div[@class="bottomBarRight slds-col--bump-left"]//button')
  await page.waitForLoadState('load');
  await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');

  //Uploading File
  await page.waitForLoadState('load');
  await page.setInputFiles('input[name="fileInput"]', './SleniumWebdriver.pdf')
  await page.waitForLoadState('domcontentloaded');
  await page.click('button[class="slds-button slds-button_neutral ok desktop uiButton--default uiButton--brand uiButton"]')

  //Intermitent popup Close
  await page.waitForLoadState('load');
  if (await page.isVisible('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]')) {
    await page.click('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]')
  }
  await page.click('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]');


  await page.selectOption('//select[@class="stepAction required-field select"]', 'Closed Won')
  await page.click('//button[@class="slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton"]')
  await page.waitForSelector('a[title="Closed Won"]');
  await page.screenshot({ path: 'FinalResultscreenshot.png' });
});
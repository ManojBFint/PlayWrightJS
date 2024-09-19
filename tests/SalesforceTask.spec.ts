import { test, expect } from '@playwright/test';

test('Account Creation and Oppurtunity Creation', async ({ page }) => {
  await page.goto('https://agility-dream-8693.my.salesforce.com/');
  await page.fill('#username','dixith.thirukkovalluru-kjln@force.com');
  await page.fill('#password','SairamJuly@2024');
  await page.check('#rememberUn');
  await page.click('#Login');

  await page.getByTitle('Accounts').click();
  await page.waitForSelector('#brandBand_1 a');
  await page.click('#brandBand_1 a');
  await page.fill('input[name="Name"]','Dummy Test');
  await page.fill('input[name="Phone"]>>nth=0','9882311253');
  await page.click('button[aria-label="Type"]');
  await page.click('[data-value="Customer"]');
  await page.click('button[aria-label="Industry"]');
  await page.click('[data-value="Banking"]');
  await page.click('[name="street"]>>nth=0')
  await page.fill('[name="street"]>>nth=0','Plot no 36, Road no 6')
  await page.fill('[name="city"]>>nth=0','HYD')
  await page.fill('[name="postalCode"]>>nth=0','500089')
  await page.fill('[name="province"]>>nth=0','Telangana')
  await page.fill('[name="country"]>>nth=0','India')

  await page.fill('[name="street"]>>nth=1','Near purnodaya school')
  await page.fill('[name="city"]>>nth=1','vpuram')
  await page.fill('[name="postalCode"]>>nth=1','564532')
  await page.fill('[name="province"]>>nth=1','Telangana')
  await page.fill('[name="country"]>>nth=1','India')
  await page.click('button[name="SaveEdit"]');

});

test('Oppurtunity Creation', async ({ page }) => {
  await page.goto('https://agility-dream-8693.my.salesforce.com/');
  await page.fill('#username','dixith.thirukkovalluru-kjln@force.com');
  await page.fill('#password','SairamJuly@2024');
  await page.check('#rememberUn');
  await page.click('#Login');

  //await page.click('[data-key="close"]');

   await page.getByTitle('Opportunities').click();
  await page.waitForSelector('#brandBand_1 a');
  await page.click('#brandBand_1 a');
  await page.waitForTimeout(5000);
  //await page.locator(//input[contains(@class,'slds-combobox') and contains(@class,'input') and @type='text' and @id='combobox-input-1050']);
  //const aaa= input[contains(@class,'slds-combobox') and contains(@class,'input') and @type='text' and @id='combobox-input-1050']
  await page.fill('input[placeholder="Search Accounts..."]','Dummy Test');
  await page.keyboard.press('Enter')
  await page.waitForTimeout(5000);
  await page.waitForSelector('//*[@title="Dummy Test"]//parent::span');
  await page.click('//*[@title="Dummy Test"]//parent::span');

  await page.fill('input[name="Name"]','Dixith Oppurtunity');
  await page.fill('input[name="Amount"]','5000');
  await page.fill('input[name="Probability"]','100');
  await page.click('button[aria-label="Forecast Category"]');
  await page.waitForSelector('[data-value="Best Case"]');
  await page.click('[data-value="Best Case"]');
  await page.fill('input[name="CloseDate"]','30/09/2024');
  await page.click('button[aria-label="Stage"]');
  await page.click('[data-value="Qualification"]');
  await page.click('button[name="SaveEdit"]');
  

});
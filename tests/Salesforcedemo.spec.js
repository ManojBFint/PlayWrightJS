import { test, expect } from '@playwright/test';
import { Module } from 'module';

test('Account and Opportunity creation', async ({ page }) => {
  test.setTimeout(5000000)
  await page.goto('https://login.salesforce.com/?locale=in');
  await page.locator('#username').fill('amolkumar.kumashi-8wzh@force.com');
  await page.locator('#password').fill('Mysalesforce@234');
  await page.locator('#rememberUn').check();
  await page.locator('#Login').click();
  //await page.pause()

  // Accounts Create Module 

  await page.locator('//a[@title="Accounts"]').click();
  await page.locator('//a[@title="New"]').click();
  await page.locator('//input[@name="Name"]').fill('Salesforce Account');
  await page.locator('//button[@aria-label="Type"]').click();
  await page.locator('//span[@title="Analyst"]').click();
  await page.locator('(//input[@name="Phone"])[1]').fill('8297044756');
  await page.locator('//button[@name="SaveEdit"]').click();
  
  //Opportunities Module
  
  await page.locator('//a[@title="Opportunities"]').click();
  await page.locator('//a[@title="New"]').click();
  //await page.locator('//input[@aria-autocomplete="list"][1]').click();
  //await page.locator('//input[@name="Name"]').fill('Salesforce Account');
  await page.waitForLoadState('domcontentloaded')
  await page.click('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]')
  await page.fill('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]', 'Salesforce Account');
  await page.waitForTimeout(5000);
  await page.waitForLoadState('load');
  //await page.locator('//input[@name="Name"]').fill('Salesforce Account');
  await page.waitForSelector('//*[@title="Salesforce Account"]//parent::span');
  await page.locator('//*[@title="Salesforce Account"]//parent::span').first().click();
  await page.locator('//input[@name="Name"]').fill('Salesforce Account');
  await page.locator('//input[@name="CloseDate"]').fill('18/09/2024');
  //await page.click('//*[@title="Salesforce Account"]//parent::span');
  await page.locator('//button[@aria-label="Stage"]').click();
  await page.locator('//button[@aria-label="Stage"]').click();
  await page.locator('//span[@title="Proposal"]').click();
  await page.locator('//button[@aria-label="Forecast Category"]').click();
  //await page.locator('//button[@aria-label="Forecast Category"]').click();
  await page.locator('//span[@title="Best Case"]').click();
  await page.locator('//button[@name="SaveEdit"]').click();

  // Events Module 

  await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click();
  await page.locator('//input[@class="slds-combobox__input slds-input"]').click();
  await page.locator('//span[@title="Meeting"]//parent::span[@class="slds-media__body"]').click();
  await page.locator('button[class="slds-button slds-button--brand cuf-publisherShareButton uiButton"]').click()
 

  // Log the file
  //await page.waitForLoadState('load');
  /* await page.setInputFiles('input[name="fileInput"]','./SleniumWebdriver.pdf') */
   //await page.waitForLoadState('domcontentloaded');
   //await page.locator('button[class="slds-button slds-button_neutral ok desktop uiButton--default uiButton--brand uiButton"]').click();
  });
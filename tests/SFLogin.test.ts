//--------Salesforce Login

import test, { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import path from "path";

// const {test, expect2} = require ('@playwright/test');
test('has title', async({page}) => {

    await page.goto('https://inspiration-ruby-5634.my.salesforce.com/');

  await page.locator('[id=username]').fill('garikipati.vineetha-akqp@force.com');
  await page.locator('[id=password]').fill('Vineetha@123');
  await page.locator('[name=Login]').click();

 
  //----Account creation
  await page.locator('[title=Accounts]').click();
  await page.locator('[title="New"][class="forceActionLink"]').click();
  await page.locator('[name="Name"]').fill('Test4');
  //await page.locator("//input[@class='slds-combobox__input slds-input slds-combobox__input-value'and and @placeholder='Test1']");
  await page.locator("//button[@aria-label='Type']").click();
  await page.locator("//lightning-base-combobox-item[@data-value='Investor']").click({delay:2000});
  //await page.locator('[name="Phone"]').nth(4).fill('1234567'); //gone to website
  await page.locator("//button[@aria-label='Industry']").click();
  await page.locator("//lightning-base-combobox-item[@data-value='Technology']").click({delay:2000});
  //await page.locator('[class="slds-input"]').nth(8).fill('www.saleforce.com'); //unable to identify
  //await page.locator('[class="slds-textarea"]').nth(1).fill('Test Description'); //gone to Billing street
              
                    //--Billing Address
 await page.locator('[name=SaveEdit]').click();


//-----Create oppotunities

//await page.locator("//input[@class='slds-combobox__input slds-input']").first.click({delay:2000});
await page.locator('[title="Opportunities"]').click();
await page.locator('[title="New"][class="forceActionLink"]').click();
await page.locator("//label[text()='Account Name']/following-sibling::div//input").click({delay:2000});
await page.locator("//div[@role='listbox']/ul/li//span[text()='Test1']").click();


await page.locator('[name="Name"]').fill('Test Opportunity');
await page.fill('input[name="CloseDate"]',"08/08/2025");
await page.locator("//button[@aria-label='Stage']").click();
await page.locator("//lightning-base-combobox-item[@data-value='Proposal']").click({delay:10000});
await page.locator('[name="Probability"]').fill('3');

//await page.pause();

await page.locator("//button[@aria-label='Forecast Category']").click();
await page.locator("//lightning-base-combobox-item[@data-value='Omitted']").click({delay:10000});
await page.locator('[name=SaveEdit]').click();



});
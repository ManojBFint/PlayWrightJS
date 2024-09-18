import test, { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import path from "path";

test('Login to Salesforce',async({page}) => {  
  const accountName = faker.person.lastName();
  const date = '27/10/2024';
  const oppName = faker.person.middleName();
  const markStageAsCompleteLoc = "//span[text()='Mark Stage as Complete']//ancestor::button[@class='slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton']"
  const activitiesSaveBtnLoc = "//button[@class='slds-button slds-button--brand cuf-publisherShareButton uiButton']";

  await page.goto('https://www.salesforce.com/in/?ir=1',{waitUntil:"load"});
  await page.getByLabel('Site tools',{exact:true}).locator('span').filter({ hasText: 'Login'}).click();
  await page.getByRole('link', { name: 'Salesforce',exact: true}).click({delay:750});
  await page.waitForLoadState("load");
  await page.locator("//input[@id='username']").fill('5aps.qae-yjgu@force.com');
  await page.locator("//input[@id='password']").fill('@Andrews26');
  await page.locator("//input[@id='Login']").click();
  await page.waitForLoadState("load");
  await page.locator("//a[@class='slds-text-align_center appItem selected']").waitFor({state: "visible"});
  await page.locator("//a[@class='slds-text-align_center appItem selected']").click();
  await page.getByTitle('New').first().waitFor({state:"visible"});
  await page.getByTitle('New').first().click({delay:2000});

  //--Creating Account--
  await page.waitForLoadState("load");
  await page.locator("//input[@name='Name']").waitFor({state: "visible", timeout: 8000});
  await page.locator("//input[@name='Name']").fill(accountName);
  console.log("Account name: ",accountName);
  await page.locator("//input[@name='Website']").fill(faker.internet.domainName());
  await page.locator("//button[@aria-label='Type']").click({delay:500});
  await page.locator("//lightning-base-combobox-item[@data-value='Analyst']").click({delay:1000});
  await page.locator("//input[@name='Phone']").first().fill(faker.string.numeric({length:10}));
  await page.getByLabel('Description').fill(faker.word.sample());
  //--billing address--
  const billingAddressParent = "//legend[text()='Billing Address']//parent::fieldset//child::"; 
  await page.locator(billingAddressParent+"input[@name='city']").fill(faker.location.city());
  await page.locator(billingAddressParent+"textarea[@name='street']").fill(faker.location.street());
  await page.locator(billingAddressParent+"input[@name='postalCode']").fill(faker.location.zipCode());
  await page.locator(billingAddressParent+"input[@name='province']").fill(faker.location.state({abbreviated:true}));
  await page.locator(billingAddressParent+"input[@name='country']").fill(faker.location.country());
  //--shipping address--
  const shippingAddressParent = "//legend[text()='Shipping Address']//parent::fieldset//child::"; 
  await page.locator(shippingAddressParent+"input[@name='city']").fill(faker.location.city());
  await page.locator(shippingAddressParent+"textarea[@name='street']").fill(faker.location.street());
  await page.locator(shippingAddressParent+"input[@name='postalCode']").fill(faker.location.zipCode());
  await page.locator(shippingAddressParent+"input[@name='province']").fill(faker.location.state({abbreviated:true}));
  await page.locator(shippingAddressParent+"input[@name='country']").fill(faker.location.country());
  await page.locator("//button[@name='SaveEdit']").click();
  //--New Opportunity--
  await page.getByText('New Opportunity').waitFor({state: "visible", timeout: 10000});
  await page.getByText('New Opportunity').click();
  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await page.locator("//span[text()='Opportunity Name']//ancestor::label//following-sibling::input").clear({timeout: 3000});
  await page.locator("//span[text()='Opportunity Name']//ancestor::label//following-sibling::input").fill(oppName);
  await page.locator("//span[text()='Close Date']//ancestor::label//following-sibling::div//input").fill(date);
  await page.locator("//span[text()='Amount']//ancestor::label//following-sibling::input").fill(faker.finance.amount());
  await page.locator("//span[text()='Next Step']//ancestor::label//following-sibling::input").fill(faker.commerce.department());
  await page.locator("//span[text()='Save']//ancestor::button").nth(2).click();
  await page.getByLabel('Opportunities').getByRole('link', { name: oppName }).click();

  //--Upload Excel file--
  await page.locator("//input[@name='fileInput']").last().setInputFiles(path.join(__dirname,"testFiles\\salesForce.xlsx"));
  await page.locator("//button[@aria-live='off']//child::span[text()='Done']").click();
  await page.locator(markStageAsCompleteLoc).click();
  await expect(page.getByText('Meet with the key stakeholders, present solutions, and quantify return on investment.')).toBeVisible({timeout:1000});
  //--New Event--
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'New EventNew TaskEditShow' }).getByLabel('New Event').click();
  await page.getByRole('combobox', { name: 'Subject' }).fill('Email');
  await page.getByLabel('Description').fill(faker.word.sample());
  await page.locator(activitiesSaveBtnLoc).click();
  await page.locator(markStageAsCompleteLoc).click();
  await expect(page.getByText('Make the offer.')).toBeVisible({timeout:1000});
  //--New Task--
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'New EventNew TaskEditShow' }).getByLabel('New Task').click();
  await page.waitForTimeout(1000);
  await page.locator("//input[@class='slds-combobox__input slds-input']").fill('Send Quote',{timeout:1000});
  await page.locator("//lightning-datepicker//child::input[@class='slds-input']").fill(date);
  await page.locator(activitiesSaveBtnLoc).click();
  await page.locator(markStageAsCompleteLoc).click();
  await expect(page.getByText('Negotiate value and resolve objections.')).toBeVisible({timeout:1000});
  //--Log a Call-- 
  await page.locator('one-record-home-flexipage2').filter({ hasText: 'New EventNew TaskEditShow' }).getByLabel('Log a Call').click();
  await page.getByLabel('Comments').fill('Negotiation Discussion');
  await page.locator(activitiesSaveBtnLoc).click();
  await page.locator(markStageAsCompleteLoc).click();
  //--closing the Account--
  await page.locator("//select[@class='stepAction required-field select']").selectOption('Closed Won');
  await page.locator("//button[@class='slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton']").click();
  await expect(page.getByText('Congratulations on the win!')).toBeVisible({timeout:1000});

})


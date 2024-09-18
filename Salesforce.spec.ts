import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://www.salesforce.com/');

   // clicking Login
  await page.getByLabel('Site tools', { exact: true }).locator('span').filter({ hasText: 'Login' }).click();
  await page.getByRole('link', { name: 'Salesforce', exact: true }).click();
  
  // Entering login details 
  await page.locator('//input[@id="username"]').fill('katipally9-9wlm@force.com');
  await page.locator('//input[@id="password"]').fill('Reddy@2005');
  await page.locator('//input[@id="rememberUn"]').check();
  await page.locator('//input[@name="Login"]').click();
 
    // creating account
  await page.locator('//div[@title="New"]').click();
  await page.locator('(//input["@name=Name"])[10]').fill('Test Account');
  await page.locator('//button[@aria-label="Type"]').click();
  await page.locator('//span[@title="Analyst"]').click();
  
  await page.locator('//input[@name="Phone"]').fill('9676362891');
  await page.locator('(//textarea[@name="street"])[1]').fill('DD colony');
  await page.locator('(//input[@name="city"])[1]').fill('Hyderabad');
  await page.locator('(//input[@name="postalCode"])[1]').fill('500013');
  await page.locator('(//input[@name="province"])[1]').fill('Telangana');
  await page.locator('(//input[@name="country"])[1]').fill('India');

  await page.locator('(//textarea[@name="street"])[2]').fill('DD colony');
  await page.locator('(//input[@name="city"])[2]').fill('Hyderabad');
  await page.locator('(//input[@name="postalCode"])[2]').fill('500013');
  await page.locator('(//input[@name="province"])[2]').fill('Telangana');
  await page.locator('(//input[@name="country"])[2]').fill('India');
  await page.locator('//button[@name="SaveEdit"]').click(); 
  
  // Create New Opportunity
  await page.locator('//a[@title="Test Account"]').click();
  await page.locator('//button[@name="Global.NewOpportunity"]').click();

  //await page.locator('//span[text()="Opportunity Name"]//parent::label//parent::div//input').fill('Test Opportunity');
  //await page.locator('//span[text()="Amount"]//parent::label//parent::div//input').fill('5000');
  await page.locator('(//input[@type="text"])[1]').fill('Test Opportunity');
  await page.locator('(//input[@type="text"])[4]').fill('5000');
  await page.locator('(//span[text()="Save"])[3]').click();
  
  await page.locator('//article[@aria-label="Test Opportunity"]//a').click();
    //await page.getByRole('link', { name: 'Test Opportunity' }).click();
  
  //upload file
  await page.locator('//input[@name="fileInput"]').setInputFiles('./contacts_new.xlsx');
  await page.locator('//span[text()="Done"]').click();

  //Move Opportunity from Stage to Complete 
  await page.locator('//span[text()="Mark Stage as Complete"]').click();

  // Create Event
   await page.locator('//button[text()="New Event"]').click();
   await page.locator('//label[text()="Subject"]//following::input[1]').click();
   await page.locator('//span[@title="Call"]').click();

   await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill('Meeting');
   await page.locator('(//input[@part="input"])[5]').fill('20-Sept-2024');
   await page.locator('(//input[@part="input"])[6]').fill('5:00 pm');
   await page.locator('(//input[@part="input"])[7]').fill('20-Sept-2024');
   await page.locator('(//input[@part="input"])[8]').fill('6:00 pm');

   await page.locator('//input[@title="Search Contacts"]').click();
   await page.locator('//span[@title="New Contact"]').click();
   await page.locator('//a[@role="combobox"]').click();
   await page.locator('//a[@title="Mr."]').click();

  await page.locator('//input[@placeholder="Last Name"]').fill('Reddy');
  await page.locator('//input[@title="Search Accounts"]').click();
  await page.locator('//div[@title="Test Account"]').click();
  await page.locator('(//button[@title="Save"])[2]').click();

  await page.locator('(//span[text()="Save"])[3]').click();

  //Move Opportunity from Stage to Complete 
  await page.locator('//span[text()="Mark Stage as Complete"]').click();

  // New Task creation
  await page.locator('//button[text()="New Task"]').click();
  await page.locator('//label[text()="Subject"]//following::input[1]').click();
  await page.locator('(//span[@title="Call"])[3]').click();
  await page.locator('(//input[@part="input"])[4]').fill('20-Sept-2024');

  await page.locator('//input[@title="Search Contacts"]').click();
  await page.locator('//span[text()="Reddy"]').click();
  await page.locator('(//span[text()="Save"])[3]').click();

  await page.locator('//span[text()="Mark Stage as Complete"]').click();

  //Create a call
  await page.locator('(//button[@title="Log a Call"])[2]').click();
  //await page.locator('(//button[@aria-label="Log a Call"])[2]').click();
  await page.locator('//textarea[@role="textbox"]').fill('Logging call');
  await page.locator('(//span[text()="Save"])[3]').click();

  await page.locator('//span[text()="Mark Stage as Complete"]').click();
  
 //Closing
  //await page.locator('//select[@class="stepAction required-field select"]').click();
  //await page.locator('//option[@label="Closed Won"]').click();

  const element = page.locator('//select[@class="stepAction required-field select"]');
  await element.selectOption({label: 'Closed Won'});
  await page.locator('//button[@title="Save"]').click();

  // Again uploade file
  await page.locator('(//span[@part="button"])[2]').setInputFiles('./contacts_new.xlsx');
  await page.locator('//span[text()="Done"]').click();

  await page.pause();
  });
const { test, expect2 } = require('@playwright/test');

test('Account and Opportunity creation', async ({ page }) => {
    test.setTimeout(5000000)
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('#username').fill('radha.kuchibhotla-gcqe@force.com');
    await page.locator('#password').fill('Radhi@1901');
    await page.locator('#rememberUn').check();
    await page.locator('#Login').click();
   
    //Account Creation
    await page.getByTitle('Accounts').click();
    await page.waitForSelector('#brandBand_1 a');
    await page.locator('//*[@id="brandBand_1"]//a[@title="New"]').click();
    await page.locator('input[name="Name"]').fill('Testing');
    await page.locator('input[name="Phone"]>>nth=0').fill('9490925529');
    await page.waitForSelector('//button[@aria-label="Type"]')
    await page.locator('button[aria-label="Type"]').click();
    await page.waitForSelector('span[title="Analyst"]');
    await page.locator('span[title="Analyst"]').click();
    await page.locator('button[aria-label="Industry"]').click();
    await page.locator('[data-value="Agriculture"]').click();
    await page.locator('[name="street"]>>nth=0').click();
    await page.locator('[name="street"]>>nth=0').fill('23-7-7, PJR stadium Road');
    await page.locator('[name="city"]>>nth=0').fill('Hyderabad');
    await page.locator('[name="postalCode"]>>nth=0').fill('500050')
    await page.locator('[name="province"]>>nth=0').fill('Telangana')
    await page.locator('[name="country"]>>nth=0').fill('India')
   
    await page.locator('[name="street"]>>nth=1').fill('2-456/98 PJR Stadium Road')
    await page.locator('[name="city"]>>nth=1').fill('Hyderabad')
    await page.locator('[name="postalCode"]>>nth=1').fill('500050')
    await page.locator('[name="province"]>>nth=1').fill('Telangana')
    await page.locator('[name="country"]>>nth=1').fill('India')
    await page.locator('button[name="SaveEdit"]').click();
   

    //Opportunity Creation
    await page.waitForLoadState('domcontentloaded');
    await page.locator('a[title="Opportunities"]').click();
    await page.waitForLoadState('load')
    await page.waitForSelector('//*[@id="brandBand_1"]//a[@title="New"]');
    await page.locator('//*[@id="brandBand_1"]//a[@title="New"]').click();
    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]')
    await page.locator('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]').fill('Testing');
    await page.keyboard.press('Enter')
    await page.waitForLoadState('load');
    await page.waitForSelector('//*[@title="Testing"]//parent::span');
    await page.locator('//*[@title="Testing"]//parent::span').click();
   
    await page.locator('input[name="Name"]').fill('Name of the Oppurtunity');
    await page.locator('input[name="Amount"]').fill('5000');
    await page.locator('input[name="Probability"]').fill('100');
    await page.locator('//button[@aria-label="Forecast Category"]').click();
    await page.locator('//button[@aria-label="Forecast Category"]').click();
    await page.waitForSelector('[title="Best Case"]');
    await page.locator('[title="Best Case"]').click();
    await page.locator('input[name="CloseDate"]').fill('23/09/2024');
    await page.waitForSelector('button[aria-label="Stage"]');
    await page.locator('button[aria-label="Stage"]').click();
    await page.locator('button[aria-label="Stage"]').click();
    await page.locator('[title="Qualification"]').click();
    await page.locator('button[name="SaveEdit"]').click();
   
    // await page.click('//th[@class="slds-cell-edit cellContainer"]//a')
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   
    //Create New Event
    await page.waitForLoadState('load');
    await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click()
    //await page.waitForSelector('//div[contains(@id,"mainContainer")]//button[@aria-label="New Event"]')
    await page.locator('input[class="slds-combobox__input slds-input"]').click();
    await page.waitForLoadState('load')
    await page.waitForSelector('(//span[@title="Email"]//parent::span/.)[2]')
    await page.locator('(//span[@title="Email"]//parent::span/.)[2]').click();
    await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill("Description");
    await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   
    //Log a Call
    await page.waitForLoadState('load');
    //await page.click('//div[contains(@id,"mainContainer")]//button[@aria-label="Log a Call"]')
    await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('Log a Call').click()
    await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill("Comments");
    await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   
    //Create New Task
    await page.waitForLoadState('load');
    //await page.click('//div[contains(@id,"mainContainer")]//button[@aria-label="New Task"]')
    await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Task').click()
    await page.locator('input[class="slds-combobox__input slds-input"]').click();
    await page.locator('(//span[@title="Send Letter"]//parent::span/.)[2]').click();
    await page.locator('(//input[@class="slds-input"])[5]').fill('28/09/2024')
    await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   
    //Uploading File
    await page.waitForLoadState('load');
    await page.setInputFiles('input[name="fileInput"]','./FSI-2023-DOWNLOAD.xlsx')
    await page.waitForLoadState('domcontentloaded');
    await page.locator('button[class="slds-button slds-button_neutral ok desktop uiButton--default uiButton--brand uiButton"]').click();
   
    await page.waitForLoadState('load');
    if(await page.isVisible('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]'))
    {
      await page.locator('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]').click();
    }
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   
   
    await page.locator('//select[@class="stepAction required-field select"]').selectOption('Closed Won')
    await page.locator('//button[@class="slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton"]').click();
    await page.waitForTimeout(5000)
  });
  

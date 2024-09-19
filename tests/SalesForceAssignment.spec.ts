import { test, expect } from '@playwright/test';

// Creating a new account
test('New account and New oppurtunity creation', async ({ page }) => {
    test.setTimeout(5000000);
    await page.goto('https://agility-dream-8693.my.salesforce.com/');
    await page.locator('#username').fill('dixith.thirukkovalluru-kjln@force.com');
    await page.locator('#password').fill('SairamJuly@2024');
    await page.locator('#rememberUn').check();
    await page.locator('#Login').click();
   

    await page.getByTitle('Accounts').click();
    await page.waitForSelector('#brandBand_1 a');
    await page.click('#brandBand_1 a');
    //div[@id="brandBand_1"]//a[@title="New"]
   // await page.waitForSelector('#brandBand_1 a>>nth=0');
   //await page.waitForTimeout(3000);
   // await page.waitForSelector('//a[@title="New"]');
    //await page.locator('//a[@title="New"]').click;
   // await page.locator('//a[@title="New"]').click;
    await page.locator('input[name="Name"]').fill('OneAccountDixith');


    await page.locator('input[name="Phone"]>>nth=0').fill('5656565656');
    await page.waitForSelector('//button[@aria-label="Type"]');
    await page.locator('button[aria-label="Type"]').click();
    await page.waitForSelector('span[title="Analyst"]');
    await page.locator('span[title="Analyst"]').click();
    await page.locator('button[aria-label="Industry"]').click();
    await page.locator('[data-value="Agriculture"]').click;
    await page.locator('[name="street"]>>nth=0').click();
    await page.locator('[name="street"]>>nth=0').fill('Plot no 116, Gandhi Nagar');
    await page.locator('[name="city"]>>nth=0').fill('Vanastalipuram')
    await page.locator('[name="postalCode"]>>nth=0').fill('599908');
    await page.locator('[name="province"]>>nth=0').fill('Telangana');
    await page.locator('[name="country"]>>nth=0').fill('India');
   
    await page.locator('[name="street"]>>nth=1').fill('Plot no 116, Gandhi Nagar');
    await page.locator('[name="city"]>>nth=1').fill('Vanastalipuram');
    await page.locator('[name="postalCode"]>>nth=1').fill('599908');
    await page.locator('[name="province"]>>nth=1').fill('Telangana');
    await page.locator('[name="country"]>>nth=1').fill('India');
    await page.locator('button[name="SaveEdit"]').click();
/*   });
 /*    test('Oppurtunity creation', async ({ page }) => { */
   
   
    //Creating a new Opportunity 
   

    await page.waitForLoadState('domcontentloaded');
    await page.locator('a[title="Opportunities"]').click();
    await page.waitForLoadState('load')

    await page.waitForSelector('#brandBand_1 a');
    await page.click('#brandBand_1 a');

   // await page.waitForSelector('#brandBand_1 a>>nth=0');
   // await page.locator('#brandBand_1 a>>nth=0').click();
    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]')
    await page.locator('//div[contains(@class,"slds-combobox_container")]//input[@placeholder="Search Accounts..."]').fill('OneAccountDixith');
    await page.keyboard.press('Enter')
    await page.waitForLoadState('load');
    await page.waitForSelector('//*[@title="OneAccountDixith"]//parent::span');
    await page.locator('//*[@title="OneAccountDixith"]//parent::span').click();
   
    await page.locator('input[name="Name"]').fill('Dixith Oppurtunity');
    await page.locator('input[name="Amount"]').fill('5000');
    await page.locator('input[name="Probability"]').fill('100');
    await page.locator('//button[@aria-label="Forecast Category"]').click();
    await page.locator('//button[@aria-label="Forecast Category"]').click();
    await page.waitForSelector('[title="Best Case"]');
    await page.locator('[title="Best Case"]').click;
    await page.locator('input[name="CloseDate"]').fill('30/09/2024');
    await page.locator('button[aria-label="Stage"]').click();
    await page.locator('button[aria-label="Stage"]').click();
    await page.locator('[title="Qualification"]').click();
    await page.locator('button[name="SaveEdit"]').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
 /*    });

   /*  test('Event creation', async ({ page }) => { */
    //Create New Event

    


    await page.waitForLoadState('load');
    await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Event').click();
    await page.locator('input[class="slds-combobox__input slds-input"]').click();
    await page.waitForLoadState('load')
    await page.waitForSelector('(//span[@title="Email"]//parent::span/.)[2]')
    await page.locator('(//span[@title="Email"]//parent::span/.)[2]').click();
    await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill("Description");
    await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   /*  });

   /*  test('Logging a call', async ({ page }) => { */

        
    //Log a Call
    await page.waitForLoadState('load');
    await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('Log a Call').click()
    await page.locator('//textarea[@aria-describedby="quickTextKeyboardTip"]').fill("Comments");
    await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
 /*    });

  /*   test('Task creation', async ({ page }) => { */

      
    //New task creation
    await page.waitForLoadState('load');
    await page.locator('one-record-home-flexipage2').filter({ hasText: 'EditDeleteCloneContact Roles(' }).getByLabel('New Task').click()
    await page.locator('input[class="slds-combobox__input slds-input"]').click();
    await page.locator('(//span[@title="Send Letter"]//parent::span/.)[2]').click();
    await page.locator('(//input[@class="slds-input"])[5]').fill('28/09/2024')
    await page.locator('//div[@class="bottomBarRight slds-col--bump-left"]//button').click();
    await page.waitForLoadState('load');
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
  /*  });

   /* test('File uplaoding', async ({ page }) => { */
    //File uploads 
    

    await page.waitForLoadState('load');
    await page.setInputFiles('input[name="fileInput"]','./Web_Application_Report_fntsu8dt_20240222.csv');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('button[class="slds-button slds-button_neutral ok desktop uiButton--default uiButton--brand uiButton"]').click();
   /* });

  /*  test('closing the popup', async ({ page }) => {   */

      
    //close popup
    await page.waitForLoadState('load');
    if(await page.isVisible('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]'))
    {
      await page.locator('//button[@class="slds-button slds-button_neutral uiButton forceActionButton"]').click();
    }
    await page.locator('//button[@class="slds-button slds-button--brand slds-path__mark-complete stepAction current uiButton"]').click();
   
    await page.waitForTimeout(5000);

    const element =page.locator('//select[@class="stepAction required-field select"]');
    await element.selectOption({label:'Closed Won'});
    //await page.selectOption('//select[@class="stepAction required-field select"]','values : Closed Won');
    //await page.selectOption('//select[@class="stepAction required-field select"]','Closed Won')
    await page.locator('//button[@class="slds-button slds-button_neutral uiButton--default uiButton--brand uiButton forceActionButton"]').click();
    
  });
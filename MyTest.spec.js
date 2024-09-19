import {test, expect} from '@playwright/test'
test('SaleForce Automation Test', async ({ page }) => {
test.setTimeout(500000);
/* Create Account */
await page.goto("https://login.salesforce.com/?locale=in");
await page.locator("//input[@id='username']").fill('ybk.babji-6zhp@force.com');
await page.locator("//input[@id='password']").fill('SfBabji1321');
await page.locator("//input[@id='Login']").click();
await page.locator("//a[@title='Accounts']").click();
await page.locator("//a[@title='New']").click();
await page.locator("//div[text()='New']").click();
await page.locator("//input[@name='Name']").fill("My Test Account");
await page.locator("//input[@name='Website']").fill("Mytest@test.com");
await page.locator("//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value']").click();
await page.locator("//span[text()='Customer']").click();
await page.locator("//button[text()= 'Save']").click();
//await page.locator('button:text("SaveEdit")').click();

/* Create Opportunity */
await page.locator("//button[text()='New Opportunity']").click();
await page.locator("(//input[@type='text'])[1]").fill('Test Opportunity');
await page.locator("(//span[text()='Save'])[3]").click();

/*await page.locator("//span[text()='Accounts']//parent::a[@class='slds-context-bar__label-action dndItem']").click();
await page.locator("//span[@class='slds-icon_container slds-icon-utility-down']").click();
await page.locator("//div[text()='Delete']").click();
await page.locator("//span[text()='Delete']").click();*/

//await page.waitForLoadState();
/*await page.locator("(//span[@part='button'])[2]").setInputFiles('./TestFile/TestFile.txt');
await page.pause();*/
await page.locator("//slot[text()='Test Opportunity']").click();
await page.locator('(//span[@part="button"])[2]').setInputFiles('./TestFile.txt');
await page.locator('//span[text()="Done"]').click();
 
})


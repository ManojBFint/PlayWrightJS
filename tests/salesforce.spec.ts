import test, { Page } from "@playwright/test";
import { TestContext } from "node:test";

test.describe('Test Salesforce login', async ()=>{


    test.beforeEach('Login into saleforce',async({page})=>{
        await page.goto('/');
        //page.locator("//button[@class='hgf-button']").click();
        await page.locator('hgf-button',{hasText:'Login'}).locator('visible=true').click();
        await page.locator("hgf-popover.hgf-popover [data-tracking-stable='salesforceLogin']").click();
    })

test('verify the ',async({page})=>{
    await page.locator("//input[@id='username']").fill('fintmobile-52he@force.com');
    await page.locator("//input[@id='password']").fill('Test@123');
    await page.locator("//input[@id='Login']").click();
    await page.locator("//div[@class='verticalNavMenu'] //li[3]//a").click();
    await page.locator("//a[@title='New']").click();
    await page.locator("//input[@name='Name']").waitFor({state:"visible"})
    await page.locator("//input[@name='Name']").fill('Test New user');
    await page.locator("//input[@name='Website']").fill('Test@New.user');
    await page.locator("//button[@aria-haspopup='listbox']").click();
    await page.locator("//span[text()='Analyst']").click();
    await page.locator("//textarea[@class='slds-textarea']").first().fill('Tets descrition');
    await page.locator("//button[@name='SaveEdit']").click();
    await page.locator("//span[@title='Opportunities']").click();
    await page.locator("//button[@name='New']").click();
    await page.locator("//input[@name='Name']").fill('Test Opportunity');
    await page.locator("//input[@name='CloseDate']").fill('30/08/2024');
    await page.locator("//button[@aria-label='Stage']").scrollIntoViewIfNeeded();
    await page.locator("//button[@aria-label='Stage']").click();
    await page.locator("//span[text()='Qualify']").click();
    await page.locator("//button[@aria-label='Forecast Category']").scrollIntoViewIfNeeded();
    await page.locator("//button[@aria-label='Forecast Category']").click();
    await page.locator("//span[text()='Omitted']").click();
    await page.locator("//button[@name='SaveEdit']").click();
    await page.locator("//a[@class='slds-truncate']").last().click();
    //New Events 
    await repeattheCalenderAdd(page);
    await page.locator("//span[text()='Mark Stage as Complete']").waitFor({state:"visible"});
    await page.locator("//span[text()='Mark Stage as Complete']").click({timeout:20000});
    await page.locator("//span[text()='Mark Stage as Complete']").waitFor({state:"visible"});
    await page.locator("//span[text()='Mark Stage as Complete']").click({timeout:20000});
    await page.locator("//span[text()='Mark Stage as Complete']").waitFor({state:"visible"});
    await page.locator("//span[text()='Mark Stage as Complete']").click({timeout:20000});
    await page.locator("//span[text()='Mark Stage as Complete']").waitFor({state:"visible"});
    await page.locator("//span[text()='Mark Stage as Complete']").click({timeout:20000});
    await page.locator("//select[@class='stepAction required-field select']").selectOption({value:"Closed Won"});
    await page.locator("//button[@data-aura-class='uiButton--default uiButton--brand uiButton forceActionButton']//span[text()='Save']").click();
    await page.pause(); 
});

async function repeattheCalenderAdd(page:Page) {
    await page.locator("//button[@title='New Event']").last().waitFor({state:"visible"})
    await page.locator("//button[@title='New Event']").last().click();
    await page.locator("//div[@data-aura-class='forcePageBlockSectionRow'] //input").nth(0).click();
    await page.locator("//span[text()='Call']").last().click();
    await page.locator("//div[@data-aura-class='forcePageBlockSectionRow'] //textarea").fill('New Call Event');
    await page.locator("//div[@class='slds-grid bottomBar']//span[text()='Save']").click();
    await page.locator("//button[@title='New Task']").last().click();
    await page.locator("//div[@data-aura-class='forcePageBlockSectionRow'] //input").nth(0).click();
    await page.locator("//span[text()='Send Letter']").last().click();
    await page.locator("//div[@class='slds-grid bottomBar']//span[text()='Save']").click();
    await page.locator("//button[@title='Log a Call']").last().click();
    await page.locator("//div[@data-aura-class='forcePageBlockSectionRow'] //input").nth(0).click();
    await page.locator("//span[text()='Send Quote']").last().click();
    await page.locator("//div[@data-aura-class='forcePageBlockSectionRow'] //textarea").fill('New Quote Event');
    await page.locator("//div[@class='slds-grid bottomBar']//span[text()='Save']").click();
    await page.locator("//input[@name='fileInput']").last().setInputFiles('C:/Users/ThangamuthuLakshmana/Desktop/BOH.AMT.OFAC/Sample_Document/samplefile.pdf');
    await page.locator("//lightning-icon[@icon-name='utility:success']").first().waitFor({state:"visible"});
    await page.locator("//button[@aria-live='off'] //span[text()='Done']").click();
    await page.locator("//span[text()='Mark Stage as Complete']").waitFor({state:"visible"});
}
});

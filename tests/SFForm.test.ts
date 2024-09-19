//Salesforce Trail for free

const {test, expect} = require ('@playwright/test');
test('has title', async({page}) => {

    await page.goto("https://www.salesforce.com/in/?ir=1",{waitUntil:"load"});
    

 
 const tryfornewpage=page.context().waitForEvent('page');
await page.getByText('Try for free').nth(1).click();
const newpage = await tryfornewpage;

});


import { test, expect } from '@playwright/test';
//const { LogintoSalesforce } = require ('../Pages/Tryforfree.js');
import { LogintoSalesforce } from '../Pages/Tryforfrees.js'

test('Login to Salesforce Application', async ({ page }) => {
  
  const SalesforceScreen =  new LogintoSalesforce (page)
  test.setTimeout(300000)
  await SalesforceScreen.Navigateto();
  //await SalesforceScreen.Signupdetails();
  await SalesforceScreen.Login();
  await SalesforceScreen.Accounts();
  await SalesforceScreen.Opportunities();
  await SalesforceScreen.InOpportunity();
 
  await page.pause();
})
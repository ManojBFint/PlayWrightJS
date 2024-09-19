//--------Salesforce register

import test, { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import path from "path";

test('has title', async({page}) => {

    await page.goto('https://www.salesforce.com/in/form/signup/freetrial-sales/?d=topnav2-btn-ft/');

  // Expect a title "to contain" a substring.
  

  await page.locator('[name=UserFirstName]').fill('First');
  await page.locator('[name=UserLastName]').fill('Last');
  await page.locator('[type=email]').fill('automate@gmail.com');
  await page.locator('[name=UserTitle]').selectOption({value: "IT_Manager_AP"});
  await page.locator('[name=CompanyEmployees]').selectOption({value: "1001"});
  await page.locator('[name=CompanyName]').fill('Fint');
  await page.locator('[name=UserPhone]').fill('1234567');
//   const checkbox = page.locator('[name="SubscriptionAgreement"]');
//   await checkbox.waitFor({ state: 'visible' });
//   expect(await checkbox.isChecked()).toBe(true);
  await page.locator('[name=SubscriptionAgreement]').click();

});

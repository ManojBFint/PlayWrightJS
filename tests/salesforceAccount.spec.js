// @ts-check
const { test, expect } = require("@playwright/test");

test("Salesforce sample for slow application", async ({ page, context }) => {
	await page.setViewportSize({ width: 1000, height: 600 });

	// Go to Salesforce login page
	await page.goto("https://login.salesforce.com/");

	// Login
	await page.fill("#username", "guduru.sateesh-1z2g@force.com");
	await page.fill("#password", "S@th0906");
	await Promise.all([
		page.click("#Login"),
		page.waitForLoadState("networkidle"),
		page.waitForLoadState("load"), // Wait for the page to navigate after login
	]);

	// Navigate to Accounts and click 'New'
	await page.waitForSelector("text=Accounts"); // Wait for Accounts link to be visible
	await page.click("text=Accounts");
	await page.waitForSelector("text=New"); // Wait for New button to appear
	await page.click("text=New");

	const randomNumber = Math.floor(Math.random() * 1000000);
	const randomAccountName = `Account_${randomNumber}`;
	let fillLocatorVal = [
		{ locator: "//input[@name='Name']", value: randomAccountName },
		{
			locator: '//input[@name="Website"]',
			value: "https://www.testwebsite.com",
		},
		{
			locator: '//label[text()="Description"]/..//textarea',
			value: "This is a test description for the account." + randomNumber + "}",
		},
		{ locator: '//input[@name="Phone"]', value: "+1234567890" },
		{
			locator: '(//textarea[@name="street"])[1]',
			value: `123 Test Billing Street ${randomNumber}`,
		},
		{
			locator: '(//input[@name="city"])[1]',
			value: `Test City ${randomNumber}`,
		},
		{ locator: '(//input[@name="postalCode"])[1]', value: `12345` },
		{
			locator: '(//input[@name="country"])[1]',
			value: `Test Country ${randomNumber}`,
		},
		{
			locator: '(//textarea[@name="street"])[2]',
			value: `123 Test Shipping Street ${randomNumber}`,
		},
		{
			locator: '(//input[@name="city"])[2]',
			value: `Test City ${randomNumber}`,
		},
		{
			locator: '(//input[@name="country"])[2]',
			value: `Test Country ${randomNumber}`,
		},
	];
	for (const field of fillLocatorVal) {
		await page.waitForTimeout(1000);
		await page.fill(field.locator, field.value);
	}

	await page.click('//button[@data-value="--None--"]');
	await page.waitForSelector("text=Customer"); // Ensure Customer option is visible
	await page.click("text=Customer");

	// Save the account
	await page.waitForSelector('//button[@name="SaveEdit"]'); // Ensure Save button is available
	await page.click('//button[@name="SaveEdit"]');
	await page.waitForLoadState("networkidle"); // Ensure the form submission is complete

	// Create a new opportunity
	await page.waitForSelector("text=New Opportunity"); // Wait for the New Opportunity button
	await page.click("text=New Opportunity");
	await page.waitForSelector('(//button/span[text()="Save"])[3]'); // Ensure Save button is ready
	await page.click('(//button/span[text()="Save"])[3]');

	// View all and navigate to 'New Business'
	await page.click("text=View All");

	await page.getByRole("link", { name: "New Business" }).first().click();
	await page.waitForTimeout(4000);
	// await page.getByText('Upload Files', { exact: true }).nth(1).click();
	await page.waitForTimeout(4000);
	const filePath =
		"C:/Users/SatheeshGuduru/Downloads/Fint_Autonomous_Testing_Framework1.png"; // Path to the file you want to upload
	await page.setInputFiles('(//input[@type="file"])[2]', filePath);
	await page.waitForTimeout(4000);
	await page.click("text=Done");
	for (let i = 0; i < 4; i++) {
		await page.waitForTimeout(4000);
		await page.waitForSelector("text=Mark Stage as complete"); // Wait for the New Opportunity button
		await page.click("text=Mark Stage as complete");
	}

	await page.waitForTimeout(4000);
	await page.selectOption("//select", { index: 1 });

	await page.click('(//button/span[text()="Save"])[2]');

	await page.waitForTimeout(4000);
	// Create a new event

	await page.locator("text=New Event").nth(3).click();
	await page.fill('//label[text()="Subject"]/..//input', "test subject");
	await page.fill(
		'(//span[text()="Description"])[3]/../..//textarea',
		"test description"
	);
	let locatorVal = [
		{ locator: "(//button/span[text()='Save'])[3]" },
		{ locator: "(//span[text()='Sales']/..)[1]" },
		{ locator: "(//span[text()='Opportunities']/..)[1]" },
		{ locator: "(//a[@role='button'])[17]" },
		{ locator: "(//div[text()='Delete'])[1]" },
		{ locator: "(//span[text()='Delete'])[1]" },
		{ locator: "(//span[text()='Contacts']/..)[1]" },
		{ locator: "(//span[text()='Accounts']/..)[1]" },
		{ locator: "(//a[@role='button'])[9]" },
		{ locator: "(//div[text()='Delete'])[1]" },
		{ locator: "(//span[text()='Delete'])[1]" },
	];
	for (const field of locatorVal) {
		await page.waitForTimeout(4000);
		await page.waitForSelector(field.locator);
		await page.locator(field.locator).click();
	}

	await page.waitForLoadState("networkidle"); // Ensure delete action is completed
	await page.waitForTimeout(4000);
});

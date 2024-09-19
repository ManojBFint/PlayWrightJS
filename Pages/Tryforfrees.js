import { expect } from "@playwright/test";

export class LogintoSalesforce {
    constructor(page) {
        this.page = page;
        this.Tryforfree = page.locator("")
        this.FirstName = page.locator("#UserFirstName-2bGK");
        this.LastName = page.locator("#UserLastName-slAL");
        this.EmailID = page.locator("#UserEmail-pvm1");
        this.CompanyName = page.locator("CompanyName-nCxF");
        this.PhoneNumber = page.locator("#UserPhone-sx7n");
        this.JobTitle = page.locator("#UserTitle-heVk");
        this.Employess = page.locator("#CompanyEmployees-kNYj");
        this.agree = page.locator("(//div[@class='checkbox-ui'])[2]");
        this.FreeTrail = page.locator("//button[text()='start my free trial']");

        this.Loginn = page.getByLabel('Site tools', { exact: true }).locator('span').filter({ hasText: 'Login' })
        this.Salesforcee = page.getByRole('link', { name: 'Salesforce', exact: true })
        this.Username = page.locator("//input[@id='username']")
        this.Password = page.locator("//input[@id='password']")
        this.Loginnn = page.locator("//input[@id='Login']")
        this.Account = page.locator("(//span[text()='Accounts'])[1]")
        this.ANew = page.locator("//div[text()='New']")
        this.AName = page.locator('//input[@name="Name"]')
        this.APhone = page.locator('(//input[@name="Phone"])[1]')
        this.AType = page.locator('//button[@aria-label="Type"]')
        this.AIndustry = page.locator('//button[@aria-label="Industry"]')
        this.AWebsite = page.locator('//input[@name="Website"]')
        this.ADescription = page.locator('(//textarea[@part="textarea"])[1]')
        this.AEmployees = page.locator('//input[@name="NumberOfEmployees"]')
        this.ABillingAddress = page.locator('//Input[@id="combobox-input-625"]')
        this.Save = page.locator('//button[@name="SaveEdit"]')
        this.ACName=page.getByPlaceholder('Search Accounts...')//locator('(//input[@type="text"])[1]')
        this.OPPName=page.locator('(//span[text()="Opportunities"])[1]')
        this.ForecastCategory=page.locator('//button[@aria-label="Forecast Category"]')
        this.Stage=page.locator('//button[@aria-label="Stage"]')
        this.Type=page.locator('//button[@aria-label="Type"]')
        this.Analyst=this.page.locator("//div[@aria-label='Type']").getByText("Analyst")
        this.Industry=this.page.locator('//button[@aria-label="Industry"]')
        this.Agriculture=this.page.locator("//div[@aria-label='Industry']").getByText("Agriculture")
        this.Forecast=page.locator('//button[@aria-label="Forecast Category"]')
        this.Omitted=page.locator("//div[@aria-label='Forecast Category']").getByText('Omitted')
        this.Stage=page.locator('//button[@aria-label="Stage"]')
        this.Qualification=page.locator("//div[@aria-label='Stage']").getByText('Qualification')
        this.OppNames=page.locator('//input[@name="Name"]')
        this.FirstAccountName=page.locator('(//span[contains(text(),"TestNaveen")])[1]')
        this.closeDate=page.locator('//input[@name="CloseDate"]')
        this.DateSelected=page.locator('//span[text()="20"]')
        this.MakeStageascomplete=page.locator('//span[text()="Mark Stage as Complete"]')
        this.BudgetConfirmed=page.locator('//button[@title="Edit Budget Confirmed"]')
        this.description=page.locator("//textarea[@role='textbox']")
        this.Checkbox=page.locator("//input[@checked='checked']")
        this.BCSave=page.locator("(//span[text()='Save'])[4]")
        this.Firstopp=page.locator("(//a[@title='Test Opportunity'])[1]")
        this.History=page.locator("(//a[text()='History'])[1]")
        this.Viewall=page.locator("(//span[text()='View All'])[1]")
        this.Backopp=page.locator("(//a[text()='Test Opportunity'])[8]")
        this.callbutton=page.locator("(//button[@title='Log a Call'])[2]")
        this.Commentsbox=page.locator('//textarea[@role="textbox"]')
        this.add=page.locator("//span[text()='Add Call to To Do List']")
        this.subject=page.locator("(//input[@type='text'])[1]")
        this.SendQuote=page.locator("//span[text()='Send Quote']")
        this.commentsarea=page.locator("//textarea[@role='textbox']")
        this.Sendquotesave=page.locator("(//span[text()='Save'])[7]")
        this.AccountsPopup=page.locator("//div[@role='alert'][@data-key='success']")
        this.UploadFIles=page.locator("//span[@part='button']")
        this.UploadDone=page.locator("//span[text()='Done']")
        this.Task=page.locator("(//button[@title='New Task'])[2]")
        this.Subjectdropdown=page.locator("//input[@class='slds-combobox__input slds-input']")//("//label[text()='Subject']//following::input[1]")
        this.sendletter=page.locator("//span[text()='Send Letter']")
        this.NewEvent=page.locator("(//button[@value='NewEvent'])[2]")
        this.againSubject=page.locator('//input[@class="slds-combobox__input slds-input"]')
        this.Other=page.locator('//span[text()="Other"]')
        this.closestage=page.locator('//select[@class="stepAction required-field select"]')
        this.closedown=page.locator('//option[@label="Closed Won"]')
        this.save=page.locator('(//span[text()="Save"])[5]')
        this.againsave=page.locator("(//span[text()='Save'])[3]") 
        this.OpNew=page.locator("//a[@title='New']")   

    }
    async Navigateto() {
        await this.page.goto("https://www.salesforce.com/in/?ir=1")//https://www.salesforce.com/in/form/signup/freetrial-sales/?d=topnav2-btn-ft
    }

    async Signupdetails() {
        await this.Tryforfree.click()
        await this.FirstName.click()
        await this.EmailID.click()
        await this.CompanyName.click()
        await this.PhoneNumber.click()
        await this.JobTitle.click()
        await this.Employess.click()
        await this.agree.click()
        await this.FreeTrail.click()
    }

    async Login() {
        await this.Loginn.click()
        await this.Salesforcee.click()
        await this.Username.fill('naveenreddyat1-xwjw@force.com')
        await this.Password.fill('Naveen@1997')
        await this.Loginnn.click()
    }

    async Accounts() {
        await this.Account.click()
        await this.page.waitForTimeout(2000)
        await this.ANew.click()
        await this.AName.fill('TestNaveen Naveen')
        await this.APhone.fill('9492800001')
        await this.Type.click()
        await this.Analyst.click()
        await this.Industry.click()
        await this.Agriculture.click()
        await this.AWebsite.fill('www.google.com')
        await this.ADescription.fill('Test Google')
        await this.AEmployees.fill('200')
        await this.Save.click()
        await expect(this.page.locator("//div[@role='alert'][@data-key='success']")).toContainText("Account")
        console.log("Account '' was Created")
    }
    async Opportunities(){
        await this.page.waitForTimeout(5000)
        await this.OPPName.click()
        await this.page.waitForTimeout(2000)
        await this.OpNew.click()
        //await this.page.waitForTimeout(2000)
        await this.ACName.click()
        await this.page.waitForTimeout(2000)
        await this.FirstAccountName.click()
        await this.page.waitForTimeout(2000)
        await this.OppNames.fill('Test Opportunity')
        await this.Forecast.click()
        await this.Omitted.click()
        await this.Stage.click()
        await this.Qualification.click()
        await this.closeDate.click()
        await this.DateSelected.click()
        await this.Save.click()
    }
    async InOpportunity(){
        await this.page.waitForTimeout(2000)
        //await this.MakeStageascomplete.click()
        await this.UploadFIles.setInputFiles('./Files/ClaimForm (2).pdf')
        await this.UploadDone.click();
        await this.MakeStageascomplete.click()
        await this.callbutton.click()
        await this.page.waitForTimeout(2000)
        await this.BCSave.click();
        await this.page.waitForTimeout(2000)
        await this.MakeStageascomplete.click()
        await this.Task.click()
        await this.Subjectdropdown.click()
        await this.sendletter.click()
        await this.BCSave.click()
        await this.MakeStageascomplete.click()
        await this.NewEvent.click()
        await this.againSubject.click()
        await this.Other.click()
        await this.againsave.click()
        await this.page.waitForTimeout(2000)
        await this.MakeStageascomplete.click()
        await this.closestage.click()
        await this.closedown.click()
        await this.save.click()

    }
}

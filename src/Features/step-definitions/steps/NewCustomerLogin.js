import { Given, When, Then } from 'cucumber'
import URL from '../../../../Pages/URL'
import LoginPage from '../../../../Pages/LoginPage'
import AccountCreation from '../../../../Pages/AccountCreation'
import MyAccount from '../../../../Pages/MyAccount'

Given('User is on the Login Page', () => {
	URL.openLoginPage()

	
	
})

Given(/^page title displayed as "(.*)"$/, LoginPage_Title => {

	LoginPage.LoginPageTitle(LoginPage_Title)
	
})

When(
	/^User Enter the "(.*)" in the text box and click Create Button$/,
	Emailid => {
		LoginPage.clickSubmitCreate(Emailid)
	}
)
Then(/^"(.*)" text is displayed on Page Breadcrumbs$/, CreateText => {
	LoginPage.checkAuthenticationtText(CreateText)
})

When(
	/^User selected Title and firstname as "(.*)" lastname as "(.*)"$/,
	(fname, lname) => {
		AccountCreation.SelectMr()
		AccountCreation.EnterPFirstName(fname)
		AccountCreation.EnterPLastName(lname)
	}
)
When(/^password as "(.*)"$/, password => {
	AccountCreation.EnterPasswd(password)
})
When(
	/^day as "(.*)" month as "(.*)" and year as "(.*)"$/,
	(day, month, year) => {
		AccountCreation.SelectDate(day)
		AccountCreation.SelectMonth(month)
		AccountCreation.SelectYear(year)
	}
)
When('Selected newsletter subscription', () => {
	AccountCreation.CheckSignupNewLetter()
})
When(/^Selected country as "(.*)" and more fields displayed$/, country => {
	AccountCreation.SelectCountry(country)
})
When(
	/^Entered address details as "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/,
	(Firname, LasName, company, Addl1, Addl2, City, State, zipcode) => {
		AccountCreation.EnterAddFirstName(Firname)
		AccountCreation.EnterAddLastName(LasName)
		AccountCreation.EnterCompany(company)
		AccountCreation.EnterAddl1(Addl1)
		AccountCreation.EnterAddl2(Addl2)
		AccountCreation.EnterCity(City)
		AccountCreation.EnterState(State)
		AccountCreation.EnterZipCode(zipcode)
	}
)
When(/^Entered "(.*)" number and "(.*)"$/, (MobileNumber, Alias) => {
	AccountCreation.EnterMobilePhone(MobileNumber)
	AccountCreation.EnterAlias(Alias)
})
When('User click on Register Button', () => {
	AccountCreation.SubmitRegisterButton()
})
Then(
	/^User is landed on My Account Page and able to see "(.*)" text$/,
	CreateText => {
		LoginPage.checkAuthenticationtText(CreateText)
	}
)
Then('User Account is displayed next to Signout Link by Account name', () => {
	MyAccount.CheckAccountLink()
	MyAccount.CheckSignoutLink()

	
})

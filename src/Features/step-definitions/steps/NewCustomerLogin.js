import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import LoginPage from '../../../PageObjects/LoginPage'
import AccountCreation from '../../../PageObjects/AccountCreationPage'
import MyAccount from '../../../PageObjects/MyAccountPage'
import MyAccountPage from '../../../PageObjects/MyAccountPage'
import AccountCreationPage from '../../../PageObjects/AccountCreationPage'

Given('User is on the Login Page', () => {
	URL.openLoginPage()
	MyAccountPage.CheckSignoutLink()
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
		AccountCreationPage.SelectMr()
		AccountCreationPage.EnterPFirstName(fname)
		AccountCreationPage.EnterPLastName(lname)
	}
)
When(/^password as "(.*)"$/, password => {
	AccountCreationPage.EnterPasswd(password)
})
When(
	/^day as "(.*)" month as "(.*)" and year as "(.*)"$/,
	(day, month, year) => {
		AccountCreationPage.SelectDate(day)
		AccountCreationPage.SelectMonth(month)
		AccountCreationPage.SelectYear(year)
	}
)
When('Selected newsletter subscription', () => {
	AccountCreationPage.CheckSignupNewLetter()
})
When(/^Selected country as "(.*)" and more fields displayed$/, country => {
	AccountCreationPage.SelectCountry(country)
})
When(
	/^Entered address details as "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/,
	(Firname, LasName, company, Addl1, Addl2, City, State, zipcode) => {
		AccountCreationPage.EnterAddFirstName(Firname)
		AccountCreationPage.EnterAddLastName(LasName)
		AccountCreationPage.EnterCompany(company)
		AccountCreationPage.EnterAddl1(Addl1)
		AccountCreationPage.EnterAddl2(Addl2)
		AccountCreationPage.EnterCity(City)
		AccountCreationPage.EnterState(State)
		AccountCreationPage.EnterZipCode(zipcode)
	}
)
When(/^Entered "(.*)" number and "(.*)"$/, (MobileNumber, Alias) => {
	AccountCreationPage.EnterMobilePhone(MobileNumber)
	AccountCreationPage.EnterAlias(Alias)
})
When('User click on Register Button', () => {
	AccountCreationPage.SubmitRegisterButton()
})
Then(
	/^User is landed on My Account Page and able to see "(.*)" text$/,
	CreateText => {
		LoginPage.checkAuthenticationtText(CreateText)
	}
)
Then('User Account is displayed next to Signout Link by Account name', () => {
	MyAccountPage.CheckAccountLink()
})

import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import LoginPage from '../../../PageObjects/LoginPage'
import AccountCreation from '../../../PageObjects/AccountCreationPage'
import MyAccount from '../../../PageObjects/MyAccountPage'
import MyAccountPage from '../../../PageObjects/MyAccountPage'

When(/^user enter the "(.*)" and "(.*)"$/, (LoginEmail, LoginPasswd) => {
	LoginPage.EnterLoginEmailid(LoginEmail)
	LoginPage.EnterLoginPasswd(LoginPasswd)
})

When('click on signin button to land on My account page', () => {
	LoginPage.ClickSignInButton()

})

Then('Error Message is displayed',()=>{
	MyAccountPage.CheckSubmitErrorMsg()
})

When(/^User enter "(.*)" and "(.*)"$/,(invalidemail,invalidpassword)=>{
	LoginPage.EnterLoginEmailid(invalidemail)
	LoginPage.EnterLoginPasswd(invalidpassword)
})
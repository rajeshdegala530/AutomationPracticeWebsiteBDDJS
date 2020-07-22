import { Given, When, Then } from 'cucumber'
import URL from '../../../../Pages/URL'
import LoginPage from '../../../../Pages/LoginPage'
import AccountCreation from '../../../../Pages/AccountCreation'
import MyAccount from '../../../../Pages/MyAccount'

When(/^user enter the "(.*)" and "(.*)"$/, (LoginEmail, LoginPasswd) => {
	LoginPage.EnterLoginEmailid(LoginEmail)
	LoginPage.EnterLoginPasswd(LoginPasswd)
})

When('click on signin button to land on My account page', () => {
	LoginPage.ClickSignInButton()

})

Then('Error Message is displayed',()=>{
	MyAccount.CheckSubmitErrorMsg()
})

When(/^User enter "(.*)" and "(.*)"$/,(invalidemail,invalidpassword)=>{
	LoginPage.EnterLoginEmailid(invalidemail)
	LoginPage.EnterLoginPasswd(invalidpassword)
})
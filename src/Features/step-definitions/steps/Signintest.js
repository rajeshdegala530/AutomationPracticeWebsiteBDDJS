import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import LoginPage from '../../../PageObjects/LoginPage'
import AccountCreation from '../../../PageObjects/AccountCreationPage'
import MyAccount from '../../../PageObjects/MyAccountPage'
import MyAccountPage from '../../../PageObjects/MyAccountPage'

When(/^User enter the "(.*)" and "(.*)" and landed on My Account page$/,(LoginEmail, LoginPasswd) => {
		LoginPage.EnterLoginEmailid(LoginEmail)
		LoginPage.EnterLoginPasswd(LoginPasswd)
		LoginPage.ClickSignInButton()
	}
)

Then('Error Message is displayed', () => {
	MyAccountPage.CheckSubmitErrorMsg()
})

/* When(/^User enter "(.*)" and "(.*)"$/, (invalidemail, invalidpassword) => {
	LoginPage.EnterLoginEmailid(invalidemail)
	LoginPage.EnterLoginPasswd(invalidpassword)
})
 */
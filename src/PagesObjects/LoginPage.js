import Base from './Base'
import URL from './URL'
import assert from 'assert'
import { hasUncaughtExceptionCaptureCallback } from 'process'

class LoginPage extends Base {
	get email_create() {
		return $('#email_create')
	}

	get SubmitCreate() {
		return $('#SubmitCreate')
	}
	get createanaccountText() {
		return $('.page-heading')
	}
	get AuthenticationText() {
		return $('.navigation_page')
	}
	get FilledEmail() {
		return $('#email.is_required.validate.form-control')
    }
    
    get loginEmail(){
        return $('#email.is_required.validate.account_input.form-control')
    }

    get loginpasswd(){
        return $('#passwd.is_required.validate.account_input.form-control')
    }

    get SigninButton(){
        return $('#SubmitLogin')
    }

	LoginPageTitle(LoginPage_Title) {

		const LoginTitle = browser.getTitle()
		this.loginEmail.waitForDisplayed()
		assert.equal(LoginTitle, LoginPage_Title)
		console.log('Page Title Displayed as:- ' + LoginTitle)
	}
	clickSubmitCreate(Emailid) {
		this.email_create.waitForDisplayed()
		this.email_create.setValue(Emailid)
		this.SubmitCreate.waitForDisplayed()
		this.SubmitCreate.click()
	}
	checkAuthenticationtText(CreateText) {
		this.AuthenticationText.waitForDisplayed()
		const text = this.AuthenticationText.getText()
		assert.equal(text, CreateText)
	}
	ValidateEmailField(Emailid) {
		this.FilledEmail.waitForDisplayed()
        const emailval = this.FilledEmail.getAttribute('value')
        expect(emailval).toHaveValueContaining(Emailid)
    }

    EnterLoginEmailid(LoginEmail)
    {
        this.loginEmail.waitForDisplayed()
        this.loginEmail.setValue(LoginEmail)
    }
    EnterLoginPasswd(LoginPasswd)
    {
        this.loginpasswd.waitForDisplayed()
        this.loginpasswd.setValue(LoginPasswd)
    }
    ClickSignInButton(){
        this.SigninButton.waitForDisplayed()
        this.SigninButton.click()
    }

}

export default new LoginPage()


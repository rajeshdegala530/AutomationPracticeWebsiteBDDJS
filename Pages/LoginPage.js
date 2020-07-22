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

	LoginPageTitle(LoginPage_Title) {
		const LoginTitle = browser.getTitle()
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
    
}

export default new LoginPage()


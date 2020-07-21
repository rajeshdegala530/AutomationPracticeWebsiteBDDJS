import URL from './URL'
import Base from './Base'
import assert from 'assert'
class ContactUsPage extends Base {
	get contactUsElement() {
		return $('#contact-link')
	}
	get contactUsPageText() {
		return $('.navigation_page')
    }
    
   get dropdownclick()
   {
       return $('.selector #id_contact.form-control')
    }

	get selectitem() {
		return $('#id_contact.form-control')
	}
	get emailid() {
		return $('#email')
	}
	get orderReference() {
		return $('#id_order')
	}
	get messageid() {
		return $('#message')
	}
	get sendButton() {
		return $('#submitMessage')
	}
	get alertMessage() {
		return $('.alert.alert-success')
	}

	ClickContactUSLink() {
		this.contactUsElement.waitForDisplayed()
		this.contactUsElement.click()
		this.contactUsPageText.waitForDisplayed()
		expect(this.contactUsPageText).toHaveText('Contact')
	}
	ContactUsPageTitle(conactustitle) {
		const pageTitle = browser.getTitle()
		assert.equal(pageTitle, conactustitle)
		console.log(pageTitle)
	}
	ChooseOption() {
	 this.dropdownclick.click()
	 const option = this.dropdownclick
	 option.selectByVisibleText('Customer service')
	// this.selectitem.waitForDisplayed()
	// this.selectitem.selectByIndex(1)
 	 //expect(this.selectitem).toBeDisplayed()
          
      //  this.selectitem.waitForDisplayed()
      //  const option = this.selectitem
      //  option.selectByAttribute('value', 'Customer service')
	}
	EnterEmailid() {
		this.emailid.waitForDisplayed()
		this.emailid.setValue('abc@abc.com')
	}
	EnterOrderNumber() {
		this.orderReference.waitForDisplayed()
		this.orderReference.setValue('2345')
	}
	EnterMessage() {
		this.messageid.waitForDisplayed()
		this.messageid.setValue('Hello, this is a test')
	}
	ClickSend() {
		this.sendButton.waitForDisplayed()
		this.sendButton.click()
		this.alertMessage.waitForDisplayed()
		expect(this.alertMessage).toBeDisplayed()
	}
}

export default new ContactUsPage()

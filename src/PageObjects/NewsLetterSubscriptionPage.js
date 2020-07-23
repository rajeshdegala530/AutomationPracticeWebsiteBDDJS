import URL from './URL'
import Base from './Base'

class NewsLetterSubscriptionPage extends Base{

    get subscriptionTextBox() {
        return $('#newsletter-input')
    }
    
    EnterSubscriptionEmail(mailid) {
        this.subscriptionTextBox.waitForDisplayed()
        this.subscriptionTextBox.click()
        this.subscriptionTextBox.setValue(mailid)
    }
    
    get subscriptionSubmitButton() {
        return $('button[name="submitNewsletter"]')
    }
    
    ClickSubscriptionSubmit() {
        this.subscriptionSubmitButton.waitForDisplayed()
        this.subscriptionSubmitButton.click()
    }
    
    get SuccessMsg() {
        return $('.alert.alert-success')
    }
    get ErrorMsg() {
        return $('.alert.alert-danger')
    }
    CheckNewSubscriptionMessage() {
        this.SuccessMsg.waitForDisplayed()
        expect(this.SuccessMsg).toHaveText('Newsletter : You have successfully subscribed to this newsletter.')
        console.log(this.SuccessMsg.getText())
    }
    CheckAlreadySubscribedMsg()
    {
        this.ErrorMsg.waitForDisplayed()
        expect(this.ErrorMsg).toHaveText('Newsletter : This email address is already registered.')
        console.log(this.ErrorMsg.getText())
    }
}

export default new NewsLetterSubscriptionPage()
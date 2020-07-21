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
    
    get NewSubscriptionMsg() {
        return $('.alert.alert-success')
    }
    get AlreadySubscribedMsg() {
        return $('.alert.alert-danger')
    }
    CheckNewSubscriptionMessage() {
        this.NewSubscriptionMsg.waitForDisplayed()
        expect(this.NewSubscriptionMsg).toHaveText('Newsletter : You have successfully subscribed to this newsletter.')
        console.log(this.NewSubscriptionMsg.getText())
    }
    CheckAlreadySubscribedMsg()
    {
        this.AlreadySubscribedMsg.waitForDisplayed()
        expect(this.AlreadySubscribedMsg).toHaveText('Newsletter : This email address is already registered.')
        console.log(this.AlreadySubscribedMsg.getText())
    }
}

export default new NewsLetterSubscriptionPage()
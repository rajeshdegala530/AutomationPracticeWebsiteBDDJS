import {Given, When, Then} from 'cucumber'
import URL from '../../../PageObjects/URL'
import ContactUsPage from '../../../PageObjects/ContactUsPage'

When ('user select contact dropdown',()=>{
  
    ContactUsPage.ChooseOption()
})
When ('enter the email id',() =>{
    ContactUsPage.EnterEmailid()
})
When ('enter the OrderReference Number',() =>{
    ContactUsPage.EnterOrderNumber()
})
When('Enter the message',() =>{
    ContactUsPage.EnterMessage()
})
When ('Submit the send button',() =>{
    ContactUsPage.ClickSend()
})
Then ('page displayed with success message',() =>{
    const message = ContactUsPage.alertMessage
    message.waitForDisplayed()
    expect(message).toHaveText('Your message has been successfully sent to our team.')
})

import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import NewsLetterSubscriptionPage from '../../../PageObjects/NewsLetterSubscriptionPage'

Given('User is on automationpractice.com', () => {
	URL.openHomepage()
})

When(/^the user enter "(.*)" in the text box$/, (mailid) => {
	NewsLetterSubscriptionPage.EnterSubscriptionEmail(mailid)
})

Then('the user click submit button', () => {
	NewsLetterSubscriptionPage.ClickSubscriptionSubmit()
})

Then('success subscription message is displayed', () => {
	NewsLetterSubscriptionPage.CheckNewSubscriptionMessage()
})

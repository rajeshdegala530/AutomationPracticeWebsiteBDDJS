
import {Given, When, Then} from 'cucumber'
import NewsLetterSubscriptionPage from '../../../PageObjects/NewsLetterSubscriptionPage'


Then ('Already subscribed message is displayed',()=>{

    NewsLetterSubscriptionPage.CheckAlreadySubscribedMsg()
})

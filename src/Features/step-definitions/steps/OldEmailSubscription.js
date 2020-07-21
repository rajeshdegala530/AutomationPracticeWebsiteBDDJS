
import {Given, When, Then} from 'cucumber'
import NewsLetterSubscriptionPage from '../../../../Pages/NewsLetterSubscriptionPage'


Then ('Already subscribed message is displayed',()=>{

    NewsLetterSubscriptionPage.CheckAlreadySubscribedMsg()
})

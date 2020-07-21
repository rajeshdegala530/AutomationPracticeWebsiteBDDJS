import {Given, When, Then} from 'cucumber'
import URL from '../../../../Pages/URL'
import ContactUsPage from '../../../../Pages/ContactUsPage'

Given ('User is on ConactUs page',() =>{
    URL.openConactUsPage()

})

Then(/^the page title is dispalyed as "(.*)"$/,(contactustitle) =>{
    ContactUsPage.ContactUsPageTitle(contactustitle)

})


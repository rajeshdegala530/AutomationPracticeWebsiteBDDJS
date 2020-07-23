import {Given, When, Then} from 'cucumber'
import URL from '../../../PageObjects/URL'
import ContactUsPage from '../../../PageObjects/ContactUsPage'

Given ('User is on ConactUs page',() =>{
    URL.openConactUsPage()

})

Then(/^the page title is dispalyed as "(.*)"$/,(contactustitle) =>{
    ContactUsPage.ContactUsPageTitle(contactustitle)

})


import { Given, When, Then } from 'cucumber'
import URL from '../../../../Pages/URL'
import HomePage from '../../../../Pages/HomePage'

Given('User is on HomePage of automationpractice.com', () => {
	URL.openHomepage()
})
When('User to see logo is present on the site', () => {
	HomePage.CheckLogo()
})

Then(/^should display the page title as "(.*)"$/, pagetitle => {
	HomePage.CheckPageTitle(pagetitle)
})

import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import HomePage from '../../../PageObjects/HomePage'

Given('User is on HomePage of automationpractice.com', () => {
	URL.openHomepage()
})
When('User to see logo is present on the site', () => {
	HomePage.CheckLogo()
})

Then(/^should display the page title as "(.*)"$/, pagetitle => {
	HomePage.CheckPageTitle(pagetitle)
})

When(/^User click on "(.*)" Menu item$/, menuOption => {
	HomePage.clickMenuOption(menuOption)
})

Then(/^title of the page should be displayed as "(.*)"$/, MenuPageTitle => {
	HomePage.CheckMenuPageTitle(MenuPageTitle)
})

Then('banner is displayed on top of the page', () => {
	HomePage.CheckBanner()
})

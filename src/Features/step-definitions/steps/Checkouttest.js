import { Given, When, Then } from 'cucumber'
import Base from '../../../PageObjects/Base'
import URL from '../../../PageObjects/URL'
import HomePage from '../../../PageObjects/HomePage'
import LoginPage from '../../../PageObjects/LoginPage'
import ProductPage from '../../../PageObjects/ProductPage'
import CheckoutPage from '../../../PageObjects/CheckoutPage'
import BasketPage from '../../../PageObjects/BasketPage'

Given('User added product to bag and navigated to checkout page', () => {
	URL.openHomepage()
	ProductPage.ClickProduct()
	BasketPage.ClickAddtoCartButton()
	BasketPage.ClickOverlayCheckoutButton()
	BasketPage.CheckBaskePageHeading()
	BasketPage.ClickBasketCheckoutButton()
})

When('click on signin button to land on Shopping cart page', () => {
	LoginPage.ClickSignInButton()
})
When('and navigated till Payment page', () => {
	BasketPage.CheckHeadingTitle()
	CheckoutPage.ClickAddressCheckoutButton()
	BasketPage.CheckHeadingTitle()
	CheckoutPage.ClickTCCheckbox()
	CheckoutPage.ClickShipperCheckoutButton()
})

When('On Payment page, Select Pay by Cheque method and confirm order', () => {
	CheckoutPage.SelectPaymentCheque()
	CheckoutPage.ClickOrderConfirmButton()
})
Then(/^"(.*)" page is displayed and Order is placed$/, (OCPage) => {
	CheckoutPage.CheckOrderConfirmationPage(OCPage)
})

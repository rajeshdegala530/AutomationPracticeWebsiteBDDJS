import URL from './URL'
import Base from './Base'

class BasketPage extends Base {
	get AddtoCartButton() {
		return $('#add_to_cart button[type="submit"]')
	}
	get OverlayCheckoutButton() {
		return $('div.clearfix div.layer_cart_cart div.button-container a span')
	}
	get BasketPageTitle() {
		return $('#cart_title')
	}
	get BasketCheckoutButton() {
		return $('p.cart_navigation.clearfix a.button')
	}

	get HeadingTitle() {
		return $('h1.page-heading')
	}

	ClickAddtoCartButton() {
		this.AddtoCartButton.waitForDisplayed()
		this.AddtoCartButton.click()
	}
	ClickOverlayCheckoutButton() {
		this.OverlayCheckoutButton.waitForDisplayed()
		this.OverlayCheckoutButton.click()
	}
	CheckBaskePageHeading() {
		this.BasketPageTitle.waitForDisplayed()
		expect(this.BasketPageTitle).toBeDisplayed()
	}
	ClickBasketCheckoutButton() {
		this.BasketCheckoutButton.waitForDisplayed()
		this.BasketCheckoutButton.click()
	}
	CheckHeadingTitle() {
		this.HeadingTitle.waitForDisplayed()
		expect(this.HeadingTitle).toBeDisplayed()
	}
}

export default new BasketPage()

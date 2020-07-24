import URL from './URL'
import Base from './Base'
import assert from 'assert'

class CheckoutPage extends Base {
	get AddressCheckoutButton() {
		return $('button[name="processAddress"]')
	}
	get TCCheckbox() {
		return $('input[type="checkbox"]')
	}
	get ShipperCheckoutButton() {
		return $('button[name="processCarrier"]')
	}
	get PaymentChequeType() {
		return $('.cheque')
	}
	get OrderConfirmButton() {
		return $('p#cart_navigation  button[type="submit"]')
	}

	ClickAddressCheckoutButton() {
		this.AddressCheckoutButton.waitForDisplayed()
		this.AddressCheckoutButton.click()
	}
	ClickTCCheckbox() {
	//	this.TCCheckbox.waitForDisplayed()
		this.TCCheckbox.click()
	}
    ClickShipperCheckoutButton()
    {
        this.ShipperCheckoutButton.waitForDisplayed()
        this.ShipperCheckoutButton.click()

    }
    SelectPaymentCheque()
    {
        this.PaymentChequeType.waitForDisplayed()
        this.PaymentChequeType.click()

    }
    ClickOrderConfirmButton(){
        this.OrderConfirmButton.waitForDisplayed()
        this.OrderConfirmButton.click()
    }

    CheckOrderConfirmationPage(OCPage)
    {
    const OrderPage = browser.getTitle()
    assert.equal(OrderPage, OCPage)
	//expect(OCPage).toHaveText('Order confirmation - My Store')
    }

}

export default new CheckoutPage()
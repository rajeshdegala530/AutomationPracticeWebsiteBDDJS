import Base from './Base'
import URL from './URL'
import assert from 'assert'

class MyAccount extends Base {
	get signoutlink() {
		return $('.logout')
	}
	get accountlink() {
		return $('.account')
	}
	CheckSignoutLink() {
        const SOLink = this.signoutlink
      //  SOLink.waitForDisplayed()
		expect(SOLink).toBePresent()
	}
	CheckAccountLink() {
        const ACCLink = this.accountlink
     //   ACCLink.waitForDisplayed()
		expect(ACCLink).toBePresent()
	}
}

export default new MyAccount()

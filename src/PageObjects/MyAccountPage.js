import Base from './Base'
import URL from './URL'
import assert from 'assert'
import { url } from 'inspector'
import NewsLetterSubscriptionPage from './NewsLetterSubscriptionPage'
class MyAccount extends Base {
	get signoutlink() {
		return $('a.logout')
	}
	get accountlink() {
		return $('.account')
	}
	get submitError() {
		return $('div.alert.alert-danger ol li')
	}

	CheckSignoutLink() {
		if (this.signoutlink.isExisting()) {
			this.signoutlink.click()
		} else {
			console.log('No Element')
		}
	}
	CheckAccountLink() {
		const ACCLink = this.accountlink
		//   ACCLink.waitForDisplayed()
		expect(ACCLink).toBePresent()
	}

	CheckSubmitErrorMsg() {
		this.submitError.waitForDisplayed()
		expect(this.submitError).toBePresent()
	}
}

export default new MyAccount()

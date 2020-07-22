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
	get submitError(){
		return $('div.alert.alert-danger ol li')
	}

	CheckSignoutLink() {
		
	//const LinkAvailable = expect(this.signoutlink).toBePresent()

	if(this.signoutlink == false)
		{
		Console.log('Signout not Present')
	 }	
	else{
		this.signoutlink.click()
	}	
		
		
	}
	CheckAccountLink() {
		const ACCLink = this.accountlink
		//   ACCLink.waitForDisplayed()
		expect(ACCLink).toBePresent()
	}

	CheckSubmitErrorMsg(){
		this.submitError.waitForDisplayed()
		expect(this.submitError).toBePresent()

	}
	
}

export default new MyAccount()

import URL from './URL'
import Base from './Base'

class HomePage extends Base {
	get logoelement() {
		//  return $('.logo.img-responsive')
		return $('#header_logo')
	}

	CheckLogo() {
		this.logoelement.waitForDisplayed()
		expect(this.logoelement).toBeDisplayed()
	}

	CheckPageTitle(title) {
		this.logoelement.waitForDisplayed()
		console.log('Page Title is:' + browser.getTitle())
		expect(browser).toHaveTitle(title)
	}

	get bannerelement() {
		return $('.banner')
	}

	CheckBanner() {
		this.bannerelement.waitForDisplayed()
		expect(this.bannerelement).toBeDisplayed()
	}

	
}

export default new HomePage()

/* if (this.succesAlertMsg === true) {
			this.succesAlertMsg.waitForDisplayed()
			expect(this.succesAlertMsg).toBePresent()
			
		} else 
		
		{
			this.notSuccessAlertMsg.waitForDisplayed()
			expect(this.notSuccessAlertMsg).toBePresent()
			console.log('Failure Message Displayed')
		} */

/* const successmsg = this.succesAlertMsg	
		const failuremsg = this.notSuccessAlertMsg
	
		if (successmsg == true) {
			expect(successmsg).toHaveTextContaining('successfully')
			console.log(successmsg)
		} 
		else 
		{
			expect(failuremsg).toHaveTextContaining('already registered')
			console.log(failuremsg)
		}
		 */

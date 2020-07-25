import Base from './Base'
import assert from 'assert'

import NewsLetterSubscriptionPage from './NewsLetterSubscriptionPage'
import { Console } from 'console'
class MyAccountPage extends Base {
	get signoutlink() {
		return $('a.logout')
	}
	get accountlink() {
		return $('.account')
	}
	get submitError() {
		return $('div.alert.alert-danger ol li')
	}
	get OrderHistorylink() {
		return $('div#center_column div:nth-child(1)  ul  li:nth-child(1)  a span')
	}
	get MyCreditSlipsLink() {
		return $('div#center_column div:nth-child(1)  ul  li:nth-child(2)  a span')
	}
	get CreditSlipPageWarn() {
		return $('.alert.alert-warning')
	}
	get MyAddressesLink() {
		return $('div#center_column div:nth-child(1)  ul  li:nth-child(3)  a span')
	}
	get MyPersonalInformationLink() {
		return $('div#center_column div:nth-child(1)  ul  li:nth-child(4)  a span')
	}
	get WishlistPage() {
		return $('div#center_column div:nth-child(2)  ul  li:nth-child(1)  a span')
	}
	get OrderTable() {
		return $('#block-history')
	}
	get AddressTable() {
		return $('.bloc_adresses')
	}
	get PersonalInfoUpdatepage() {
		return $('#center_column.center_column')
	}
	get WishlistTable() {
		return $('div#block-history')
	}

	SelectOrderHistoryPage(OHPageTitle) {
		this.OrderHistorylink.waitForDisplayed()
		this.OrderHistorylink.click()
	}
	CheckOrderHistoryPage(OHPageTitle) {
		const OHPage = browser.getTitle()
		assert.equal(OHPage, OHPageTitle)
		//	expect(OHPage).toHaveTextContaining(OHPageTitle)
		const Ordtbl = this.OrderTable
		Ordtbl.waitForDisplayed()
		expect(Ordtbl).toBePresent()
	}
	SelectCreditSlipsPage() {
		this.MyCreditSlipsLink.waitForDisplayed()
		this.MyCreditSlipsLink.click()
	}
	CheckCreditSlipPage(CSPageTitle) {
		const CreditPage = browser.getTitle()
		assert.equal(CreditPage, CSPageTitle)
		this.CreditSlipPageWarn.waitForDisplayed()
		expect(this.CreditSlipPageWarn).toBePresent()
	}
	SelectMyAddressPage() {
		this.MyAddressesLink.waitForDisplayed()
		this.MyAddressesLink.click()
	}
	CheckMyAddressPage(AddressPageTitle) {
		const MyAddress = browser.getTitle()
		assert.equal(MyAddress, AddressPageTitle)
		this.AddressTable.waitForDisplayed()
		expect(this.AddressTable).toBePresent()
	}
	SelectPersonalInfoPage() {
		this.MyPersonalInformationLink.waitForDisplayed()
		this.MyPersonalInformationLink.click()
	}
	CheckMyPersonalInfoPage(PersonalInfoPageTitle) {
		const InfoUpddate = browser.getTitle()
		assert.equal(InfoUpddate, PersonalInfoPageTitle)
		this.PersonalInfoUpdatepage.waitForDisplayed()
		expect(this.PersonalInfoUpdatepage).toBePresent()
	}
	SelectWishlistPage() {
		this.WishlistPage.waitForDisplayed()
		this.WishlistPage.click()
	}
	CheckWishlistPage(WishlistPageTitle) {
		const WLPage = browser.getTitle()
		assert.equal(WLPage, WishlistPageTitle)
		this.WishlistTable.waitForDisplayed()
		expect(this.WishlistTable).toBePresent()
	}
	SelectMyAccountPageLinks(MyAccountPageType) {
		switch (MyAccountPageType) {
			case 'Orders':
				this.OrderHistorylink.click()
				break
			case 'Credit':
				this.MyCreditSlipsLink.click()
				break
			case 'Addresses':
				this.MyAddressesLink.click()
				break
			case 'Orders':
				this.OrderHistorylink.click()
				break
			case 'PersopnalInfo':
				this.MyPersonalInformationLink.click()
				break
			case 'WishList':
				this.WishlistPage.click()
				break
			default:
				console.log('No Such Page Exists')
				
		}
	}
	CheckPageTitle(MyAccountPageTitle) {
		switch (MyAccountPageTitle) {
			case 'Order history - My Store':
				const OHPage = browser.getTitle()
				assert.equal(OHPage, MyAccountPageTitle)
				this.OrderTable.waitForDisplayed()
				expect(this.OrderTable).toBePresent()
				break
			case 'Order slip - My Store ':
				const CreditPage = browser.getTitle()
				assert.equal(CreditPage, MyAccountPageTitle)
				this.CreditSlipPageWarn.waitForDisplayed()
				expect(this.CreditSlipPageWarn).toBePresent()
				break
			case 'Addresses - My Store':
				const MyAddress = browser.getTitle()
				assert.equal(MyAddress, MyAccountPageTitle)
				this.AddressTable.waitForDisplayed()
				expect(this.AddressTable).toBePresent()
				break
			case 'Identity - My Store':
				const InfoUpddate = browser.getTitle()
				assert.equal(InfoUpddate, MyAccountPageTitle)
				this.PersonalInfoUpdatepage.waitForDisplayed()
				expect(this.PersonalInfoUpdatepage).toBePresent()
				break
			case 'My Store ':
				const WLPage = browser.getTitle()
				assert.equal(WLPage, MyAccountPageTitle)
				this.WishlistTable.waitForDisplayed()
				expect(this.WishlistTable).toBePresent()

			default:
				break
		}
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

export default new MyAccountPage()

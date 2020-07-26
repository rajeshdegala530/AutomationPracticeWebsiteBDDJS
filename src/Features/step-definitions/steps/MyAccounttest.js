import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import LoginPage from '../../../PageObjects/LoginPage'
import MyAccountPage from '../../../PageObjects/MyAccountPage'

When(
	/^User land on "(.*)" page by selecting PageLinkOption$/,
	MyAccountPageType => {
		//   MyAccountPage.CheckSignoutLink()
		MyAccountPage.SelectMyAccountPageLinks(MyAccountPageType)
	}
)

Then(/^Page name is "(.*)" and passed validations$/, MyAccountPageTitle => {
	MyAccountPage.CheckPageTitle(MyAccountPageTitle)
})
/* 


When('User land on Credit Slips by selecting My Credit Slips link', () => {
	MyAccountPage.SelectCreditSlipsPage()
})
Then(
	/^Page name is "(.*)" and Credit slip message is displayed$/,
	CSPageTitle => {
		MyAccountPage.CheckCreditSlipPage(CSPageTitle)
	}
)
When('User land on My Addresses by selecting My Addresses link', () => {
	MyAccountPage.SelectMyAddressPage()
})
Then(
	/^Page name is "(.*)" and Address table is displayed$/,
	PersonalInfoPageTitle => {
		MyAccountPage.CheckMyAddressPage(PersonalInfoPageTitle)
	}
)
When('User land on My PersopnalInfo by selecting My PersopnalInfo link', () => {
	MyAccountPage.SelectPersonalInfoPage()
})
Then(
	/^Page name is "(.*)" and PersonalInfoUpdate details displayed$/,
	PersonalInfoPageTitle => {
		MyAccountPage.CheckMyPersonalInfoPage(PersonalInfoPageTitle)
	}
)
When('User land on WishList by selecting Wishlist link', () => {
	MyAccountPage.SelectWishlistPage()
})
Then(
	/^Page name is "(.*)" and Wishlist  details displayed$/,
	WishListPageTitle => {
		MyAccountPage.CheckWishlistPage(WishListPageTitle)
	}
)
 */

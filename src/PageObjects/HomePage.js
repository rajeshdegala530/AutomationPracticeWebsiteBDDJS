import URL from './URL'
import Base from './Base'
import assert from 'assert'

class HomePage extends Base {
	get bannerelement() {
		return $('.banner')
	}
	get logoelement() {
		//  return $('.logo.img-responsive')
		return $('#header_logo')
	}
	get womenMenuOption() {
		return $('a[title="Women"]')
	}
	get dressesMenuOption() {
		return $('ul.menu-content >li >a[title="Dresses"]')
	}

	get tshirtMenuOption() {
		return $('ul.menu-content >li >a[title="T-shirts"]')
	}
get productlink()
{
	return  $('a[title="Blouse"]')
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

	CheckBanner() {
		this.bannerelement.waitForDisplayed()
		expect(this.bannerelement).toBeDisplayed()
	}

	clickMenuOption(menuOption) {
		switch (menuOption) {
			case 'Women':
				this.womenMenuOption.click()
				break
			case 'Dresses':
				this.dressesMenuOption.click()
				break
			case 'T-shirts':
				this.tshirtMenuOption.click()
				break
			default:
				console.log('Default Menu Option')
		}
	}
	CheckMenuPageTitle(MenuPageTitle) {
		const Menupage = browser.getTitle()
		assert.equal(Menupage, MenuPageTitle)
	}
}
export default new HomePage()

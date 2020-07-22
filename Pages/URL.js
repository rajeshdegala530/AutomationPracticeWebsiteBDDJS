class App {
	openHomepage() {
		browser.url('http://automationpractice.com/index.php')
		browser.maximizeWindow()
	}
	openConactUsPage() {
		browser.url('http://automationpractice.com/index.php?controller=contact')
		browser.maximizeWindow()
	}
	openLoginPage() {
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        browser.maximizeWindow()
	}
}

export default new App()

// This app page is used for storing the urls which are used in the site for example global levels such as urls

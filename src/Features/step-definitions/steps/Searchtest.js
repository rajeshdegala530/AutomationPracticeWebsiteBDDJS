import { Given, When, Then } from 'cucumber'
import URL from '../../../PageObjects/URL'
import SearchPage from '../../../PageObjects/SearchPage'

When(/^User enter "(.*)" in the search input box$/, (SearchWord) => {
	SearchPage.EnterSearchTerm(SearchWord)
})
When('Click search submit button', () => {
	SearchPage.SubmitSearchTerm()
})
Then('Products results are displayed on the page', () => {
	SearchPage.VerifyProductsDisplayed()
})
Then('No results Message is displayed on the page',()=>{
    SearchPage.VerifyNoResultsMessage()
})

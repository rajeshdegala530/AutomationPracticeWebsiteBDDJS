import Base from '../PageObjects/Base'

class SearchPage extends Base {
	get SearchInputBox() {
		return $('#search_query_top')
	}
	get SearchMagButton() {
		return $('.btn.btn-default.button-search')
	}
	get ProductCountResults() {
		return $('.product-count')
	}
	get ProductContainer() {
		return $('.product_list.grid.row')
    }
    get NoProductsResultsMsg(){
        return $('.alert.alert-warning')
    }

	EnterSearchTerm(SearchWord) {
		this.SearchInputBox.waitForDisplayed()
		this.SearchInputBox.click()
		this.SearchInputBox.setValue(SearchWord)
	}
	SubmitSearchTerm() {
		this.SearchMagButton.waitForDisplayed()
		this.SearchMagButton.click()
	}
	VerifyProductsDisplayed() {
        const results = this.ProductCountResults
        const imgs = this.ProductContainer
	//	results.waitForDisplayed()
		expect(results).toBeVisible()
		expect(imgs).toBeVisible()
    }
    VerifyNoResultsMessage()
    {
        const Noresults = this.NoProductsResultsMsg
        Noresults.waitForDisplayed()
        expect(Noresults).toBePresent()
    }
}

export default new SearchPage()

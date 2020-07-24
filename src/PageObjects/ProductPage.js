import URL from './URL'
import Base from './Base'
import assert from 'assert'

class ProductPage extends Base {

    get Product(){
        return $('a[title="Blouse"]')
    }

    ClickProduct()
    {
        this.Product.waitForDisplayed()
        this.Product.click()
    }

}

export default new ProductPage()
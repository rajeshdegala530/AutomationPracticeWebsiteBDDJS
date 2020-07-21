import {Then} from 'cucumber'
import URL from '../../../../Pages/URL'
import HomePage from '../../../../Pages/HomePage'

Then('banner is displayed on top of the page',()=>{

    URL.openHomepage()
    HomePage.CheckBanner()

})

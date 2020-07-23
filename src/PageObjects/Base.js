
// Code is shared to other pages with inheritance. Expample is Pause. 

class Base {

    pauseShort() {
        browser.pause(3000)
    }

    pauseMedium()
    {
        browser.pause(5000)
    }
    pauseLong()
    {
        browser.pause(8000) 
    }
}

export default Base



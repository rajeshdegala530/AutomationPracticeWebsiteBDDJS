import Base from './Base'
import URL from './URL'
import assert from 'assert'

class AccountCreation extends Base {
	
	get Mr_element() {
		return $('#id_gender1')
	}
	get Mrs_element() {
		return $('#id_gender2')
	}
	get FirstName() {
		return $('#customer_firstname')
	}
	get LastName() {
		return $('#customer_lastname')
	}
	get Passwd() {
		return $('#passwd')
	}
	get DD_Date() {
		return $('#days.form-control')
	}
	get DD_Month() {
		return $('#months.form-control')
	}
	get DD_Year() {
		return $('#years.form-control')
	}
	get Signup_Newsletter() {
		return $('#newsletter')
	}
	get Receive_Newsletter() {
		return $('.checkbox checker.optin')
	}
	get Add_FirstName() {
		return $('#firstname')
	}
	get Add_LastName() {
		return $('#lastname')
	}
	get Add_Company() {
		return $('#company')
	}
	get Add_Addressline1() {
		return $('#address1')
	}
	get Add_Addressline2() {
		return $('#address2')
	}
	get City() {
		return $('#city')
	}
	get State() {
		return $('#id_state')
	}
	get ZipCode() {
		return $('#postcode')
	}
	get Country() {
		return $('#id_country')
	}
	get AddInfo() {
		return $('#other')
	}
	get HomePhone() {
		return $('#phone')
	}
	get MobilePhone() {
		return $('#phone_mobile')
	}
	get AliasName() {
		return $('#alias')
	}
	get RegisterButton() {
		return $('#submitAccount')
	}
	

	SelectMr() {
		this.Mr_element.waitForDisplayed()
		this.Mr_element.click()
	}
	SelectMrs() {
		this.Mrs_element.waitForDisplayed()
		this.Mrs_element.click()
	}
	EnterPFirstName(fname) {
		this.FirstName.setValue(fname)
	}
	EnterPLastName(lname) {
		this.LastName.setValue(lname)
	}
	EnterPasswd(password) {
		this.Passwd.setValue(password)
	}
	SelectDate(day) {
		const Dt = this.DD_Date
		Dt.selectByIndex(day)
	}
	SelectMonth(month) {
		const Mt = this.DD_Month
		Mt.selectByAttribute('value', month)
	}
	SelectYear(year) {
		const Yr = this.DD_Year
		Yr.selectByAttribute('value', year)
	}
	CheckSignupNewLetter() {
		this.Signup_Newsletter.click()
	}
	SelectCountry(country) {
		const CT = this.Country
		CT.selectByAttribute('value', country)
	}
	EnterAddFirstName(Firname) {
		this.Add_FirstName.setValue(Firname)
	}
	EnterAddLastName(LasName) {
		this.Add_LastName.setValue(LasName)
	}
	EnterCompany(company) {
		this.Add_Company.setValue(company)
	}
	EnterAddl1(Addl1) {
		this.Add_Addressline1.setValue(Addl1)
	}
	EnterAddl2(Addl2) {
		this.Add_Addressline2.setValue(Addl2)
	}
	EnterCity(City) {
		this.City.setValue(City)
	}
	EnterState(State) {
        const St= this.State
        St.selectByAttribute('value',State)
	}
	EnterZipCode(zipcode) {
        this.ZipCode.setValue(zipcode)
    }
	EnterMobilePhone(MobileNumber) {
        this.MobilePhone.setValue(MobileNumber)
    }
	EnterAlias(Alias) {
        this.AliasName.setValue(Alias)
    }
	SubmitRegisterButton() {
        this.RegisterButton.click()
    }
}

export default new AccountCreation()

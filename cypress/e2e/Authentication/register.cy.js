import Register from "../../pages/RegisterPage.js";

describe("Registration Module", ()=>{

    const Reg=new Register();
    let userdata;
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = `test${Math.random().toString(36).substring(2,6)}@gmail.com`
    const phoneNumber = Math.floor(Math.random() * 10000000000)

    beforeEach("Launch Website", ()=>{
        cy.visit('/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('.title')
        .should('have.text', 'Signing up is easy!')

        cy.fixture("users")
        .then((data)=>{
            userdata=data;
        })
    })

    it("TC_Auth_005 Successful User Registration", ()=>{
        Reg.setfname(userdata.firstName)
        Reg.setlname(userdata.lastName)
        Reg.setAddress(userdata.address)
        Reg.setCity(userdata.city)
        Reg.setState(userdata.state)
        Reg.setZipCode(userdata.zipCode)
        Reg.setPhoneNumber(userdata.phone)
        Reg.setSSN(userdata.ssn)
        Reg.setUserName(userdata.new_username)
        Reg.setPassword(userdata.new_password)
        Reg.setconfPassword(userdata.confirmPassword)
        Reg.clickRegister(userdata.registerSuccessMsg)
    })

    it("TC_Auth_006 Registration with existing Username",()=>{
        Reg.setfname(randomString)
        Reg.setlname(randomString)
        Reg.setAddress(randomString)
        Reg.setCity(userdata.city)
        Reg.setState(userdata.state)
        Reg.setZipCode(userdata.zipCode)
        Reg.setPhoneNumber(phoneNumber)
        Reg.setSSN(userdata.ssn)
        Reg.setUserName(userdata.new_username)
        Reg.setPassword(userdata.new_password)
        Reg.setconfPassword(userdata.confirmPassword)
        Reg.clickRegister()
        //Reg.validateErrorMsg(userdata.existingUserMsg)

        cy.get("span[id='customer.username.errors']")
        .should('contain', "This username already exists.")

    })

    it("TC_Auth_007 Registerwith Mismatched Password", ()=>{
        Reg.setfname(randomString)
        Reg.setlname(randomString)
        Reg.setAddress(randomString)
        Reg.setCity(userdata.city)
        Reg.setState(userdata.state)
        Reg.setZipCode(userdata.zipCode)
        Reg.setPhoneNumber(phoneNumber)
        Reg.setSSN(userdata.ssn)
        Reg.setUserName(userdata.new_username)
        Reg.setPassword(userdata.new_password)
        Reg.setconfPassword(randomString)
        Reg.clickRegister()

        cy.get("span[id='repeatedPassword.errors']")
        .should('contain', "Passwords did not match.")

    })

    it("TC_Auth_008 Registration with Empty Required Field",()=>{
        Reg.setfname(userdata.EmptyfirstName)
        Reg.setlname(userdata.EmptylastName)
        Reg.setAddress(userdata.Emptyaddress)
        Reg.setCity(userdata.Emptycity)
        Reg.setState(userdata.Emptystate)
        Reg.setZipCode(userdata.EmptyzipCode)
        Reg.setPhoneNumber(userdata.Emptyphone)
        Reg.setSSN(userdata.Emptyssn)
        Reg.setUserName(userdata.Emptynew_username)
        Reg.setPassword(userdata.Emptynew_password)
        Reg.setconfPassword(userdata.EmptyconfirmPassword)
        Reg.clickRegister(userdata.EmptyregisterSuccessMsg)
        Reg.validateEmptyFieldError(userdata.emptyFieldsMsg)

    })
})

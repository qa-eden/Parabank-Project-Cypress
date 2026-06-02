import Register from "../../pages/RegisterPage.js";

describe("Logout Module",()=>{
    
    const Reg=new Register();
    let userdata;
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = `test${Math.random().toString(36).substring(2,6)}@gmail.com`
    const phoneNumber = Math.floor(Math.random() * 10000000000)    

    beforeEach("Launch Website",()=>{
        cy.visit('/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('.title')
        .should('have.text', 'Signing up is easy!')

        cy.fixture("users")
        .then((data)=>{
            userdata=data;
        })
    })
    it("TC_Auth_009 Successful Logout", ()=>{
        Reg.setfname(randomString)
        Reg.setlname(randomString)
        Reg.setAddress(randomString)
        Reg.setCity(userdata.city)
        Reg.setState(userdata.state)
        Reg.setZipCode(userdata.zipCode)
        Reg.setPhoneNumber(phoneNumber)
        Reg.setSSN(userdata.ssn)
        Reg.setUserName(randomString)
        Reg.setPassword(userdata.new_password)
        Reg.setconfPassword(userdata.new_password)
        Reg.clickRegister()
        Reg.validateRegister(userdata.registerSuccessMsg)
        Reg.clickLogOut()
        Reg.validateLogout(userdata.logoutConfirmation)
    })
})

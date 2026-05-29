class Register{
    
    setfname(firstname)
    {
        cy.get('[name="customer.firstName"]').type(firstname)
    }

    setlname(lastname)
    {
        cy.get("input[id='customer.lastName']").type(lastname)
    }

    setAddress(address)
    {
        cy.get("input[id='customer.address.street']").type(address)
    }

    setCity(city)
    {
        cy.get("input[id='customer.address.city']").type(city)
    }
    
    setState(state)
    {
        cy.get("input[id='customer.address.state']").type(state)
    }
    
    setZipCode(zip)
    {
        cy.get("input[id='customer.address.zipCode']").type(zip)
    }

    setPhoneNumber(phone)
    {
        cy.get("input[id='customer.phoneNumber']").type(phone)
    }

    setSSN(ssn)
    {
        cy.get("input[id='customer.ssn']").type(ssn)
    }

    setUserName(username)
    {
        cy.get("input[id='customer.username']").type(username)
    }

    setPassword(password)
    {
        cy.get("input[id='customer.password']").type(password)
    }

    setconfPassword(confirmPassword)
    {
        cy.get("#repeatedPassword").type(confirmPassword)
    }

    clickRegister()
    {
        cy.get("input[value='Register']").click()
    }

    validateRegister(expectedRegisterMsg)
    {
        cy.get("div[id='rightPanel'] p")
        .should('have.text', expectedRegisterMsg)
    }

    validateErrorMsg(expectedErrorMsg)
    {
        cy.get("span[id='customer.username.errors']")
        .should('have.value',expectedErrorMsg)
    }
}

export default Register;







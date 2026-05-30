class Register{
    
    setfname(firstname)
    {
        if(firstname !==""){
        cy.get('[name="customer.firstName"]').type(firstname)
        }
    }

    setlname(lastname)
    {
        if(lastname !== ""){
        cy.get("input[id='customer.lastName']").type(lastname)
    }}

    setAddress(address)
    {
        if(address !== ""){
        cy.get("input[id='customer.address.street']").type(address)
    }}

    setCity(city)
    {   
        if(city !== ""){
        cy.get("input[id='customer.address.city']").type(city)
    }}
    
    setState(state)
    {
        if(state !== ""){
        cy.get("input[id='customer.address.state']").type(state)
    }}
    
    setZipCode(zip)
    {
        if(zip !== ""){
        cy.get("input[id='customer.address.zipCode']").type(zip)
    }}

    setPhoneNumber(phone)
    {
        if(phone !== ""){
        cy.get("input[id='customer.phoneNumber']").type(phone)
    }}

    setSSN(ssn)
    {
        if(ssn !== ""){
        cy.get("input[id='customer.ssn']").type(ssn)
    }}

    setUserName(username)
    {
        if(username !== ""){
        cy.get("input[id='customer.username']").type(username)
    }}

    setPassword(password)
    {
        if(password !== ""){
        cy.get("input[id='customer.password']").type(password)
    }}

    setconfPassword(confirmPassword)
    {
        if(confirmPassword !== ""){
        cy.get("#repeatedPassword").type(confirmPassword)
    }}

    clickRegister()
    {
        cy.get("input[value='Register']").click()
    }

    clickLogOut()
    {
        cy.get("a[href='logout.htm']").click()
    }

    validateLogout(validateMsg)
    {
        cy.get("div[id='leftPanel'] h2")
        .should('contain', validateMsg)
    }

    validateEmptyFieldError(validateMsg)
    {
        cy.get("span[id='customer.firstName.errors']")
        .should('contain',validateMsg)
    }


    validateRegister(expectedRegisterMsg)
    {
        cy.get("div[id='rightPanel'] p")
        .should('have.text', expectedRegisterMsg)
    }

    validateErrorMsg(expectedErrorMsg)
    {
        cy.get("span[id='customer.username.errors']")
        .should('contain',expectedErrorMsg)
    }

    valdateSuccessfulRegister(validateMessage)
    {
                cy.get("div[id='rightPanel'] p")
        .should('contain', validateMessage)
    }

    

}

export default Register;







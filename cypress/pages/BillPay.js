class Bills{
    clickBillPay()
    {
        cy.get("a[href='billpay.htm']").click()
        cy.get("#billpayForm > h1")
        .should('have.text', "Bill Payment Service")
    }

    txtName(name)
    {
        if(name !== ""){
        cy.get("input[name='payee.name']").type(name)
    }}

    txtAddress(address)
    {
        if(address !== ""){ 
        cy.get("input[name='payee.address.street']").type(address)
    }}

    txtCity(city)
    {   
        if(city !== ""){
        cy.get("input[name='payee.address.city']").type(city)
    }}

    txtState(state)
    {
        if(state !== ""){
        cy.get("input[name='payee.address.state']").type(state)
    }}

    txtZipCode(zip)
    {   
        if(zip !== ""){
        cy.get("input[name='payee.address.zipCode']").type(zip)
    }}

    txtPhoneNo(phone)
    {   
        if(phone !== ""){
        cy.get('[name="payee.phoneNumber"]').type(phone)
    }}

    txtAccount(acct)
    {
        if(acct != ""){
        cy.get("input[name='payee.accountNumber']").type(acct)
    }}

    txtVerifyacct(acct)
    {
        if(acct !== ""){
        cy.get("input[name='verifyAccount']").type(acct)
    }}

    txtAmount(amount)
    {   
        if(amount !== ""){
        cy.get("input[name='amount']").type(amount)
    }}

    selectAcct()
    {
        cy.get("select[name='fromAccountId']").find('option').first()
        .then( ($option) =>{
            const account =$option.val()
            cy.get("select[name='fromAccountId']").select(account)
        })
    }

    clickSendPayment()
    {
        cy.get("input[value='Send Payment']").click()
    }

    validatePayment()
    {
        cy.get('#billpayResult > .title')
        .should('have.text',"Bill Payment Complete")
    }

    validateError(errormsg)
    {
        cy.get('#validationModel-name')
        .should('contain',errormsg)
    }

    validateAmountError(errormsg)
    {
        cy.get("#validationModel-amount-invalid")
        .should('have.text',errormsg)
    }

    validateAmountDisplayed(amount)
    {
        cy.get('#amount')
        .should('contain', amount)
    }

    validateNameDisplayed(name)
    {
        cy.get('#payeeName')
        .should('have.text', name)
    }

}

export default Bills;
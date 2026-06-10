class loan{

    clickRequestLoan()
    {
        cy.get("a[href='requestloan.htm']").click()
    }

    txtAmount(value)
    {
        cy.get("#amount").type(value)
    }

    txtDownPayment(value)
    {
        cy.get("#downPayment").type(value)
    }

    selectFromAccount()
    {
        cy.get("#fromAccountId").find('option').first()
        .then( ($option) =>{
            const accountId=$option.val()
            cy.get("#fromAccountId").select(accountId)
        })
    }

    clickApply()
    {
        cy.get("input[value='Apply Now']").click()
    }

    validateSuccessMsg()
    {
        cy.get("#loanStatus")
        .should('have.text', "Approved")
    }

    validateErrorMsg()
    {
        cy.get("#loanStatus")
        .should('have.text', "Denied")
    }    

    validateZeroErrorMsg()
    {
        cy.get('#requestLoanError > .title')
        .should('contain','Error!')
    }

    validateNewAccountDisplayed()
    {
        cy.get("#newAccountId")
        .should('not.be.empty')
    }

    validateErrorMsgDisplayed()
    {
        cy.get(".error:nth-child(1)")
        .should('contain',"We cannot grant a loan in that amount with your available funds.")
    }
}
export default loan;
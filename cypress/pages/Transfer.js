class Transfer{
    clickTransferFunds()
    {
        cy.get("a[href='transfer.htm']").click()
        cy.get('#showForm > .title')
        .should('contain',"Transfer Funds")
    }

    inputAmount(amount)
    {
        cy.get("#amount").type(amount)
        cy.get('#amount')
        .should('have.value', amount)
    }

    selectFromAccount()
    {
        cy.get('#fromAccountId').find('option').first()
        .then( ($option) =>{
            const accountId=$option.val()
            cy.get("#fromAccountId").select(accountId)
        })
    }

    selectToAccount()
    {
        cy.get('#toAccountId').find('option').first()
        .then( ($option) =>{
            const accountId=$option.val()
            cy.get("#toAccountId").select(accountId)
        })
    }

    clickTransferbtn()
    {
        cy.get("input[value='Transfer']").click()
    }

    validateSuccessMessage()
    {
        cy.get("div[id='showResult'] h1[class='title']")
        .should('contain','Transfer Complete')
    }

    validateErrorMessage()
    {
        cy.get("div[id='showResult'] h1[class='title']")
        .should('contain','Error')
    }

    validateAmount(inputAmount)
    {
        cy.get("#amountResult")
        .should('contain',inputAmount)
    }

    validateFromAccountDisplayed()
    {
        cy.get("#fromAccountIdResult")
        .should('not.be.null')
    }

    validateToAccountDisplayed()
    {
        cy.get("#toAccountIdResult")
        .should('not.be.null')
    }
}

export default Transfer;
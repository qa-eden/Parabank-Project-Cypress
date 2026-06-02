class AccountOverview{
    
    clickAccountOverview()
    {
        cy.xpath("//a[normalize-space()='Accounts Overview']").click()
    }

    clickCreateAccount()
    {
        cy.xpath("//a[normalize-space()='Open New Account']").click()
    }

    selectCheckingAcct()
    {
        cy.xpath("//select[@id='type']")
        .select("CHECKING")
    }

    selectSavingAcct()
    {
        cy.xpath("//select[@id='type']")
        .select("SAVINGS")
    }

    selectFromAccount()
    {
        cy.get('select#fromAccountId').find('option').first()
        .then(($option) => {
        const accountId = $option.val()
        cy.get('select#fromAccountId').select(accountId)
    })
    }


    clickOpenAccount()
    {
        cy.xpath("//input[@value='Open New Account']").click()
    }

    verifyAccountOpened()
    {
        cy.xpath("//h1[normalize-space()='Account Opened!']")
        .should('have.text', "Account Opened!")
        cy.xpath("//a[@id='newAccountId']")
        .should('not.be.null')
    }

    verifyAccountsTableVisible()
    {
        cy.get('#accountTable').should('be.visible')
    }

    verifyAccountNumbersVisible()
    {
        cy.get('#accountTable > tbody > tr').should('have.length.greaterThan',0)
        cy.get('#accountTable tbody tr td:first-child a').each(($el)=>{
            cy.wrap($el).should('be.visible')
        })
    }

    verifyBalancesDisplayed(){
        cy.get('#accountTable tbody tr').each( ($row)=>{
            cy.wrap($row).find('td:nth-child(2)').should('not.be.empty')
        })
    }

    verifyAvailableAmountDisplayed(){
        cy.get('#accountTable tbody tr').each( ($row)=>{
            cy.wrap($row).find('td:nth-child(3)').should('not.be.empty')
        })
    }

verifyTotalBalance()
{
    let calculatedTotal = 0;

    cy.get('#accountTable tbody tr:not(:last) td:nth-child(2)')
        .each(($balance) => {

            const amount = Number(
                $balance.text()
                    .replace('$', '')
                    .replace(',', '')
            );

            calculatedTotal += amount;

        })
        .then(() => {

            cy.get('#accountTable tbody tr:last td:nth-child(2)')
                .invoke('text')
                .then((text) => {

                    const displayedTotal = Number(
                        text.replace('$', '')
                            .replace(/,/g, '')
                    );

                    expect(displayedTotal).to.equal(calculatedTotal);

                });

        });
}


    clickFirstAccountNumber()
    {
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    }
    
    verifyPageLoads()
    {
        cy.xpath("//h1[normalize-space()='Account Details']")
        .should('have.text', "Account Details")
    }

    verifyTransactionTableDisplayed()
    {
        cy.get('#transactionTable')
        .should('be.visible')
    }

}

export default AccountOverview;

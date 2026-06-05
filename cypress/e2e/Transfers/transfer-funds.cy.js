import Transfer from "../../pages/Transfer.js";
describe("Transfer Funds", ()=>{

    const Trf= new Transfer();
    beforeEach("Pre-Requisites", ()=>{
        cy.visit('/parabank/index.htm')
        cy.login('john','demo')
    })

    it("TC_Trans_001 - Transfer Funds Between Accounts Successfully", ()=>{
        Trf.clickTransferFunds() // Click the Transfer Fund
        Trf.inputAmount(100)
        Trf.selectFromAccount()
        Trf.selectToAccount()
        Trf.clickTransferbtn()
        Trf.validateSuccessMessage()
    })

    it("TC_Trans_002 - Transfer with Zero Amount", ()=>{
        Trf.clickTransferFunds()
        Trf.inputAmount(0)
        Trf.selectFromAccount()
        Trf.selectToAccount()
        Trf.validateErrorMessage()
    })

    it("TC_Trans_003 - Verify Transfer Confirmation Message", ()=>{
        Trf.clickTransferFunds() // Click the Transfer Fund
        Trf.inputAmount(50)
        Trf.selectFromAccount()
        Trf.selectToAccount()
        Trf.clickTransferbtn()
        Trf.validateSuccessMessage() // validate transfer success message
        Trf.validateAmount(50)
        Trf.validateFromAccountDisplayed()
        Trf.validateToAccountDisplayed()
    })

})
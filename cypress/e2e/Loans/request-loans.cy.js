import loan from "../../pages/LoanPage.js"

describe("Loans", ()=>{

    let userdata;
    const ln=new loan()
    beforeEach("Setup", ()=>{

        cy.fixture("loans")
        .then( (data)=>{
            userdata=data;
        })

        cy.visit('/parabank/index.htm')
        cy.login('john','demo')
    })

    it("TC_Loan_001 - Request a Loan Successfully", ()=>{
        ln.clickRequestLoan()
        ln.txtAmount(userdata.amount)
        ln.txtDownPayment(userdata.downPayment)
        ln.selectFromAccount()
        ln.clickApply()
        ln.validateSuccessMsg()
    })

    it("TC_Loan_002 - Loan Request with Insufficient Down Payment", ()=>{
        ln.clickRequestLoan()
        ln.txtAmount(userdata.invalidAmount)
        ln.txtDownPayment(userdata.invalidDownPayment)
        ln.selectFromAccount()
        ln.clickApply()
        ln.validateErrorMsg()
    })

    it("TC_Loan_003 - Request Loan with Zero Amount", ()=>{
        ln.clickRequestLoan()
        ln.txtAmount("0")
        ln.txtDownPayment("0")
        ln.selectFromAccount()
        ln.clickApply()
        ln.validateZeroErrorMsg()
    })    

    it("TC_Loan_004 - Verify Loan Approval Message", ()=>{
        ln.clickRequestLoan()
        ln.txtAmount(userdata.amount)
        ln.txtDownPayment(userdata.downPayment)
        ln.selectFromAccount()
        ln.clickApply()
        ln.validateSuccessMsg()
        ln.validateNewAccountDisplayed()

    })  

    it("TC_Loan_005 - Verify Loan with Denied Message", ()=>{
        ln.clickRequestLoan()
        ln.txtAmount(userdata.invalidAmount)
        ln.txtDownPayment(userdata.invalidDownPayment)
        ln.selectFromAccount()
        ln.clickApply()
        ln.validateErrorMsg()
        ln.validateErrorMsgDisplayed()
    })
})

import Login from "../PageObjects/LoginPage.js"; // To import the class

describe("Authentication", ()=>{

    const ln=new Login();
    let userdata;

    beforeEach("Launch Website",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        
        cy.fixture("parabank")
        .then((data)=>{
            userdata=data;
        })
    })

    it("TC_Auth_001 Login with Valid Credentials",()=>{
        ln.setUsername(userdata.username)
        ln.setPassword(userdata.password)
        ln.clickLoginbtn()
        ln.validatemsg(userdata.expected)
    })
    
    it("TC_Auth_002 Login with Empty Fields", ()=>{
        ln.setUsername(userdata.emptyusername)
        ln.setPassword(userdata.emptypassword)
        ln.clickLoginbtn()
        ln.validateEmptymsg(userdata.emptyExpected)
    })
})

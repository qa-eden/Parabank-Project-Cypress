class Login{
    setUsername(username)
    {
        if(username !== ""){
        cy.get("input[name='username']").type(username)
    }}

    setPassword(password)
    {
        if(password !== ""){
        cy.get("input[name='password']").type(password)
    }}

    clickLoginbtn()
    {
        cy.get("input[value='Log In']").click()
    }

    validatemsg(validation)
    {
        cy.get("div[id='leftPanel'] h2")
        .should('have.text',validation)
    }

    validateErrormsg(validation)
    {
        cy.get(".error")
        .should('have.text',validation)
    }

}

export default Login;
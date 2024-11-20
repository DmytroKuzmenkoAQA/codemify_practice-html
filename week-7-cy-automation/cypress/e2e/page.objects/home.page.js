class HomePage {

    get LogInBtn() {return cy.get('[href="/auth/login"]')}
    get RegistrBtn() {return cy.get('[href="/auth/register"]')}


    // Errors
    get mainErrorMessage() { return cy.get('[role="alert"]')}

}

export default new HomePage;


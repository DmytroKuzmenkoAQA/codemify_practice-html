class RegistrationPage {

    get firstNameInput() {return cy.get('[name="firstName"]')}

    get lastNameInput() {return cy.get('[name="lastName"]')}

    get emailInput() {return cy.get('[name="email"]')}

    get passwordInput() {return cy.get('[type="password"]')}
    
    get submitBtn() {return cy.get('[type="submit"]')}

    // Errors
    get errorNameInput() {return cy.get('[class*="MuiFormControl-root "] [id=":r1:-helper-text"]')}
    get errorLastNameInput() { return cy.get('[class*="MuiFormControl-root MuiFormControl-"] [id=":r2:-helper-text"]')}
    get errorEmailInput() { return cy.get('[class*="MuiFormControl-root MuiFormControl-"] [id=":r3:-helper-text"]')}
    get errorPasswordInput() { return cy.get('[class*="MuiFormControl-root MuiFormControl-"] [id=":r4:-helper-text"]')}
}

export default new RegistrationPage();
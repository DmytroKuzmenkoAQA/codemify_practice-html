class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[type="password"]');
  }
  get logInBtn() {
    return cy.contains("Login");
  }

  logingIn(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.logInBtn.click();
  }
}

export default new LoginPage();

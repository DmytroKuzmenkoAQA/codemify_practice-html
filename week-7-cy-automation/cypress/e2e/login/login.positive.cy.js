import loginPage from "../page.objects/login.page"

import dashboardPage from "../page.objects/dashboard.page"

import homePage from "../page.objects/home.page";

const email = "123456789test@yopmail.com";
const password = "!Qweqwe1";

describe('Login positive', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('User log in', () => {
      // Fill out the field and log in
      homePage.LogInBtn.click()
      loginPage.emailInput.type(email)
      loginPage.passwordInput.type(password)
      loginPage.logInBtn.click()

      // Check that user loged in succesfully
      dashboardPage.roleLbl.should('have.text', 'role: user')
      cy.title().should('eq', 'User: Profile | Delek Homes')
      dashboardPage.userName.should('have.text', 'Dmytro  Kuzmenko')
    })
})
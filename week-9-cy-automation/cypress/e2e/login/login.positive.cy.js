import loginPage from "../page.objects/login.page"

import dashboardPage from "../page.objects/dashboard.page"

import homePage from "../page.objects/home.page";

import data from "../../fixtures/data.json"
import 'cypress-wait-for-stable-dom';


let user

describe('Login positive', () => {

  before(() => {
    cy.fixture('data.json').then((data) => {
      user = data
    })
  })
  
  beforeEach(() => {
      cy.visit(data.baseUrl)
    })
  
    it('User log in', () => {
      // Fill out the field and log in
      homePage.LogInBtn.click()
      loginPage.emailInput.type(data.email)
      loginPage.passwordInput.type(data.password)
      loginPage.logInBtn.click()

      // Check that user loged in succesfully
      dashboardPage.roleLbl.should('have.text', 'role: user')
      cy.title().should('eq', 'User: Profile | Delek Homes')
      dashboardPage.userName.should('have.text', 'Dmytro  Kuzmenko')
    })
})
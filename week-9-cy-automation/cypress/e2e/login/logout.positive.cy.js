import loginPage from "../page.objects/login.page";

import dashboardPage from "../page.objects/dashboard.page";

import homePage from "../page.objects/home.page";

import data from "../../fixtures/data.json"

let user

describe("Logout positive", () => {

  before(() => {
    cy.fixture('data.json').then((data) => {
      user = data
    })
  })

  beforeEach(() => {
    cy.visit(data.baseUrl);
  });

  it("User log out", () => {
    // After succesfull login user on profile page
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
    homePage.LogInBtn.click()
    loginPage.logingIn(data.email, data.password);

    dashboardPage.userIcon.click();
    dashboardPage.logOutBtn.click();

    // Check that log out happens sucessfully
    cy.title().should("eq", "Login | Delek Homes");
    loginPage.logInBtn.should("be.visible");
  });
});

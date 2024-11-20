import loginPage from "../page.objects/login.page";

import dashboardPage from "../page.objects/dashboard.page";

import homePage from "../page.objects/home.page";

const email = "123456789test@yopmail.com";
const password = "!Qweqwe1";

describe("Logout positive", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User log out", () => {
    // After succesfull login user on profile page
    homePage.LogInBtn.click()
    loginPage.logingIn(email, password);

    dashboardPage.userIcon.click();
    dashboardPage.logOutBtn.click();

    // Check that log out happens sucessfully
    cy.title().should("eq", "Login | Delek Homes");
    loginPage.logInBtn.should("be.visible");
  });
});

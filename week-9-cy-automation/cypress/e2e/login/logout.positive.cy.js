import loginPage from "../page.objects/login.page";

import dashboardPage from "../page.objects/dashboard.page";

import homePage from "../page.objects/home.page";

import data from "../../fixtures/data.json";

let user;

describe("Logout positive", () => {
  before(() => {
    cy.request("POST", "https://dev.delekhomes.com/api/users/login", {
      email: "123456789test@yopmail.com",
      password: "!Qweqwe1",
    }).then((response) => {
      expect(response.status).to.be.eq(201);
      cy.log(response.body.accessToken);
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  });

  it("User log out", () => {
    // After succesfull login user on profile page
    cy.visit("https://dev.delekhomes.com/dashboard");

    dashboardPage.userIcon.click();
    dashboardPage.logOutBtn.click();

    // Check that log out happens sucessfully
    cy.title().should("eq", "Login | Delek Homes");
    loginPage.logInBtn.should("be.visible");
  });
});

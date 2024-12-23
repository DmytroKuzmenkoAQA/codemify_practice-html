import { fa, faker } from "@faker-js/faker";
import homePage from "../page.objects/home.page";
import registrationPage from "../page.objects/registration.page";
import dashboardPage from "../page.objects/dashboard.page";
import data from "../../fixtures/test.data.json";

let user

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Registration new user", () => {
  before(() => {
    cy.fixture("test.data.json").then((data) => {
      user = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.baseUrl);
  });

  it("User registration", () => {
    homePage.RegistrBtn.click();
    // Fill out the field related registration
    registrationPage.accountRegistration(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );

    // Check that registration happens and user proceed to user profile page
    dashboardPage.roleLbl.should("have.text", "role: user");
    // cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
    dashboardPage.userName.should('include.text', userData.firstName)
    dashboardPage.userName.should('include.text', userData.lastName)
  });
});

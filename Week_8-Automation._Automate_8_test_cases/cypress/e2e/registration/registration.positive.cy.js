import { faker } from '@faker-js/faker';  
import homePage from '../page.objects/home.page';
import registrationPage from '../page.objects/registration.page';
import dashboardPage from '../page.objects/dashboard.page';

const name = faker.person.fullName();
const email = faker.internet.email();

describe("Registration new user", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User registration", () => {
    homePage.RegistrBtn.click()
    // Fill out the field related registration
    registrationPage.firstNameInput.type("Dmytro");
    registrationPage.lastNameInput.type("Kuzmenko");
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type("!Qweqwe1");
    registrationPage.submitBtn.click()

    // Check that registration happens and user proceed to user profile page
    dashboardPage.roleLbl.should("have.text", "role: user");
    // cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
});

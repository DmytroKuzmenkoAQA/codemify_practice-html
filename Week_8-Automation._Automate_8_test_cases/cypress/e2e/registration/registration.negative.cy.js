import { faker } from "@faker-js/faker";
import registrationPage from "../page.objects/registration.page";
import homePage from "../page.objects/home.page";

const email = "123456789test@yopmail.com";
const password = "!Qweqwe1";

describe("Registration negative cases", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  it("User cannot register with already registered account", () => {
    // Check that user input already existing account
    registrationPage.firstNameInput.type("Dmytro");
    registrationPage.lastNameInput.type("Kuzmenko");
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);
    registrationPage.submitBtn.click()

    // Check that registration with the same account is not happens
    homePage.mainErrorMessage.should("have.text", "Input data validation failed");
  });

  it("User cannot register with empty fields", () => {
    
    registrationPage.submitBtn.click()

    // Errors shown for every empty input
    registrationPage.errorNameInput.should("have.text","First name required" );
    registrationPage.errorLastNameInput.should("have.text", "Last name required");
    registrationPage.errorEmailInput.should("have.text", "Email is required");
    registrationPage.errorPasswordInput.should("have.text", "Password is required");
    
  });
});

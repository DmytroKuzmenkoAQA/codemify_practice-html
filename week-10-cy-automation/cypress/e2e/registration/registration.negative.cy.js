import registrationPage from "../page.objects/registration.page";
import homePage from "../page.objects/home.page";
import data from "../../fixtures/test.data.json"

let user

describe("Registration negative cases", () => {

  before(() => {
    cy.fixture('test.data.json').then((data) => {
      user = data
    })
  })

  
  beforeEach(() => {
    cy.visit(`${data.baseUrl}/auth/register`);
    cy.NewExceptionForTest();
  });

  it("User cannot register with already registered account", () => {
    // Check that user input already existing account
    registrationPage.firstNameInput.type("Dmytro");
    registrationPage.lastNameInput.type("Kuzmenko");
    registrationPage.emailInput.type(data.email);
    registrationPage.passwordInput.type(data.password);
    registrationPage.submitBtn.click()

    // Check that registration with the same account is not happens
    homePage.mainErrorMessage.should("have.text", "Input data validation failed");
  });

  it.only("User cannot register with empty fields", () => {
    
    registrationPage.submitBtn.click()

    // Errors shown for every empty input
    cy.fixture("messages.json").then((data) => {
       registrationPage.errorNameInput
        .should("have.text", data.errorNameInput),
        registrationPage.errorLastNameInput
        .should("have.text", data.errorLastNameInput),
        registrationPage.errorEmailInput
        .should("have.text", data.errorEmailInput),
        registrationPage.errorPasswordInput
        .should("have.text", data.errorPasswordInput);
    })
  });
});

const email = "test" + Math.floor(Math.random() * 100) + "@yopmail.com";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  it("User registration", () => {
    // Fill out the field related registration
    cy.get('[name="firstName"]').type("Dmytro");
    cy.get('[name="lastName"]').type("Kuzmenko");
    cy.get('[name="email"]').type(email);
    cy.get('[type="password"]').type("!Qweqwe1");
    cy.get('[type="submit"]').click();

    // Check that registration happens and user proceed to user profile page
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("User cannot register with already registered account", () => {
    // Check that user input already existing account
    cy.get('[name="firstName"]').type("Dmytro");
    cy.get('[name="lastName"]').type("Kuzmenko");
    cy.get('[name="email"]').type(email);
    cy.get('[type="password"]').type("!Qweqwe1");
    cy.get('[type="submit"]').click();

    // Check that registration with the same account is not happens
    cy.get('[role="alert"]').should("have.text","Input data validation failed");
    //cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("User cannot register with empty fields", () => {
    //
    // cy.get('[name="firstName"]').type("Dmytro");
    // cy.get('[name="lastName"]').type("Kuzmenko");
    // cy.get('[name="email"]').type(email);
    // cy.get('[type="password"]').type("!Qweqwe1");
    cy.get('[type="submit"]').click();

    //
    cy.get('[class*="MuiFormControl-root "] [id=":r1:-helper-text"]').should("have.text","First name required");
    cy.get('[class*="MuiFormControl-root MuiFormControl-"] [id=":r2:-helper-text"]').should("have.text","Last name required");
    cy.get('[class*="MuiFormControl-root MuiFormControl-"] [id=":r3:-helper-text"]').should("have.text","Email is required");
    cy.get('[class*="MuiFormControl-root MuiFormControl-"] [id=":r4:-helper-text"]').should("have.text","Password is required");
  });
});

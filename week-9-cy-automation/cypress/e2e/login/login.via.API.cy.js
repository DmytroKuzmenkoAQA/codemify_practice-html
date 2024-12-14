import data from "../../fixtures/data.json"


describe("Login Api Test", () => {
    before(() => {
        // Log in using API request
        cy.request('POST', "https://dev.delekhomes.com/api/users/login", {
            email: "123456789test@yopmail.com",
            password: "!Qweqwe1",
          }).then((response) => {
            expect(response.status).to.be.eq(201);
            cy.log(response.body.accessToken)
            window.localStorage.setItem('accessToken', response.body.accessToken)
          });
    })
  it("Check Login vai API request", () => {
    cy.visit(data.baseUrl)
    //Check that user logged in via API
    cy.get('[class="css-1xhj18k"]').should('not.have.value', 'Login')
    cy.get('[class="css-1xhj18k"]').should('not.have.value', 'Register')
  });
});

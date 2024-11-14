describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('/auth/login')
    })
  
    it('User log in', () => {
      // Fill out the field and log in
      cy.get('[name="email"]').type('123456789test@yopmail.com')
      cy.get('[type="password"]').type("!Qweqwe1")
      cy.contains('Login').click()

      // Check that user loged in succesfully
      cy.get('a p').should('have.text', 'role: user')
      cy.title().should('eq', 'User: Profile | Delek Homes')
      cy.get('h6').should('have.text', 'dk  test')
    })

    it('User log out', () => {
      // After succesfull login user on profile page 
      cy.get('[name="email"]').type('123456789test@yopmail.com')
      cy.get('[type="password"]').type("!Qweqwe1")
      cy.contains('Login').click()
      cy.get('button [data-testid="PersonIcon"]').click()
      cy.contains('Logout').click()

      // Check that log out happens sucessfully
      cy.title().should('eq', "Login | Delek Homes")
      cy.contains('Login').should('be.visible')
    })
})
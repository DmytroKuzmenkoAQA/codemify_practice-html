class Dashboard {

    get roleLbl() {return cy.get('a p')}
    get userName() {return cy.get('h6')}


    get userIcon() {return cy.get('button [class="MuiAvatar-root MuiAvatar-circular css-inlwhr"]')}
    get logOutBtn() {return cy.contains('Logout')}
    

}

export default new Dashboard();
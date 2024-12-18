class DashboardPage {

    get roleLbl() {return cy.get('a p')}
    get userName() {return cy.get('h6')}
    get userIcon() {return cy.get('button [data-testid="PersonIcon"]')}
    get logOutBtn() {return cy.contains('Logout')}
}

export default new DashboardPage();
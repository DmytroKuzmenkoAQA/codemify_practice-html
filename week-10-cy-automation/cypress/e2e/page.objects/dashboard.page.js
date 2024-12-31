class DashboardPage {

    get roleLbl() {return cy.get('a p')}
    get userName() {return cy.get('h6')}
    get userIcon() {return cy.get('button [class*="MuiAvatar-root MuiAvatar"] [class="MuiAvatar-img css-1hy9t21"]')}
    get logOutBtn() {return cy.contains('Logout')}
    get dhIcon() { return cy.get('a [class="MuiBox-root css-7f92zp"][src]')}
}

export default new DashboardPage();
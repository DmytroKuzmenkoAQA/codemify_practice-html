class createListing {

    get inputFieldTitle() { return cy.get('[name="title"]')}
    get inputFieldDescription() { return cy.get('[name="description"]')}
    get inputFieldCity() { return cy.get('[name="city"]')}
    get inputFieldAdress() { return cy.get('[name="address"]')}
    get inputFieldZipCode() { return cy.get('[name="zipCode"]')}
    get inputFieldState() { return cy.get('[class*="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary"] [aria-haspopup="listbox"]')}
    get dropDownStates() { return cy.get('[role="listbox"]')}
    get browseImage() { return cy.get('input[accept="image/*"]')}
    get publichToogle() { return cy.get('[name="isPublished"]')}
    get inputFieldPrice() { return cy.get('[name="price"]')}
    get inputFieldBedrooms() { return cy.get('[name="bedrooms"]')}
    get inputFieldBathrooms() { return cy.get('[name="bathrooms"]')}
    get inputFieldGarage() { return cy.get('[name="garage"]')}
    get inputFieldSquareFit() { return cy.get('[name="sqft"]')}
    get inputFieldLotSize() { return cy.get('[name="lotSize"]')}
    get buttonPost() { return cy.get('button[type="submit"]')}

    
}

export default new createListing();
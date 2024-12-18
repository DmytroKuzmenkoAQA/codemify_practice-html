class searchPage {

    get inputFieldSearch() { return cy.get('[id=":r1:"]')}    

    get searchfieldBadroomsDropDown() { return cy.get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 css-o0rlmm"] [variant="outlined"]')};

    get searchfieldStateDropDown() { return cy.get('[variant="outlined"] [class="MuiSelect-nativeInput css-1k3x8v3"]').contains('State')}

    get searchFieldCity() { return cy.get('[class*="MuiFormControl-root MuiFormControl"] [id=":r4:"]')}

    get buttonSearch() { return cy.get("button [role='img']")}

    get buttonMoreInfo() { return cy.get('[class="MuiBox-root css-xi606m"] [tabindex="0"]')}

    get dropDownBedroomsNumber() { return cy.get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 css-o0rlmm"] [variant="outlined"]')};

    get dropDownBedroomsOption2() { return cy.get("[data-value='2']")}

    get itemsInSearchList() {return cy.get(".MuiCard-root")}

    get titleOfMtListing() {return cy.get('[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-b7x1vi"] h5')}

    get additionalListingInfo() {return cy.get('[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-1na5d0x"]')}

}

export default new searchPage()
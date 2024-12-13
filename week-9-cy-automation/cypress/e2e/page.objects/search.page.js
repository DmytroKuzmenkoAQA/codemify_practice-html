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

}

export default new searchPage()
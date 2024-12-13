class PrivateSearchPage {

  get bedroomsDropDown() {
    return cy.get(
      '[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 css-o0rlmm"] [variant="outlined"]'
    );
  }

  get bedroomOption4() {
    return cy.get("[data-value='4']");
  }

  get startSearchButton() {
    return cy.get("button [role='img']");
  }

  get itemsInList() {
    return cy.get(".MuiCard-root");
  }

  get clickNextPage() {
    return cy.get(
      '[aria-label="pagination navigation"] button[aria-label="Go to next page"] span'
    );
  }

  get dateOfPlacing() {
    return cy.get('[class*="MuiTypography-root MuiTypography-caption"]');
  }

  // get firstIteminList() { return cy.get("[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r']")}
  collectAllBedroomsOnThePage(bedrooms) {
    this.itemsInList.each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const match = text.split("Bedrooms: ")[1];
          if (match) {
            bedrooms.push(parseInt(match.split(" ")[0], 10));
          }
        });
    });
  }

  datesCollect() {
    let earliestDate = new Date(8640000000000000);

    this.dateOfPlacing.each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          cy.log(text);
          if (earliestDate > this.parseDate(text)) {
            earliestDate = this.parseDate(text);
            console.log(`earliest Date Value ${earliestDate}`);
          }
        });
    });
  }

  parseDate(dateString) {
    // Split the date into parts: day, month, year
    const [day, month, year] = dateString.split(" ");

    // Create a new Date object using JavaScript
    return new Date(`${month} ${day}, ${year}`);
  }

  moveToNextPage() {
    this.clickNextPage.click({ force: true });
  }
}

export default new PrivateSearchPage();

import searchPage from "../page.objects/search.page";

let bedrooms = [];

describe("Search by different data", () => {
  beforeEach(() => {
    cy.visit(
      "https://dev.delekhomes.com/featured-listings?price=500000-10000000"
    );
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.get('[type="checkbox"]').click();
  });

  it("Search by keyword", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    searchPage.inputFieldSearch.click();
    searchPage.inputFieldSearch.type("Martislut");
    searchPage.buttonSearch.click();

    cy.get('[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-b7x1vi"] h5')
      .invoke("text")
      .should("eq", "Property for Test DK");
  });

  it("Search by number of bedrooms(2)", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    searchPage.inputFieldSearch.click();
    searchPage.dropDownBedroomsNumber.click();
    searchPage.dropDownBedroomsOption2.click();
    searchPage.buttonSearch.click();


    searchPage.itemsInSearchList.each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const match = text.split("Bedrooms: ")[1];
          if (match) {
            bedrooms.push(parseInt(match.split(" ")[0], 10));
          }
        });
    });

    cy.then(() => {
      bedrooms.forEach((element) => {
        expect(element).to.be.at.least(2);
      });
    });
  });

  it("Search by the City", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    searchPage.inputFieldSearch.click();
    searchPage.searchFieldCity.click()
    searchPage.searchFieldCity.type('Kyiv')
    searchPage.buttonSearch.click();

    cy.get('[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-1na5d0x"]')
      .invoke("text")
      .then((text) => {
        expect(text).to.include("City: Kyiv");
        expect(text).to.include("State: CA");
        expect(text).to.include("Zip/Code: 3037");

      })
  })

  it("Search by the Price", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    cy.visit('https://dev.delekhomes.com/featured-listings?price=1400000-1600000')

    cy.get('[class*="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"] [class="MuiBox-root css-79elbk"]').invoke('text')
    .then((text) => {
      expect(text).to.include("$ 1,500,000")
    })

  })
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});

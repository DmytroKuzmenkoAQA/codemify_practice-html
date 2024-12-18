/// <reference types="Cypress" />

import searchPage from "../page.objects/search.page";
import data from "../../fixtures/data.json"

let user
let bedrooms = [];

describe("Search by different data", () => {

  before(() => {
    cy.fixture("data.json").then((data) => {
      user = data;
    });
  });

  beforeEach(() => {
    cy.NewExceptionForTest();
    cy.visit(
      `${data.baseUrl}/featured-listings?price=500000-10000000`
    );
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.get('[type="checkbox"]').click();
  });

  it("Search by keyword", () => {
    // Write search word in input field and click search button
    searchPage.inputFieldSearch.click();
    searchPage.inputFieldSearch.type("Martislut");
    searchPage.buttonSearch.click();

    // Check that listing include search word
    searchPage.titleOfMtListing
      .invoke("text")
      .should("eq", "Property for Test DK");
  });

  it("Search by number of bedrooms(2)", () => {

    // Start search by number of bedrooms
    searchPage.inputFieldSearch.click();
    searchPage.dropDownBedroomsNumber.click();
    searchPage.dropDownBedroomsOption2.click();
    searchPage.buttonSearch.click();

    // Collect bedrooms number for the listing
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

    // Check value os bedrooms for every listing is bigger that searched
    cy.then(() => {
      bedrooms.forEach((element) => {
        expect(element).to.be.at.least(2);
      });
    });
  });

  it("Search by the City", () => {

    // Start search by the city
    searchPage.inputFieldSearch.click();
    searchPage.searchFieldCity.click()
    searchPage.searchFieldCity.type('Kyiv')
    searchPage.buttonSearch.click();

    // Check that searching city is present in listing
    searchPage.additionalListingInfo
      .invoke("text")
      .then((text) => {
        expect(text).to.include(data.cityInListing);
        expect(text).to.include(data.stateInListing);
        expect(text).to.include(data.zipCodeOfListing);

      })
  })

  it("Search by the Price", () => {

    // Visit require price range
    cy.visit(`${data.baseUrl}/featured-listings?price=1400000-1600000`)

    // Check that our listing is present in range of price
    cy.get('[class*="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"] [class="MuiBox-root css-79elbk"]').invoke('text')
    .then((text) => {
      const tmp = parseInt(text.replace("$ ", "").replace(/,/g, ""), 10);
      expect(tmp).to.be.above(1400000)
      expect(tmp).to.be.below(1600000)
    })
    cy.get('[class="MuiCardContent-root css-lmipfk"]').invoke('text').then((text) => {
      expect(text).to.include("City: Lake Forest");
    })
  })
});

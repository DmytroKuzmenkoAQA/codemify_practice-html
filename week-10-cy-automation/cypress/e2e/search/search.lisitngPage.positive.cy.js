// / <reference types="Cypress" />

import searchPage from "../page.objects/search.page";
import data from "../../fixtures/test.data.json";

let bedrooms = [];
let accessToken;
let numberOfListing;

describe("Search by different data", () => {
  beforeEach(() => {
    cy.NewExceptionForTest();
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(`${data.baseUrl}/featured-listings?price=500000-10000000`);
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.get('[type="checkbox"]').click();
  });

  after(() => {
    cy.request({
      method: "DELETE",
      url: data.baseUrl + "/api/estate-objects/" + numberOfListing,
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200);
    });
  });

  it("Search by keyword in the listing page", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    // Start search by the keyword input
    searchPage.inputFieldSearch.click();
    searchPage.inputFieldSearch.type(data.descriptionForListing);
    searchPage.buttonSearch.click();
    searchPage.buttonMoreInfo.click();

    // Check that our listing have searched keyword
    cy.get('[class*="MuiBox-root css-px"]')
      .invoke("text")
      .should("eq", data.descriptionForListing);
  });

  it("Search by number of bedrooms in the listing page", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    // Start search by the number of bedrooms (2+)
    searchPage.inputFieldSearch.click();
    searchPage.dropDownBedroomsNumber.click();
    searchPage.dropDownBedroomsOption2.click();
    searchPage.buttonSearch.click();
    searchPage.buttonMoreInfo.eq(1).click();

    // Check that out listing is have the searched number of bedrooms
    cy.get(
      '[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]'
    ).each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const match = text.split("Bedrooms: ")[1];
          if (match) {
            bedrooms.push(parseInt(match.split(" ")[0], 10));
          }
        });

      cy.then(() => {
        bedrooms.forEach((element) => {
          expect(element).to.be.at.least(2);
        });
      });
    });
  });

  it("Search by the City", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    // Start search by the City ('TestCity')
    searchPage.inputFieldSearch.click();
    searchPage.searchFieldCity.click();
    searchPage.searchFieldCity.type(data.cityForListingCreation);
    searchPage.buttonSearch.click();
    searchPage.buttonMoreInfo.click();

    // Check that searched City is present in Listing
    cy.get('[class*="MuiPaper-root MuiPaper-elevation MuiPaper-ro"] p').should(
      "include.text",
      "Dmytro Kuzmenko"
    );
    cy.get(
      '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm"] p '
    ).should("include.text", "Test Adress");
    cy.get('[class*="MuiBox-root css-px"]')
      .invoke("text")
      .should("eq", data.descriptionForListing);

    cy.url().then((url) => {
      const lastSlashIndex = url.lastIndexOf("/");
      numberOfListing = url.slice(lastSlashIndex + 1);
    });
  });
});

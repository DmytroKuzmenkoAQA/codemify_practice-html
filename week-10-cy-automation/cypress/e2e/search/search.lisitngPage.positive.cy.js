// / <reference types="Cypress" />

import searchPage from "../page.objects/search.page";
import data from "../../fixtures/test.data.json";

let bedrooms = [];
let accessToken;
let numberOfListing;

describe("Search by different data", () => {
  before(() => {
    // Login request to fetch access token
    cy.request('POST', "https://dev.delekhomes.com/api/users/login", {
      email: "123456789test@yopmail.com",
      password: "!Qweqwe1",
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.log('Access Token:', response.body.accessToken);
      accessToken = response.body.accessToken; // Store the access token
    });
  
    // Ensure fixture data is loaded before proceeding
    cy.fixture("test.data.json").then((data) => {
      cy.fixture("Test image.jpg", "binary").then((file) => {
        const blob = Cypress.Blob.binaryStringToBlob(file);
        const formData = new FormData();
  
        // Append form data
        formData.append("images", blob, "Test image.jpg");
        formData.append("title", data.titleForListing);
        formData.append("description", data.descriptionForListing);
        formData.append("address", data.adressForListingCreation);
        formData.append("city", data.cityForListingCreation);
        formData.append("state", data.stateForListingCreation);
        formData.append("zipCode", data.zipCodeForListingCreation);
        formData.append("price", data.priceForListingCreation);
        formData.append("bedrooms", data.numberofBedroomsForListingCreation);
        formData.append("bathrooms", data.numberofBathroomsForListingCreation);
        formData.append("garage", data.numberGarageForListingCreation);
        formData.append("sqft", data.numberSQRTForListingCreation);
        formData.append("lotSize", data.numberLotSizeForListingCreation);
        formData.append("isPublished", true);
  
        // Send POST request to create listing
        cy.request({
          method: "POST",
          url: `${data.baseUrl}/api/estate-objects`,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Correctly use the Authorization header
          },
          body: formData,
        }).then((response) => {
          expect(response.status).to.eq(201);
          numberOfListing = JSON.parse(
            String.fromCharCode.apply(null, new Uint8Array(response.body))
          ).id; // Parse and store the listing ID
        });
      });
    });
  });
  

  beforeEach(() => {
    // new test exception from commands.js
    cy.NewExceptionForTest();
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
  });
});

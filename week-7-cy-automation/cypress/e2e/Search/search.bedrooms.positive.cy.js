/// <reference types="Cypress" />

import loginPage from "../page.objects/login.page";

import dashboardPage from "../page.objects/dashboard.page";

import homePage from "../page.objects/home.page";

import searchPage from "../page.objects/search.page";

let bedrooms = [];
let count = 0;
let earliestDate = null;

describe("Search bedrooms", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search 4+ Bedrooms", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    homePage.searchButton.click();
    searchPage.bedroomsDropDown.click();
    searchPage.bedroomOption4.click();
    searchPage.startSearchButton.click();

    searchPage.collectAllBedroomsOnThePage(bedrooms);

    // searchPage.itemsInList.each(($el) => {
    //   // Look for text that includes "Bedrooms: " within each result
    //   cy.wrap($el)
    //     .invoke("text")
    //     .then((text) => {
    //       // Extract the number of bedrooms using keyword
    //       const match = text.split("Bedrooms: ")[1];
    //       if (match) {
    //         const bedroomValue = parseInt(match.split(" ")[0], 10);
    //         bedrooms.push(bedroomValue);
    //         cy.log("Value of Bedrooms" + bedrooms);
    //         if (bedroomValue >= 4) {
    //           count++;
    //           cy.log("Count incremented to: " + count);
    //         }
    //       }
    //     });
    // });

    // collectAllBadroomsOnThePage();

    searchPage.moveToNextPage()
    searchPage.collectAllBedroomsOnThePage(bedrooms)

    cy.then(() => {
      cy.log("Value of Bedrooms" + bedrooms);
      // cy.log("Value of count " + count);
      // expect(count).to.be.at.least(1);
      expect(bedrooms.length).to.be.at.least(9); // Ensure 3 results have exactly 4 bedrooms
      bedrooms.forEach((bedrooms) => {
        expect(bedrooms).to.be.at.least(4); // Validate each bedrooms count
      });
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("Search earlest time for placing", () => {
    homePage.searchButton.click();
    searchPage.bedroomsDropDown.click();
    searchPage.bedroomOption4.click();
    searchPage.startSearchButton.click();

    searchPage.datesCollect();
    searchPage.clickNextPage.then(($btn) => {
      cy.wrap($btn)
        .invoke("prop", "disabled")
        .then((isDisabled) => {
          if (!isDisabled) {
            searchPage.moveToNextPage();
            searchPage.datesCollect();
          }
        });
    });
  });
});

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
    // Login request to fetch access token
    cy.request("POST", "https://dev.delekhomes.com/api/users/login", {
      email: "123456789test@yopmail.com",
      password: "!Qweqwe1",
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.log("Access Token:", response.body.accessToken);
      accessToken = response.body.accessToken; // Store the access token
    });

    // Ensure fixture data is loaded before proceeding
    cy.fixture("test.data.json").then((data) => {
      cy.fixture("Test image.jpg", "binary").then((file) => {
        const blob = Cypress.Blob.binaryStringToBlob(file);
        const formData = new FormData();

        // Append form data
        formData.append("images", blob);
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
      })

    cy.visit(`${data.baseUrl}/featured-listings?price=500000-10000000`);
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.get('[type="checkbox"]').click();
  });
})

  afterEach(() => {
    cy.request({
      method: "DELETE",
      url: data.baseUrl + "/api/estate-objects/" + numberOfListing,
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200);
    });
  });

  it("Search by keyword", () => {
    // Write search word in input field and click search button
    searchPage.inputFieldSearch.click();
    searchPage.inputFieldSearch.type(data.titleForListing);
    searchPage.buttonSearch.click();

    // Check that listing include search word
    searchPage.titleOfMtListing
      .invoke("text")
      .should("include", data.titleForListing);
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
    searchPage.searchFieldCity.click();
    searchPage.searchFieldCity.type(data.cityForListingCreation);
    searchPage.buttonSearch.click();

    // Check that searching city is present in listing
    searchPage.additionalListingInfo.invoke("text").then((text) => {
      expect(text).to.include(data.cityForListingCreation);
      expect(text).to.include(data.stateForListingCreation);
      expect(text).to.include(data.zipCodeForListingCreation);
    });
  });
});

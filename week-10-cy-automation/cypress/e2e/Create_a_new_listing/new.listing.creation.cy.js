import data from "../../fixtures/test.data.json";
import createListingPage from "../page.objects/create.listing.page";
import "cypress-file-upload";
import homePage from "../page.objects/home.page";
import searchPage from "../page.objects/search.page";

let accessToken;
let numberOfListing;

describe("Creating new Listings", () => {
  before(() => {
    // Log in using API request
    cy.request("POST", "https://dev.delekhomes.com/api/users/login", {
      email: data.email,
      password: data.password,
    }).then((response) => {
      expect(response.status).to.be.eq(201);
      window.localStorage.setItem("accessToken", response.body.accessToken);
      accessToken = response.body.accessToken;
    });
    cy.visit(`${data.baseUrl}/dashboard/real-estate/new`);
  });

  afterEach(() => {
    cy.request({
      method: "DELETE",
      url: data.baseUrl + "/api/estate-objects/" + numberOfListing,
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200);
    });
  });

  it("Create a new Listing via UI", () => {
    //Fill up the fields for listing
    createListingPage.inputFieldTitle.click().type(data.titleForListing);
    createListingPage.inputFieldDescription
      .click()
      .type(data.descriptionForListing);
    createListingPage.inputFieldCity.click().type(data.cityForListingCreation);
    createListingPage.inputFieldAdress
      .click()
      .type(data.adressForListingCreation);
    createListingPage.inputFieldZipCode
      .click()
      .type(data.zipCodeForListingCreation);
    createListingPage.inputFieldState.click({ force: true });
    createListingPage.dropDownStates.contains("Colorado").click();

    createListingPage.browseImage.attachFile({
      filePath: "Test image.jpg",
      fileName: "Test image.jpg",
    });

    createListingPage.inputFieldPrice
      .click()
      .type(data.priceForListingCreation);
    createListingPage.inputFieldBedrooms
      .click()
      .type(data.numberofBedroomsForListingCreation);
    createListingPage.inputFieldBathrooms
      .click()
      .type(data.numberofBathroomsForListingCreation);
    createListingPage.inputFieldGarage
      .click()
      .type(data.numberGarageForListingCreation);
    createListingPage.inputFieldSquareFit
      .click()
      .type(data.numberSQRTForListingCreation);
    createListingPage.inputFieldLotSize
      .click()
      .type(data.numberLotSizeForListingCreation);
    createListingPage.publichToogle.click();
    createListingPage.buttonPost.click();

    cy.visit("https://dev.delekhomes.com/");

    // // Navigate to newly created listing
    homePage.searchButton.click();
    searchPage.inputFieldSearch.click();
    searchPage.inputFieldSearch.type(data.titleForListing);
    searchPage.buttonSearch.click();

    searchPage.buttonMoreInfo.click();

    cy.url().then((url) => {
      const lastSlashIndex = url.lastIndexOf("/");
      numberOfListing = url.slice(lastSlashIndex + 1);
    });

    cy.get('[class*="MuiPaper-root MuiPaper-elevation MuiPaper-ro"] p').should(
      "include.text",
      "Dmytro Kuzmenko"
    );
    cy.get(
      '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm"] p '
    ).should("include.text", "Test Adress");
    cy.get('[class*="MuiBox-root css-px"]')
      .invoke("text")
      .should("eq", "Test description for first Listing");
  });

  it("Create a new Listing via API", () => {
    cy.fixture("Test image.jpg", "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file);

      const formData = new FormData();

      // formData.append('Test image.jpg', blob);
      formData.append("images", blob, "Test image.jpg");
      formData.append("title", data.titleForListing);
      formData.append("description", data.descriptionForListing);
      formData.append("address", data.adressForListingCreation);
      formData.append("city", data.cityForListingCreation);
      formData.append("state", "CA");
      formData.append("zipCode", data.zipCodeForListingCreation);
      formData.append("price", data.priceForListingCreation);
      formData.append("bedrooms", data.numberofBedroomsForListingCreation);
      formData.append("bathrooms", data.numberofBathroomsForListingCreation);
      formData.append("garage", data.numberGarageForListingCreation);
      formData.append("sqft", data.numberSQRTForListingCreation);
      formData.append("lotSize", data.numberLotSizeForListingCreation);
      formData.append("isPublished", true);

      cy.request({
        method: "POST",
        url: `${data.baseUrl}/api/estate-objects`,
        Authorization: `Bearer ${accessToken}`,
        body: formData,
      }).then((response) => {
        expect(response.status).to.eq(201);
        numberOfListing = JSON.parse(
          String.fromCharCode.apply(null, new Uint8Array(response.body))
        ).id;
      });
    });
  });
});

import {
  When, Then
} from "@badeball/cypress-cucumber-preprocessor";
const geoLocationEndPoint = Cypress.env("geoLocationEndPoint");
const invalidApiKey = Cypress.env("invalidApiKey");
const expiredApiKey = Cypress.env("expiredApiKey");
const apiKey = Cypress.env("apiKey");

When(/^I make post request the geo location endpoint with invalid apiKey$/, () => {
  cy.request({
    method: "POST",
    url: geoLocationEndPoint,
    failOnStatusCode: false,
    qs: {
      key: invalidApiKey
    },
  },).then((response) => {
    cy.wrap(response).as("response");
  })
});

When(/^I make post request the geo location endpoint with expired apiKey$/, () => {
  cy.request({
    method: "POST",
    url: geoLocationEndPoint,
    failOnStatusCode: false,
    qs: {
      key: expiredApiKey
    },
  },).then((response) => {
    cy.wrap(response).as("response");
  })
});

When(/^I make post request the geo location endpoint with request body$/, () => {
  cy.fixture('payloads/geolocation.json').then((requestBody) => {
    cy.request({
      method: "POST",
      url: geoLocationEndPoint,
      failOnStatusCode: false,
      qs: {
        key: apiKey
      },
      body: requestBody
    },).then((response) => {
      cy.wrap(response).as("response");
    })
  })
});

Then(/^I should get the geo location latitude information$/, () => {
  cy.get("@response").then((response: any) => {
    expect(response.body).to.have.property('location')
    expect(response.body.location).to.have.property('lat')
  });
});

Then(/^I should get the geo location longitude information$/, () => {
  cy.get("@response").then((response: any) => {
    expect(response.body).to.have.property('location')
    expect(response.body.location).to.have.property('lng')
  });
});

Then(/^I should get the geo location accuracy information$/, () => {
  cy.get("@response").then((response: any) => {
    expect(response.body).to.have.property('accuracy')
  });
});


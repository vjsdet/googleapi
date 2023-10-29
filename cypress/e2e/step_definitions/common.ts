import {
  Then
} from "@badeball/cypress-cucumber-preprocessor";

Then('I should get {int} status code', (status: number) => {
  cy.get("@response").then((response: any) => expect(response.status).to.eq(status))
});

Then(/^I should get the error message "([^"]*)"$/, (message) => {
  cy.get("@response").then((response: any) => {
    expect(response.body.error.message).to.eq(message)
  })
});

Then(/^I should get the content-type "([^"]*)"$/, (contentType) => {
  cy.get("@response").then((response: any) => {
    const mime = response.headers['content-type'] 
    expect(mime).to.contain(contentType)
  })
});


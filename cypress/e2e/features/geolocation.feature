Feature: Geo location api feature

    Geo location api feature

    Scenario: As an user, I should see the error message when I make the geo location api request with invalid api key
        Given I make post request the geo location endpoint with invalid apiKey
        Then I should get 400 status code
        And I should get the error message "API key not valid. Please pass a valid API key."

    Scenario: As an user, I should see the error message when I make the geo location api request with expired api key
        Given I make post request the geo location endpoint with expired apiKey
        Then I should get 400 status code
        And I should get the error message "API key expired. Please renew the API key."

    Scenario: As an user, I should get the response in json format when I make the geo location api request with request body
        Given I make post request the geo location endpoint with request body
        Then I should get 200 status code
        Then I should get the content-type "application/json"

    Scenario: As an user, I should get the response with location information when I make the geo location api request with request body
        Given I make post request the geo location endpoint with request body
        Then I should get the geo location latitude information
        Then I should get the geo location longitude information

    Scenario: As an user, I should get the response with accuracy information when I make the geo location api request with request body
        Given I make post request the geo location endpoint with request body
        Then I should get the geo location accuracy information




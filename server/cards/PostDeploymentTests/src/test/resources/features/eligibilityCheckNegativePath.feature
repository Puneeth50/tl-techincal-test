@Regression
Feature: Credit care eligibility check negative scenarios

  @Eligibility @Negative
  Scenario Outline: Validate request body fields with empty value which should result in error
    Given a "POST" call to "/eligibility/check"
    When performed HTTP request with body:
      | name    | <name> |
      | address | <>     |
      | email   | <>     |
    # empty field value should return error
    Then response HTTP status is 200
    # Empty address and email in the payload is returning eligible card in response based on applicant name
    And response body has "" eligibility card
    Examples:
      | name   | address       | email       |
      |        | Woking,Surrey | SDET@LT.com |
      | Boris  |               | SDET@LT.com |
      | Angela | London        |             |


  @Eligibility @Negative
  Scenario: Validate request with invalid header
    Given a "POST" call to "/eligibility/check"
    When performed HTTP request with body without headers:
      | name    | Boris       |
      | address | Woking      |
      | email   | SDET@LT.com |
    Then response HTTP status is 415
    And response body contains "Unsupported Media Type" error


  @Eligibility @Negative
  Scenario: Call Get HTTP Method to "eligibility/check" endpoint
    Given a "GET" call to "/eligibility/check"
    When performed HTTP request with body:
      | name    | Boris       |
      | address | Woking      |
      | email   | SDET@LT.com |
    Then response HTTP status is 405
    And response body contains "Method Not Allowed" error

  @Eligibility @Negative
  Scenario Outline: Validate request with Invalid field name
    Given a "POST" call to "/eligibility/check"
    When performed HTTP request with invalid body:
      | <name>    | SDET        |
      | <address> | Woking      |
      | <email>   | SDET@TL.com |
    Then response HTTP status is 400
    And response body contains "Bad Request" error
    Examples:
      | name  | address  | email  |
      | name1 | address  | email  |
      | name  | address1 | email  |
      | name  | address  | email1 |

  @Eligibility @Negative
  Scenario Outline: Validate request with Invalid endpoints
    Given a "POST" call to "<endPoint>"
    When performed HTTP request with invalid body:
      | name    | SDET        |
      | address | Woking      |
      | email   | SDET@TL.com |
    Then response HTTP status is 404
    And response body contains "Not Found" error
    Examples:
      | endPoint          |
      | /eligibility/chec |
      | /eligibility      |
      | /check            |
      | /ele/check        |






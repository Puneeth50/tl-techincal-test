@Regression
Feature: Check credit card eligibility happy path

  @Eligibility @HappyPath @Smoke
  Scenario Outline: Perfectly matching person name to check card eligibility
    Given a "POST" call to "/eligibility/check"
    When performed HTTP request with body:
      | name    | <name>        |
      | address | Woking,Surrey |
      | email   | SDET@TL.com   |
    Then response HTTP status is 200
    And response body has "<cardType>" eligibility card
    Examples:
      | name    | cardType |
      | Boris   | C1       |
      | Angela  | C1,C2    |
      | Theresa | C2       |


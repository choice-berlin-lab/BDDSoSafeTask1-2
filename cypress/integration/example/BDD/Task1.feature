Feature: Order a dress. A customer should able to buy a dress from voostore website

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Voostore Page
    And I search a dress
    When I add a item to cart
    |email | password |
    |andrew.jackson.tester1@gmail.com | Qpfmffls.1   |
    Then I order a item, should get a item.
Feature: Search 

  Scenario: Login successfully
    Given I go to SauceDemo.HomePage
    When I enter input:username_input as "<username>"
    And I enter input:password_input as "<password>"
    And I click button:login_button
    Then I navigate to SauceDemo.InventoryPage successfully!
    When I add item with name "<item_name>"
    Then The cart has item with name "<item_name>"
    Examples:
    |username|password||item_name|
    |standard_user|secret_sauce||Sauce Labs Backpack|
    |problem_user|secret_sauce||Sauce Labs Bike Light|

    
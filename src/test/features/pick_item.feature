Feature: Picking item 

  Scenario: Pick successfully
    Given I go to https://www.saucedemo.com/
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click button Login
    Then I navigate to HomePage successfully
    When I add item with name "<item_name>"
    Then The cart has item with name "<item_name>"
    Examples:
    |username|password||item_name|
    |standard_user|secret_sauce||Sauce Labs Backpack|
    |problem_user|secret_sauce||Sauce Labs Bike Light|

    
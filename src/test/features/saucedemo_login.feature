Feature: Search 

  Scenario: Login successfully
    Given I go to SauceDemo.HomePage
    When I enter input:username_input as "<username>"
    And I enter input:password_input as "<password>"
    And I click button:login_button
    Then I navigate to SauceDemo.InventoryPage successfully!
    Examples:
    |username| password|
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|

    
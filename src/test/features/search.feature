Feature: Search 

  Scenario: Login successfully
    Given I go to https://www.saucedemo.com/
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click button Login
    Then I navigate to HomePage successfully

    Examples:
    |username| password|
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|

    
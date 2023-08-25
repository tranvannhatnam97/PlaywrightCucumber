Feature: Search 

  Scenario: Login successfully
    Given I go to https://www.saucedemo.com
    When I enter input:username_input as "<username>"
    Examples:
    |username| password|
    |standard_user|secret_sauce|
    # |problem_user|secret_sauce|

    
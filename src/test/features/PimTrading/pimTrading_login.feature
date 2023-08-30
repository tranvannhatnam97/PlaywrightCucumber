Feature: Login Pim Trading

  Scenario: Login Pim Trading successfully
    Given I go to PimTrading.LoginPage
    When I enter input:username_input as "<username>"
    And I enter input:password_input as "<password>"
    And I click button:login_button
    Then I navigate to PimTrading.HomePage successfully!
    Examples:
    |username|password|
    |mongtoria@gmail.com|Cr@zyloop1|
    |namtvn@ichiba.vn|Cr@zyloop1|

    
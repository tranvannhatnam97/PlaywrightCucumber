Feature: Login 

  Scenario: Login successfully
    Given I go to Ichiba.LoginPage
    When I enter input:username_input as "<username>"
    And I enter input:password_input as "<password>"
    And I click button:login_button
    Then I navigate to Ichiba.HomePage successfully!
    Examples:
    |username|password|
    |mongtoria@gmail.com|Cr@zyloop1|
    |namtvn@ichiba.vn|Cr@zyloop1|

    
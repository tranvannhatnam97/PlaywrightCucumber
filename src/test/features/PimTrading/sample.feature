Feature: Login Pim Trading

  Scenario: Login Pim Trading successfully
    Given I go to Login Page
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click button Login
    Then I navigate to WorkspacePage successfully!
    When I choose workspace with workspace name "ws nam"
    Then I navigate to HomePage with slug-name "ws-nam"
    Then Browser send subscribing api match database data
    Examples:
    |username|password|
    |namtvn@ichiba.vn|Cr@zyloop1|

    
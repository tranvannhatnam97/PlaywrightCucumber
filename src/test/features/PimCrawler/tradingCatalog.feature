Feature: Login Pim Trading

  Scenario: Login Pim Trading successfully
    Given I go to Login Page
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click button Login
    Then I navigate to WorkspacePage successfully!
    When I choose workspace with workspace name "<workspace name>"
    Then I navigate to HomePage with slug-name "<slug-name>"
    And Browser send subscribing api match database data
    When I click tab Trading Catalog
    Then I navigate to Trading Catalog Page
    Examples:
    |username|password|workspace name|slug-name|
    |namtvn@ichiba.vn|Cr@zyloop1|ws nam|ws-nam|

    
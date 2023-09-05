Feature: Login Pim Trading

  Scenario: Login Pim Trading successfully
    Given I go to PimTrading.LoginPage
    When I enter input:username_input as "<username>"
    And I enter input:password_input as "<password>"
    And I click button:login_button
    Then I navigate to PimTrading.WorkspacePage successfully!
    When I choose workspace with workspace name "ws nam"
    Then Browser send api get list subscribed source and get right response
    Then I navigate to PimTrading.TradingCatalogPage with slug-name "ws-nam"
    Examples:
    |username|password|
    |namtvn@ichiba.vn|Cr@zyloop1|

    
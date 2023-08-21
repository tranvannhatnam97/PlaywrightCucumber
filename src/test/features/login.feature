Feature: Test login
Scenario: Login successfully
    Given I go to "https://test-org.ichiba.net/vi/"
    When I enter username as "namtvn@ichiba.vn"
    And I type password as "Cr@zyloop1"
    And I click button Login
    Then I navigate to HomePage
Scenario: Login failed
    Given I go to "https://test-org.ichiba.net/vi/"
    When I enter username as "namtvn@ichiba.vn"
    And I type password as "Cr@zyloop2"
    And I click button Login
    Then I navigate to failed
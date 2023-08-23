Feature: Test login

  Scenario: Login successfully
    Given I go to https://test-org.ichiba.net/vi/
    When I enter username as "namtvn@ichiba.vn"
    And I enter password as "Cr@zyloop1"
    And I click button Login
    Then I navigate to HomePage successfully

  Scenario: Login failed
    Given I go to https://test-org.ichiba.net/vi/
    When I enter username as "namtvn@ichiba.vn"
    And I enter password as "Cr@zyloop2"
    And I click button Login
    Then I navigate to HomePage failed

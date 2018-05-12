Feature: Test automationpractice smoke scenario

  Scenario: Test login with valid credentials
    Given Open chrome and start application
    When user clicks on signin
    And user enters valid "adas1328@gmail.com"
    Then user should be able to login successfully

  Scenario: personal information page
    Given user is on personal information page
    When user clicks on gender
    And user enters valid "Aparna"
    And user enters lName valid "Das"
    And user enters passwrd valid "aps123"
    And user selects "4" in day drop down
    And user selects "5" in month drop down
    And user selects "2001" in year drop down
    And user enters "Apar" and "das"
    And user enters company "TechM"
    And user enters "london" in address
    And user enters "acsd" in address
    And user enters "USA" in city
    And user enters "5" in state
    And user enters "00000" in zip
    And user enters "1234567893" in phone number
    And user enters "aps" in alias
    Then user should be able to register successfully

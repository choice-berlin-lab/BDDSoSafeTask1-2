Feature: End user requests the e-learning demo

    application Regression
    @DemoDownload
    Scenario: E-Learning Demo Delivery
    Given I open sosafe Page
    And I click a demo navigation button and verify 3 of demo icon displayed
    When I click the E-learning demo icon
    And Verify if E-learning demo request content is displayed
    And I click the E-learning demo button and fill up the form
    |email                           | vorname | nachname | number  |  
    |andrew.jackson.tester1@gmail.com| andrew  | jackson  | 10000+  | 
    Then I click the inquire now button and verify if confirmation message is dispalyed


    @DeleteDate
    Scenario: Delete All User Data At Once
    Given I click delete all button
    When I input password on the password field
    |admin            |  password  |  
    |admin@sosafe.de  |  admin1    |
    And I click the confirm button
    And I click the confirm button onthe re-confirmation message.
    Then The table successfully deleted and deleted message shown

    @CancelDeleteDatr
    Scenario: Cancels The Data Deleting Operation.
    Given I input password on the password field
    |admin            |  password  |  
    |admin@sosafe.de  |  admin1    |
    When I click the cancelation button
    And Verify if the page goes back to user table 
    Then The table did not change, all user data is available

    @ChangeInformation
    Scenario: Change The User Data
    Given I click the Edit Button
    When I change the email address
    |email                                   | firstname | lastname   | language | usergroup            | activecheckbox |  
    |elearningtesterstage7@nospam.sosafe.work| Elearning | Teststage6 |  10001   | elearning test stage | active         |
    And I click the save button 
    Then The edit view is closed and main table is being displayed with changed email.

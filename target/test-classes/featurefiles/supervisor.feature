@SupervisorLogin  @Regression
Feature: Supervisor Login Check with supervisor credentials -0202
This file coveres all smoke scenarios of supervisor - 
  
  NOTE- This features will cover  supervisor check list. 
  make sure to add correct credentials to Execute these feature scenarios

 @sanity, @smoke, @Regression
    Scenario: Valid Credentials should be able to login successfully
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Validate Punchin option
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Validate Lunch start
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch start
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Validate Lunch stop
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch stop
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Validate Punch Out
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then Click on Punchout Button
    Then Loggedout successfully

  @smoke, @Regression, @Scalendar
  Scenario: Supervisor View Edit Calendar
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Calendar from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: SupervisorView Timecard Exception
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Time card Exception from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View employee info
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee info from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: SupervisorView Timecard Exception
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee Exception from side menu
     Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor Edit personal info
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Personal info from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View Employee Benefits
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee Benefits from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View Excused calendar
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Time card Excused calendar from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View Employee Points
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee points from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View/Edit Project Screen
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Project Project from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View /Edit Project Management
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Project Project management from side menu
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor View/edit time entry of his team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Timecard Timecard from side menu
    Then Loggedout successfully
    
    
    @smoke, @Regression
  Scenario: Supervisor View Dashboard details of team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on Dashboard Dashboard
    Then supervisor click on Dashboard outof office
    

  @smoke, @Regression
  Scenario: Supervisor View/approve time off request of his team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Timecard Approvals from side menu
    Then Loggedout successfully
    
    
    

  @smoke, @Regression
  Scenario: Supervisor login - Add message for Employee
    This scenario covers Add message for Employee  from supervisor login

    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Supervisor click on Messaging
    When message screen loaded at rightpane add message details
    And check message added
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Supervisor login - View / approve time off Request
    This scenario covers View / approve time off Request from Admin login

    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Supervisor click on Timecard TimeOff Request
    When request time off loaded check View details
     Then Loggedout successfully

 @Regression
  Scenario: Validate supervisor Time entry from timecard
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    #Then click on Punch in Button
    Then supervisor click on  Timecard Timecard from side menu
    Then employee click on Add New time at main screen
    # [inprogress]When New time entry added edit fileds and update
    Then Loggedout successfully

  @Regression
  Scenario: Validate supervisor Time entry from project time
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    #Then click on project time button and add time entry
    #When update completed check entry
    Then Loggedout successfully

    @Regression
     Scenario: Supervisor View schedule for employees/Team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on schedule weekly schedule from side menu
    Then supervisor click on schedule Default from side menu
    Then Loggedout successfully
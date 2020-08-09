@Employyelogin, @Regression
Feature: Employee Login Check and employee feature scenarios validated here.. [0303]
  This file coveres all smoke scenarios of Employee login - 
  
  NOTE- This features will cover Employee check list. 
  make sure to add correct credentials to Execute these feature scenarios

  @sanity, @smoke, @Regression,
  Scenario: Validate Employee Credentials should be able to login successfully
    This scenario validates employee Login

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: Validate Employee Punchin option
    This scenario validates employee Punchin from webclock punch panel

    Given Launch Browser and Open eClock
   	When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then emp click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: Validate Employee punch panel Time entry
    This scenario validates employee Punch time from webclock punch panel

  #  Given Launch Browser and Open eClock
  #  When Enter valid Employee credentials and click login
  #  Then User should be able to login successfully
  #  Then emp click on webclock from side menu
  #  Then click on Punch in Button
  #  Then click on project time button and add time entry
 #   When update completed check entry
 #   Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: Validate Employee  Lunch start
    This scenario validates employee Lunch start from webclock punch panel

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then emp click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch start
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: Validate  Employee Lunch stop
    This scenario validates employee Lunch start from webclock punch panel

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then emp click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch stop
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: Validate  Employee Punch Out
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then emp click on webclock from side menu
    Then Click on Punchout Button
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: Validate Employee Time card entry
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then emp click on webclock from side menu
    Then employee click on employee Employees from side bar menu
    Then click on Add time card link
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: validate View Employee Employee info
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employees from side bar menu
    Then check employee informarion at main screen
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: validate View Employee Personal Info
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Personal info from side bar menu
    Then check employee Personal informarion at main screen
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: validate View Employee Employee benefits
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Benefits from side bar menu
    Then check employee Employee Benefits at main screen
    Then Loggedout successfully

  @sanity, @smoke, @Regression
  Scenario: validate View Employee Time off Request
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Time off Request from side bar menu
    Then check Employee Time off Request at main screen
    Then Loggedout successfully
    
    
   @sanity, @smoke, @Regression
  Scenario: validate View Employee Calendar
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Calendar from side bar menu
    Then check Calendar details at main screen
    Then Loggedout successfully

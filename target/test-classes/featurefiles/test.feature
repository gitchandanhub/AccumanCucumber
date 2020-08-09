
Feature: Reports feature
  This file covers reports 
  
 
  Scenario: Validate supervisor Time entry from timecard
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    #Then click on Punch in Button
    Then supervisor click on  Timecard Timecard from side menu
    Then employee click on Add New time at main screen
    When New time entry added edit fileds and update
    Then Loggedout successfully

  
  Scenario: Validate supervisor Time entry from project time
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    #Then click on project time button and add time entry
    #When update completed check entry
    Then Loggedout successfully

    
     Scenario: Supervisor View schedule for employees/Team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on schedule weekly schedule from side menu
    Then supervisor click on schedule Default from side menu
    Then Loggedout successfully  


  Scenario: Reports - Time - Time card
    This scenario covers reports for Time card

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Reports
    Then go to Time - Timecard and click
   	When time card report opens at right pane
    Then select date range
    Then select Employee, Groups, Department, Position
    Then select order by
    Then select Report format
    Then select show options
    Then select Employee status
    Then clcik on create report button
    
 
    Scenario: Report Expence tracking 
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Reports
    Then go to Time - Expences Report and click
    When time card report opens at right pane
    Then select date range
    Then select Employee, Groups, Department, Position
    Then select order by
    Then select Hours format
     Then select Employee status
    Then clcik on create report button
    
    
    
    

    
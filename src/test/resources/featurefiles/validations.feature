@validations
Feature: Timeoff Request approval cycle

  Scenario: TimeOFF01-Employe will apply for Timeoff Request
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Time off Request from side bar menu
    Then Employee add new time off request
    Then Loggedout successfully

  @validations1
  Scenario: TimeOFF02-Supervisor will Approve this Request
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Supervisor click on Timecard TimeOff Approval
    When request time off loaded select employee and verify approval
    Then Loggedout successfully

  Scenario: TimeOFF03-check off details appeared on Employee Timecard
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee time card - Time card and verify Approval entry

  @Validation2
  Scenario: TimeOFF-04- Supervisor will Reject this Request and add response
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Supervisor click on Timecard TimeOff Approval
    Then supervisor add reason and note and click on update

  Scenario: TimeOFF05-check off details appeared on Employee Timecard
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee time card -  Employee should be able to see supervisor note / comments and status should be rejected.

  @benifit
  Scenario: Benefit ON login as admin and check negative benefit on
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on View benefits
    Then check negative benefit options ON
    Then Loggedout successfully
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Time off Request from side bar menu
    Then Employee add new time off request
    Then Loggedout successfully

  @benifit
  Scenario: Benefit ON login as admin and check negative benefit on
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on View benefits
    Then check negative benefit options OFF
    Then Loggedout successfully
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Time off Request from side bar menu
    Then Employee add new time off request
    Then Loggedout successfully

  
  Scenario: TP01:Employee log to webclock punchin and Punchout from webclock
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Punchin
    When enter valid Employee credentials at webclock
    Then check Break Start
    When enter valid Employee credentials at webclock
    Then check Break Stop
    When enter valid Employee credentials at webclock
    Then check Punchout

  @TP
  Scenario: TP02:Employee log to eClock and punchin and Punchout from eclock - webclock
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch start
    Then Clcik on Lunch stop
    Then Click on Punchout Button

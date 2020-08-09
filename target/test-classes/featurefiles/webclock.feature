@webClock  @Regression
Feature: WebClock features check

  @sanity, @smoke, @Regression, @DEMO03
  Scenario: Webclcok Employee Punchin
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Punchin

  @sanity, @smoke, @Regression
  Scenario: Webclcok Employee Lunch Start
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Lunch start

  @sanity, @smoke, @Regression
  Scenario: Webclcok Lunch Stop
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Lunch stop

  @sanity, @smoke, @Regression
  Scenario: Webclcok Break Start
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Break Start

  @sanity, @smoke, @Regression
  Scenario: Webclcok Break Stop
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Break Stop

  @sanity, @smoke, @Regression, @ptime
  Scenario: Webclcok Project Time
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Project Time

  @sanity, @smoke, @Regression
  Scenario: Webclcok Employee Last Punch
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Last Punch

  @sanity, @smoke, @Regression
  Scenario: Webclcok Employee Hours this payperiod
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Hours this payperiod

  @sanity, @smoke, @Regression
  Scenario: Webclcok Employee Request Status
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Request Status

  @sanity, @smoke, @Regression
  Scenario: Webclcok Employee TimeOff Request
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check TimeOff Request
    
   @sanity, @smoke, @Regression
  Scenario: Webclcok Employee Current Benifit balance
    Given Launch Browser and Open webClock
      When enter valid Employee credentials at webclock
    Then check Current Benifit balance
    
     @sanity, @smoke, @Regression, @DEMO
  Scenario: Webclcok Employee Job Start
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Job start
    
     @sanity, @smoke, @Regression, @DEMO
  Scenario: Webclcok Employee  POS. Transfer
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check  POS Transfer
    
    

  @sanity, @smoke, @Regression
  Scenario: Webclcok Employee Punchout
    Given Launch Browser and Open webClock
    When enter valid Employee credentials at webclock
    Then check Punchout
    
    
    
    #@When enter valid supervisor credentials at webclock

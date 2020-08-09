@Adminlogin  @Regression  @Adminchk
Feature: Admin view scenarios
This file coveres all smoke scenarios of Admin login 
  
  Note- Admin scenarios work with only Admin login. options not visible for [Supervisor / Employer ]

@sanity, @smoke, @Regression, @DEMO03
  Scenario: Valid Credentials should be able to login successfully
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

 @sanity, @smoke, @Regression, @DEMO03
  Scenario: Validate Punchin option
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

@sanity, @smoke, @Regression, @DEMO03
  Scenario: Validate Lunch start
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Clcik on Lunch start
    Then Loggedout successfully

@sanity, @smoke, @Regression
  Scenario: Validate Lunch stop
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Clcik on Lunch stop
    Then Loggedout successfully

@sanity, @smoke, @Regression
  Scenario: Validate Punch Out
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Click on Punchout Button
    Then Loggedout successfully
    
    	
 @smoke, @sanity, @Regression
 Scenario: Admin login - schedule  Time card Approvals 
    This scenario covers view  Time card Approvals from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin clcik on Time card
    Then Admin Click on Time card Approvals
    Then Loggedout successfully
    	
  @smoke, @Regression
  Scenario: Admin login - schedule  Time card Calendar 
    This scenario covers view  Time card Calendar  from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin clcik on Time card
    Then Admin Click on Time card Calendar
    Then Loggedout successfully 
   
   @sanity, @Regression, @smoke 
  Scenario: Admin login - schedule  Time card Exception
    This scenario covers view  Time card Approvals from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin clcik on Time card
    Then Admin Click on Time card Exception
    Then Loggedout successfully



@sanity, @Regression, @smoke
  Scenario: Admin login - schedule for employees
    This scenario covers view schedule for employees from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Admin clcik on Schedule
    Then Admin Click on schedule Default
    Then Loggedout successfully


@sanity, @Regression, @smoke
  Scenario: Admin login - Dashboard view
    This scenario covers view dashboard employees from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Schedule
    Then Admin Click on Dashboard Default
    Then Loggedout successfully

  
  @sanity, @Regression, @AccessinforAdmin, @smoke
  Scenario: Admin login - Employee - Employee Access info
  This scenario covers view Employee - Employee Access info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
   # Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee Access Info
    Then Loggedout successfully

@sanity, @Regression, @smoke
  Scenario: Admin login - Employee - Employee settings
  This scenario covers view Employee - Employee Access info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee settings
    Then Loggedout successfully

   @smoke, @Regression, @sanity
  Scenario: Admin login - Employee - Employee benefits
  This scenario covers view Employee - Employee benefits info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee benefits
    Then Loggedout successfully

@sanity, @Regression, @smoke
  Scenario: Admin login - Employee - Employee Points
  This scenario covers view Employee - Employee Points info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee Points
    Then Loggedout successfully

@sanity, @Regression, @smoke
  Scenario: Admin login - Configure - Group
    This scenario covers view Group details from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Group
    When group details loaded on right pane check details
    Then Loggedout successfully

 @sanity, @Regression, @smoke
  Scenario: Admin login - Configure - GroupSettings
    This scenario covers view GroupSettings screen from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Group settings
    When group settings loads at right pane check details
    Then Loggedout successfully

@sanity, @Regression, @smoke
  Scenario: Admin login - Configure - Department
    This scenario covers view  Configure screen from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Departments
    Then Loggedout successfully

@sanity, @Regression, @smoke
  Scenario: Admin login - Configure - Position
    This scenario covers view  Configure Position from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Position
    Then Loggedout successfully

@sanity, @Regression
  Scenario: Admin login - Configure - Job Type
    This scenario covers view Job type from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then click on Job Type
    Then Loggedout successfully

@sanity, @Regression
  Scenario: Admin Login - Configure - Status Codes
    This scenario covers view Status Codes from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Status code
    Then Loggedout successfully

@sanity, @Regression
  Scenario: Admin Login - Configure - View benefits
    This scenario covers view  View benefits from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on View benefits
    Then Loggedout successfully

@sanity, @Regression
  Scenario: Admin Login - Configure - Group Default
    This scenario covers Configure Group Default from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Group Default
    Then Loggedout successfully

@sanity, @Regression
  Scenario: Admin Login - Configure - Task
    This scenario covers view Task from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Task
    Then Loggedout successfully

@sanity, @Regression
  Scenario: Admin Login - Configure - Prj Sales Items
    This scenario covers view Prj Sales Item from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Prj Sales Items
    Then Loggedout successfully

@sanity,  @Regression
  Scenario: Admin Login - Configure - Project Items
    This scenario covers view Project Items from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Project Items
    Then Loggedout successfully

 @sanity, @Regression
  Scenario: Admin Login - Configure - Certification
    This scenario covers view Certification from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Certification
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Breaks
    This scenario covers view  Breaks from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then clcik on Breaks
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Holiday Template
    This scenario covers view Holiday Template from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Holiday Template
    Then Loggedout successfully

 @Regression, @sanity 
  Scenario: Admin Login - Configure - Holiday Set
    This scenario covers view Holiday Set from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then clcik on Holiday Set
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Holidays
    This scenario covers view Holidays from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Holidays
    Then Loggedout successfully

  @sanity, @Regression
  Scenario: Admin Login - Configure - Pay Rules
    This scenario covers view Pay Rule from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Pay Rules
    Then Loggedout successfully

  @smoke, @Regression
  Scenario: Admin Login - Configure - Points
    This scenario covers view Points from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Points
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Points Reason
    This scenario covers view Points Reason from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Point Reason
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Email Templates
    This scenario covers view Email template from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Email templates
    Then Loggedout successfully

  @Regression, @sanity
  Scenario: Admin Login - Configure - Pay Types
    This scenario covers view Pay Types from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Pay Types
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Comments
    This scenario covers view  comments from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Comments
    Then Loggedout successfully

 @Regression, @sanity
  Scenario: Admin Login - Configure - Pay Categories
    This scenario covers view Pay categories from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Pay categories
    Then Loggedout successfully

  @Regression, @sanity
  Scenario: Admin Login - Configure - Shift
    This scenario covers view Shift from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Shift
    Then Loggedout successfully
    
  @Regression, @sanity
    Scenario: Admin login - View / Edit Project screen
    This scenario covers View / Edit Project screen from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Project Button 
    Then Admin clcik on Project submenu
    And  Admin Check for Project details at main screen 
    Then Loggedout successfully

  @Regression, @sanity
   Scenario: Admin login - View / Edit Project Management
   This scenario covers View / Edit Project Management from Admin login
   
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Project Button 
    Then Admin clcik on Project management submenu
    And  Admin Check for Project management details at main screen
    Then Loggedout successfully 
    
  @Regression
   Scenario: Admin login - View Approve Time off request
   This scenario covers VView Approve Time off request from Admin login
   
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Time card Button 
    Then Admin clcik on Time off approval at submenu
    And  Admin Check for View Approve Time off request details at main screen 
    Then Loggedout successfully
    
	@Regression, @smoke
		Scenario: Admin login - Add message for Employee  
    This scenario covers Add message for Employee   from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Messaging 
    When message screen loaded at rightpane add message details
    And  check message added 
    Then Loggedout successfully
    
    @Regressio
    Scenario: Admin login - View / approve time off Request
		This scenario covers View / approve time off Request from Admin login
		Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Time card Button 
    Then Admin clcik on Time off Request at submenu
    When request time off loaded check View details
    Then Loggedout successfully
    
@AdminScenarios,  @smokesuite
Feature: smokesuite
Employee Login Check and employee feature scenarios validated here.. [0303]
  This file coveres all smoke scenarios of Employee login - 
  
  NOTE- This features will cover Employee check list. 
  make sure to add correct credentials to Execute these feature scenarios

@Employee, @smoke1
  Scenario: Validate Employee Credentials should be able to login successfully
    This scenario validates employee Login

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

@Employee, @smoke1
  Scenario: Validate Employee Punchin option
    This scenario validates employee Punchin from webclock punch panel

    Given Launch Browser and Open eClock
   	When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

@Employee, @smoke1
  Scenario: Validate Employee punch panel Time entry
    This scenario validates employee Punch time from webclock punch panel

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then click on project time button and add time entry
    When update completed check entry
    Then Loggedout successfully

@Employee, @smoke1
  Scenario: Validate Employee  Lunch start
    This scenario validates employee Lunch start from webclock punch panel

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch start
    Then Loggedout successfully


 @Employee, @smoke1
  Scenario: Validate  Employee Lunch stop
    This scenario validates employee Lunch start from webclock punch panel

    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch stop
    Then Loggedout successfully

 @Employee, @smoke1
  Scenario: Validate  Employee Punch Out
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Click on Punchout Button
    Then Loggedout successfully

 @Employee, @smoke1 
  Scenario: Validate Employee Time card entry
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then employee click on employee Employees from side bar menu
    Then click on Add time card link
    Then Loggedout successfully

  
  @Employee, @smoke1
  Scenario: validate View Employee Employee info
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employees from side bar menu
    Then check employee informarion at main screen
    Then Loggedout successfully

 @Employee, @smoke1
  Scenario: validate View Employee Personal Info
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Personal info from side bar menu
    Then check employee Personal informarion at main screen
    Then Loggedout successfully

  @Employee, @smoke1
  Scenario: validate View Employee Employee benefits
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Benefits from side bar menu
    Then check employee Employee Benefits at main screen
    Then Loggedout successfully

  @Employee, @smoke

  Scenario: validate View Employee Time off Request
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Time off Request from side bar menu
    Then check Employee Time off Request at main screen
    Then Loggedout successfully
    
    
  @Employee, @smoke

  Scenario: validate View Employee Calendar
    Given Launch Browser and Open eClock
    When Enter valid Employee credentials and click login
    Then User should be able to login successfully
    Then employee click on employee Employee Calendar from side bar menu
    Then check Calendar details at main screen
    Then Loggedout successfully
    
    


@supervisor, @smoke1
  Scenario: Valid Credentials should be able to login successfully
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Punchin option
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Lunch start
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Clcik on Lunch start
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Lunch stop
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Clcik on Lunch stop
    Then Loggedout successfully
    
@supervisor, @smoke1
    Scenario: Valid Credentials should be able to login successfully
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Punchin option
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Lunch start
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch start
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Lunch stop
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then click on Punch in Button
    Then Clcik on Lunch stop
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate Punch Out
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    Then Click on Punchout Button
    Then Loggedout successfully

@supervisor, @smoke
  Scenario: Supervisor View Edit Calendar
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Calendar from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: SupervisorView Timecard Exception
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Time card Exception from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor View employee info
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee info from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: SupervisorView Timecard Exception
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee Exception from side menu
     Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor Edit personal info
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Personal info from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor View Employee Benefits
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee Benefits from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor View Excused calendar
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Time card Excused calendar from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor View Employee Points
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Employee Employee points from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor View/Edit Project Screen
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Project Project from side menu
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor View /Edit Project Management
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Project Project management from side menu
    Then Loggedout successfully
    
@supervisor, @smoke1
  Scenario: Supervisor View/edit time entry of his team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Timecard Timecard from side menu
    Then Loggedout successfully
    
    
@supervisor, @smoke1
  Scenario: Supervisor View Dashboard details of team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on Dashboard Dashboard
    Then supervisor click on Dashboard outof office
    

@supervisor, @smoke
  Scenario: Supervisor View/approve time off request of his team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on  Timecard Approvals from side menu
    Then Loggedout successfully
    
    
    
@supervisor, @smoke1
  Scenario: Supervisor login - Add message for Employee
    This scenario covers Add message for Employee  from supervisor login

    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Supervisor click on Messaging
    When message screen loaded at rightpane add message details
    And check message added
    Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Supervisor login - View / approve time off Request
    This scenario covers View / approve time off Request from Admin login

    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then Supervisor click on Timecard TimeOff Request
    When request time off loaded check View details
     Then Loggedout successfully

@supervisor, @smoke1
Scenario:  Validate supervisor Time entry from timecard
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    #Then click on Punch in Button
    Then supervisor click on  Timecard Timecard from side menu
    Then employee click on Add New time at main screen
   # When New time entry added edit fileds and update
    #Then Loggedout successfully

@supervisor, @smoke1
  Scenario: Validate supervisor Time entry from project time
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on webclock from side menu
    #Then click on project time button and add time entry
    #When update completed check entry
    Then Loggedout successfully

@supervisor, @smoke1
     Scenario: Supervisor View schedule for employees/Team members
    Given Launch Browser and Open eClock
    When Enter valid supervisor credentials and click login
    Then User should be able to login successfully
    Then supervisor click on schedule weekly schedule from side menu
    Then supervisor click on schedule Default from side menu
    Then Loggedout successfully
    
  
@Admin, @smoke1
  Scenario: Valid Credentials should be able to login successfully
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Validate Punchin option
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Validate Lunch start
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Clcik on Lunch start
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Validate Lunch stop
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Clcik on Lunch stop
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Validate Punch Out
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then User should be able to login successfully
    Then click on webclock from side menu
    Then Click on Punchout Button
    Then Loggedout successfully
    
    	
@Admin, @smoke1
 Scenario: Admin login - schedule  Time card Approvals 
    This scenario covers view  Time card Approvals from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin clcik on Time card
    Then Admin Click on Time card Approvals
    Then Loggedout successfully
    	
@Admin, @smoke1
  Scenario: Admin login - schedule  Time card Calendar 
    This scenario covers view  Time card Calendar  from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin clcik on Time card
    Then Admin Click on Time card Calendar
    Then Loggedout successfully 
   
@Admin, @smoke1 
  Scenario: Admin login - schedule  Time card Exception
    This scenario covers view  Time card Approvals from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin clcik on Time card
    Then Admin Click on Time card Exception
    Then Loggedout successfully



@Admin, @smoke1
  Scenario: Admin login - schedule for employees
    This scenario covers view schedule for employees from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then click on Punch in Button
    Then Admin clcik on Schedule
    Then Admin Click on schedule Default
    Then Loggedout successfully


@Admin, @smoke1
  Scenario: Admin login - Dashboard view
    This scenario covers view dashboard employees from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Schedule
    Then Admin Click on Dashboard Default
    Then Loggedout successfully

  
@Admin, @smoke1
  Scenario: Admin login - Employee - Employee Access info
  This scenario covers view Employee - Employee Access info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
   # Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee Access Info
    Then Admin View or Edit Employee Access info
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Employee - Employee settings
  This scenario covers view Employee - Employee Access info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee settings
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Employee - Employee benefits
  This scenario covers view Employee - Employee benefits info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee benefits
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Employee - Employee Points
  This scenario covers view Employee - Employee Points info from Admin login
  
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then Admin clcik on Employee
    Then Admin clcik on Employee Points
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Configure - Group
    This scenario covers view Group details from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Group
    When group details loaded on right pane check details
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Configure - GroupSettings
    This scenario covers view GroupSettings screen from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Group settings
    When group settings loads at right pane check details
    Then Loggedout successfully
    
@Admin, @smoke1
  Scenario: Admin login - Configure - Department
    This scenario covers view  Configure screen from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Departments
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Configure - Position
    This scenario covers view  Configure Position from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Position
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin login - Configure - Job Type
    This scenario covers view Job type from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then click on Job Type
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Status Codes
    This scenario covers view Status Codes from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Status code
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - View benefits
    This scenario covers view  View benefits from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on View benefits
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Group Default
    This scenario covers Configure Group Default from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Group Default
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Task
    This scenario covers view Task from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Task
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Prj Sales Items
    This scenario covers view Prj Sales Item from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Prj Sales Items
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Project Items
    This scenario covers view Project Items from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Project Items
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Certification
    This scenario covers view Certification from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Certification
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Breaks
    This scenario covers view  Breaks from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then clcik on Breaks
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Holiday Template
    This scenario covers view Holiday Template from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Holiday Template
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Holiday Set
    This scenario covers view Holiday Set from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then clcik on Holiday Set
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Holidays
    This scenario covers view Holidays from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Click on Holidays
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Pay Rules
    This scenario covers view Pay Rule from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Pay Rules
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Points
    This scenario covers view Points from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Points
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Points Reason
    This scenario covers view Points Reason from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Point Reason
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Email Templates
    This scenario covers view Email template from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Email templates
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Pay Types
    This scenario covers view Pay Types from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Pay Types
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Comments
    This scenario covers view  comments from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Comments
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Pay Categories
    This scenario covers view Pay categories from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Pay categories
    Then Loggedout successfully

@Admin, @smoke1
  Scenario: Admin Login - Configure - Shift
    This scenario covers view Shift from Admin Login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then click on webclock from side menu
    Then clcik on Configure
    Then Clcik on Shift
    Then Loggedout successfully
    
@Admin, @smoke1
    Scenario: Admin login - View / Edit Project screen
    This scenario covers View / Edit Project screen from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Project Button 
    Then Admin clcik on Project submenu
    And  Admin Check for Project details at main screen 
    Then Loggedout successfully

@Admin, @smoke1
   Scenario: Admin login - View / Edit Project Management
   This scenario covers View / Edit Project Management from Admin login
   
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Project Button 
    Then Admin clcik on Project management submenu
    And  Admin Check for Project management details at main screen
    Then Loggedout successfully 
    
@Admin, @smoke1
   Scenario: Admin login - View Approve Time off request
   This scenario covers VView Approve Time off request from Admin login
   
    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Time card Button 
    Then Admin clcik on Time off approval at submenu
    And  Admin Check for View Approve Time off request details at main screen 
    Then Loggedout successfully
    
@Admin, @smoke1
		Scenario: Admin login - Add message for Employee  
    This scenario covers Add message for Employee   from Admin login

    Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Messaging 
    When message screen loaded at rightpane add message details
    And  check message added 
    Then Loggedout successfully
    
@Admin, @smoke
    Scenario: Admin login - View / approve time off Request
		This scenario covers View / approve time off Request from Admin login
		Given Launch Browser and Open eClock
    When Enter valid credentials and click login
    Then Admin click on Time card Button 
    Then Admin clcik on Time off Request at submenu
    When request time off loaded check View details
    Then Loggedout successfully
    
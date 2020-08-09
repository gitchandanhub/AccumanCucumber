$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/Admin.feature");
formatter.feature({
  "line": 2,
  "name": "Admin view scenarios",
  "description": "This file coveres all smoke scenarios of Admin login \r\n\r\nNote- Admin scenarios work with only Admin login. options not visible for [Supervisor / Employer ]",
  "id": "admin-view-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Adminlogin"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Adminchk"
    }
  ]
});
formatter.before({
  "duration": 2616320400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Valid Credentials should be able to login successfully",
  "description": "",
  "id": "admin-view-scenarios;valid-credentials-should-be-able-to-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity,"
    },
    {
      "line": 7,
      "name": "@smoke,"
    },
    {
      "line": 7,
      "name": "@Regression,"
    },
    {
      "line": 7,
      "name": "@DEMO03"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 6892231200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 9699175200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 341800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 437795800,
  "status": "passed"
});
formatter.after({
  "duration": 118200,
  "status": "passed"
});
formatter.before({
  "duration": 14125600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate Punchin option",
  "description": "",
  "id": "admin-view-scenarios;validate-punchin-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity,"
    },
    {
      "line": 14,
      "name": "@smoke,"
    },
    {
      "line": 14,
      "name": "@Regression,"
    },
    {
      "line": 14,
      "name": "@DEMO03"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2486780600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8208257500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 74600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11259953700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 12928516100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 494953300,
  "status": "passed"
});
formatter.after({
  "duration": 38200,
  "status": "passed"
});
formatter.before({
  "duration": 17945000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Lunch start",
  "description": "",
  "id": "admin-view-scenarios;validate-lunch-start",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity,"
    },
    {
      "line": 23,
      "name": "@smoke,"
    },
    {
      "line": 23,
      "name": "@Regression,"
    },
    {
      "line": 23,
      "name": "@DEMO03"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Clcik on Lunch start",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2461597300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 9256524300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 107400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11221657100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Lunch_start()"
});
formatter.result({
  "duration": 7873123700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 448536500,
  "status": "passed"
});
formatter.after({
  "duration": 59400,
  "status": "passed"
});
formatter.before({
  "duration": 10918400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate Lunch stop",
  "description": "",
  "id": "admin-view-scenarios;validate-lunch-stop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@sanity,"
    },
    {
      "line": 32,
      "name": "@smoke,"
    },
    {
      "line": 32,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Clcik on Lunch stop",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2458142600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8195141800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11180750300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Lunch_stop()"
});
formatter.result({
  "duration": 8166144400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 440108400,
  "status": "passed"
});
formatter.after({
  "duration": 47900,
  "status": "passed"
});
formatter.before({
  "duration": 15647200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate Punch Out",
  "description": "",
  "id": "admin-view-scenarios;validate-punch-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@sanity,"
    },
    {
      "line": 41,
      "name": "@smoke,"
    },
    {
      "line": 41,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Click on Punchout Button",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2670837400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7058971300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11144306500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punchout_Button()"
});
formatter.result({
  "duration": 10541310000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 463515500,
  "status": "passed"
});
formatter.after({
  "duration": 43200,
  "status": "passed"
});
formatter.before({
  "duration": 13829500,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Admin login - schedule  Time card Approvals",
  "description": " This scenario covers view  Time card Approvals from Admin login",
  "id": "admin-view-scenarios;admin-login---schedule--time-card-approvals",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@smoke,"
    },
    {
      "line": 51,
      "name": "@sanity,"
    },
    {
      "line": 51,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Admin clcik on Time card",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Admin Click on Time card Approvals",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2489977500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6836709100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Time_card()"
});
formatter.result({
  "duration": 5257600600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Click_on_Time_card_Approvals()"
});
formatter.result({
  "duration": 83174200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 467271000,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.before({
  "duration": 18189500,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Admin login - schedule  Time card Calendar",
  "description": "This scenario covers view  Time card Calendar  from Admin login",
  "id": "admin-view-scenarios;admin-login---schedule--time-card-calendar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@smoke,"
    },
    {
      "line": 61,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Admin clcik on Time card",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Admin Click on Time card Calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2758326500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8565697100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Time_card()"
});
formatter.result({
  "duration": 5224827900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Click_on_Time_card_Calendar()"
});
formatter.result({
  "duration": 5116207500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 2472474800,
  "status": "passed"
});
formatter.after({
  "duration": 39600,
  "status": "passed"
});
formatter.before({
  "duration": 21935500,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Admin login - schedule  Time card Exception",
  "description": "This scenario covers view  Time card Approvals from Admin login",
  "id": "admin-view-scenarios;admin-login---schedule--time-card-exception",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@sanity,"
    },
    {
      "line": 71,
      "name": "@Regression,"
    },
    {
      "line": 71,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Admin clcik on Time card",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Admin Click on Time card Exception",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3042940800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7788152200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Time_card()"
});
formatter.result({
  "duration": 5227117100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Click_on_Time_card_Exception()"
});
formatter.result({
  "duration": 67376500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1212795500,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
formatter.before({
  "duration": 25378100,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Admin login - schedule for employees",
  "description": "This scenario covers view schedule for employees from Admin login",
  "id": "admin-view-scenarios;admin-login---schedule-for-employees",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@sanity,"
    },
    {
      "line": 83,
      "name": "@Regression,"
    },
    {
      "line": 83,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Admin clcik on Schedule",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Admin Click on schedule Default",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3222258000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7892522400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11226009500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 13251894100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Schedule()"
});
formatter.result({
  "duration": 128625400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Click_on_schedule_Default()"
});
formatter.result({
  "duration": 70676400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 449625100,
  "status": "passed"
});
formatter.after({
  "duration": 58000,
  "status": "passed"
});
formatter.before({
  "duration": 10206600,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Admin login - Dashboard view",
  "description": "This scenario covers view dashboard employees from Admin login",
  "id": "admin-view-scenarios;admin-login---dashboard-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 96,
      "name": "@sanity,"
    },
    {
      "line": 96,
      "name": "@Regression,"
    },
    {
      "line": 96,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 100,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "Admin clcik on Schedule",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Admin Click on Dashboard Default",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2782480500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7042929500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11198609000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Schedule()"
});
formatter.result({
  "duration": 226626600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Click_on_Dashboard_Default()"
});
formatter.result({
  "duration": 194867400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 16105390800,
  "status": "passed"
});
formatter.after({
  "duration": 57000,
  "status": "passed"
});
formatter.before({
  "duration": 17620300,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Admin login - Employee - Employee Access info",
  "description": "This scenario covers view Employee - Employee Access info from Admin login",
  "id": "admin-view-scenarios;admin-login---employee---employee-access-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 108,
      "name": "@sanity,"
    },
    {
      "line": 108,
      "name": "@Regression,"
    },
    {
      "line": 108,
      "name": "@AccessinforAdmin,"
    },
    {
      "line": 108,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 114,
      "value": "# Then click on webclock from side menu"
    }
  ],
  "line": 115,
  "name": "Admin clcik on Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "Admin clcik on Employee Access Info",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Admin View or Edit Employee Access info",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2749038600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7890523700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee()"
});
formatter.result({
  "duration": 5279756700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee_Access_Info()"
});
formatter.result({
  "duration": 5111724900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29500,
  "status": "passed"
});
formatter.before({
  "duration": 7207000,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Admin login - Employee - Employee settings",
  "description": "This scenario covers view Employee - Employee Access info from Admin login",
  "id": "admin-view-scenarios;admin-login---employee---employee-settings",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@sanity,"
    },
    {
      "line": 120,
      "name": "@Regression,"
    },
    {
      "line": 120,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Admin clcik on Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Admin clcik on Employee settings",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3296923500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7485335100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11217733900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee()"
});
formatter.result({
  "duration": 5245411500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee_settings()"
});
formatter.result({
  "duration": 5155544500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1212744000,
  "status": "passed"
});
formatter.after({
  "duration": 130500,
  "status": "passed"
});
formatter.before({
  "duration": 18470700,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Admin login - Employee - Employee benefits",
  "description": "This scenario covers view Employee - Employee benefits info from Admin login",
  "id": "admin-view-scenarios;admin-login---employee---employee-benefits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 131,
      "name": "@smoke,"
    },
    {
      "line": 131,
      "name": "@Regression,"
    },
    {
      "line": 131,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Admin clcik on Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Admin clcik on Employee benefits",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3111888100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8716747300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11227461600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee()"
});
formatter.result({
  "duration": 5173000600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee_benefits()"
});
formatter.result({
  "duration": 5106947100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1177065300,
  "status": "passed"
});
formatter.after({
  "duration": 65200,
  "status": "passed"
});
formatter.before({
  "duration": 13916300,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "Admin login - Employee - Employee Points",
  "description": "This scenario covers view Employee - Employee Points info from Admin login",
  "id": "admin-view-scenarios;admin-login---employee---employee-points",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@sanity,"
    },
    {
      "line": 142,
      "name": "@Regression,"
    },
    {
      "line": 142,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 146,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Admin clcik on Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Admin clcik on Employee Points",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3001667200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7676244000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11214672700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee()"
});
formatter.result({
  "duration": 5179666100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Employee_Points()"
});
formatter.result({
  "duration": 5087890200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1199018100,
  "status": "passed"
});
formatter.after({
  "duration": 40900,
  "status": "passed"
});
formatter.before({
  "duration": 16997800,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "Admin login - Configure - Group",
  "description": "This scenario covers view Group details from Admin login",
  "id": "admin-view-scenarios;admin-login---configure---group",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 153,
      "name": "@sanity,"
    },
    {
      "line": 153,
      "name": "@Regression,"
    },
    {
      "line": 153,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 157,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 158,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "Click on Group",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "group details loaded on right pane check details",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3235455500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6773193500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11209839700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3196472600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Group()"
});
formatter.result({
  "duration": 5200836400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.group_details_loaded_on_right_pane_check_details()"
});
formatter.result({
  "duration": 5000523200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 513330900,
  "status": "passed"
});
formatter.after({
  "duration": 38400,
  "status": "passed"
});
formatter.before({
  "duration": 16565200,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "Admin login - Configure - GroupSettings",
  "description": "This scenario covers view GroupSettings screen from Admin login",
  "id": "admin-view-scenarios;admin-login---configure---groupsettings",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 165,
      "name": "@sanity,"
    },
    {
      "line": 165,
      "name": "@Regression,"
    },
    {
      "line": 165,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 169,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 170,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 173,
  "name": "Click on Group settings",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "group settings loads at right pane check details",
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2747564700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7731240300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11191201400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3214763000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Group_settings()"
});
formatter.result({
  "duration": 5202697500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.group_settings_loads_at_right_pane_check_details()"
});
formatter.result({
  "duration": 5000173500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 500425600,
  "status": "passed"
});
formatter.after({
  "duration": 381900,
  "status": "passed"
});
formatter.before({
  "duration": 13454200,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "Admin login - Configure - Department",
  "description": "This scenario covers view  Configure screen from Admin login",
  "id": "admin-view-scenarios;admin-login---configure---department",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 177,
      "name": "@sanity,"
    },
    {
      "line": 177,
      "name": "@Regression,"
    },
    {
      "line": 177,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 181,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "Click on Departments",
  "keyword": "Then "
});
formatter.step({
  "line": 186,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2795264400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7087316500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11232061600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3188881000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Departments()"
});
formatter.result({
  "duration": 5282131400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 485359500,
  "status": "passed"
});
formatter.after({
  "duration": 231200,
  "status": "passed"
});
formatter.before({
  "duration": 8535800,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "Admin login - Configure - Position",
  "description": "This scenario covers view  Configure Position from Admin login",
  "id": "admin-view-scenarios;admin-login---configure---position",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 188,
      "name": "@sanity,"
    },
    {
      "line": 188,
      "name": "@Regression,"
    },
    {
      "line": 188,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 192,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "Click on Position",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2723185400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6541255400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11233564100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3222755800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Position()"
});
formatter.result({
  "duration": 5209786000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 503783300,
  "status": "passed"
});
formatter.after({
  "duration": 34600,
  "status": "passed"
});
formatter.before({
  "duration": 17136800,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "Admin login - Configure - Job Type",
  "description": "This scenario covers view Job type from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---job-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 199,
      "name": "@sanity,"
    },
    {
      "line": 199,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 203,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 204,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 205,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 207,
  "name": "click on Job Type",
  "keyword": "Then "
});
formatter.step({
  "line": 208,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2718040900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 5660392000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11217563800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3206141400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Job_Type()"
});
formatter.result({
  "duration": 5228897800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 497173200,
  "status": "passed"
});
formatter.after({
  "duration": 28600,
  "status": "passed"
});
formatter.before({
  "duration": 9149200,
  "status": "passed"
});
formatter.scenario({
  "line": 211,
  "name": "Admin Login - Configure - Status Codes",
  "description": "This scenario covers view Status Codes from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---status-codes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 210,
      "name": "@sanity,"
    },
    {
      "line": 210,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 217,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 218,
  "name": "Click on Status code",
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2737778000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8295382400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11195798800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3276400200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Status_code()"
});
formatter.result({
  "duration": 5201193700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 464433900,
  "status": "passed"
});
formatter.after({
  "duration": 29300,
  "status": "passed"
});
formatter.before({
  "duration": 17755100,
  "status": "passed"
});
formatter.scenario({
  "line": 222,
  "name": "Admin Login - Configure - View benefits",
  "description": "This scenario covers view  View benefits from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---view-benefits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 221,
      "name": "@sanity,"
    },
    {
      "line": 221,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 225,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 226,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 227,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 228,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "Clcik on View benefits",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2757898200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7517732500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11216949100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3228882100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_View_benefits()"
});
formatter.result({
  "duration": 5200235700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 520556500,
  "status": "passed"
});
formatter.after({
  "duration": 27600,
  "status": "passed"
});
formatter.before({
  "duration": 11551400,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "Admin Login - Configure - Group Default",
  "description": "This scenario covers Configure Group Default from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---group-default",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 232,
      "name": "@sanity,"
    },
    {
      "line": 232,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 236,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 237,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 239,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "Clcik on Group Default",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2699286200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6556329800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11218048600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3254548500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Group_Default()"
});
formatter.result({
  "duration": 5273818500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 484758100,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 12517200,
  "status": "passed"
});
formatter.scenario({
  "line": 244,
  "name": "Admin Login - Configure - Task",
  "description": "This scenario covers view Task from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 243,
      "name": "@sanity,"
    },
    {
      "line": 243,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 247,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 248,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 249,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 251,
  "name": "Clcik on Task",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2764368000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7753084300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11229701000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3225596400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Task()"
});
formatter.result({
  "duration": 5182990200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 495311000,
  "status": "passed"
});
formatter.after({
  "duration": 37400,
  "status": "passed"
});
formatter.before({
  "duration": 14909500,
  "status": "passed"
});
formatter.scenario({
  "line": 255,
  "name": "Admin Login - Configure - Prj Sales Items",
  "description": "This scenario covers view Prj Sales Item from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---prj-sales-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 254,
      "name": "@sanity,"
    },
    {
      "line": 254,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 258,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 259,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "Clcik on Prj Sales Items",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2718419200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8234999900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11247185400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3224858300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Prj_Sales_Items()"
});
formatter.result({
  "duration": 5233754200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 765989100,
  "status": "passed"
});
formatter.after({
  "duration": 27700,
  "status": "passed"
});
formatter.before({
  "duration": 10124200,
  "status": "passed"
});
formatter.scenario({
  "line": 266,
  "name": "Admin Login - Configure - Project Items",
  "description": "This scenario covers view Project Items from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---project-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 265,
      "name": "@sanity,"
    },
    {
      "line": 265,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 269,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 270,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 271,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 272,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 273,
  "name": "Clcik on Project Items",
  "keyword": "Then "
});
formatter.step({
  "line": 274,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2978394300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8025131100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11226820200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3165075900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Project_Items()"
});
formatter.result({
  "duration": 5205114900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 548169400,
  "status": "passed"
});
formatter.after({
  "duration": 21500,
  "status": "passed"
});
formatter.before({
  "duration": 9189500,
  "status": "passed"
});
formatter.scenario({
  "line": 277,
  "name": "Admin Login - Configure - Certification",
  "description": "This scenario covers view Certification from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---certification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 276,
      "name": "@sanity,"
    },
    {
      "line": 276,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 280,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 281,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 282,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 283,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 284,
  "name": "Clcik on Certification",
  "keyword": "Then "
});
formatter.step({
  "line": 285,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2717236100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7628204400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11221560900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3216128500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Certification()"
});
formatter.result({
  "duration": 5219471300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 471985400,
  "status": "passed"
});
formatter.after({
  "duration": 30400,
  "status": "passed"
});
formatter.before({
  "duration": 19522700,
  "status": "passed"
});
formatter.scenario({
  "line": 288,
  "name": "Admin Login - Configure - Breaks",
  "description": "This scenario covers view  Breaks from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---breaks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 287,
      "name": "@Regression,"
    },
    {
      "line": 287,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 291,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 292,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 293,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 294,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 295,
  "name": "clcik on Breaks",
  "keyword": "Then "
});
formatter.step({
  "line": 296,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2741528800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6949639100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11243730500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3199270700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Breaks()"
});
formatter.result({
  "duration": 5214192200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 519705900,
  "status": "passed"
});
formatter.after({
  "duration": 33400,
  "status": "passed"
});
formatter.before({
  "duration": 8538800,
  "status": "passed"
});
formatter.scenario({
  "line": 299,
  "name": "Admin Login - Configure - Holiday Template",
  "description": "This scenario covers view Holiday Template from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---holiday-template",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 298,
      "name": "@Regression,"
    },
    {
      "line": 298,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 302,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 303,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 304,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 305,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 306,
  "name": "Clcik on Holiday Template",
  "keyword": "Then "
});
formatter.step({
  "line": 307,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2759353700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6414722100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11274623500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3266407900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Holiday_Template()"
});
formatter.result({
  "duration": 5239608700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 511885900,
  "status": "passed"
});
formatter.after({
  "duration": 25200,
  "status": "passed"
});
formatter.before({
  "duration": 18844100,
  "status": "passed"
});
formatter.scenario({
  "line": 310,
  "name": "Admin Login - Configure - Holiday Set",
  "description": "This scenario covers view Holiday Set from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---holiday-set",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 309,
      "name": "@Regression,"
    },
    {
      "line": 309,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 313,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 314,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 315,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "clcik on Holiday Set",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2476819700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6074574900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11195437800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3209662600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Holiday_Set()"
});
formatter.result({
  "duration": 5229937400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 478349200,
  "status": "passed"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.before({
  "duration": 13318800,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "Admin Login - Configure - Holidays",
  "description": "This scenario covers view Holidays from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---holidays",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 320,
      "name": "@Regression,"
    },
    {
      "line": 320,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 324,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 325,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 326,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 328,
  "name": "Click on Holidays",
  "keyword": "Then "
});
formatter.step({
  "line": 329,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2730578700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6786104200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11266525700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3270111800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Holidays()"
});
formatter.result({
  "duration": 5262774200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 523530400,
  "status": "passed"
});
formatter.after({
  "duration": 59800,
  "status": "passed"
});
formatter.before({
  "duration": 9507800,
  "status": "passed"
});
formatter.scenario({
  "line": 332,
  "name": "Admin Login - Configure - Pay Rules",
  "description": "This scenario covers view Pay Rule from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---pay-rules",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 331,
      "name": "@sanity,"
    },
    {
      "line": 331,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 335,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 336,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 337,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "Clcik on Pay Rules",
  "keyword": "Then "
});
formatter.step({
  "line": 340,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2733788200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6546369000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11215952700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3182518300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Pay_Rules()"
});
formatter.result({
  "duration": 5271411000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 499024200,
  "status": "passed"
});
formatter.after({
  "duration": 26800,
  "status": "passed"
});
formatter.before({
  "duration": 12674200,
  "status": "passed"
});
formatter.scenario({
  "line": 343,
  "name": "Admin Login - Configure - Points",
  "description": "This scenario covers view Points from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---points",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 342,
      "name": "@smoke,"
    },
    {
      "line": 342,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 346,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 347,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 348,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 349,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "Clcik on Points",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2509172100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7510416400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11189137800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3214431800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Points()"
});
formatter.result({
  "duration": 5250538100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 525821800,
  "status": "passed"
});
formatter.after({
  "duration": 23800,
  "status": "passed"
});
formatter.before({
  "duration": 10031100,
  "status": "passed"
});
formatter.scenario({
  "line": 354,
  "name": "Admin Login - Configure - Points Reason",
  "description": "This scenario covers view Points Reason from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---points-reason",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 353,
      "name": "@Regression,"
    },
    {
      "line": 353,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 357,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 358,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 359,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 361,
  "name": "Clcik on Point Reason",
  "keyword": "Then "
});
formatter.step({
  "line": 362,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2760293100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7005568000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11177485100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3224089900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Point_Reason()"
});
formatter.result({
  "duration": 5199140000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 522994400,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.before({
  "duration": 9853600,
  "status": "passed"
});
formatter.scenario({
  "line": 365,
  "name": "Admin Login - Configure - Email Templates",
  "description": "This scenario covers view Email template from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---email-templates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 364,
      "name": "@Regression,"
    },
    {
      "line": 364,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 368,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 369,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 370,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 371,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 372,
  "name": "Clcik on Email templates",
  "keyword": "Then "
});
formatter.step({
  "line": 373,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2747201900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7172728200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11261133800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3310727800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Email_templates()"
});
formatter.result({
  "duration": 5224422700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 532505500,
  "status": "passed"
});
formatter.after({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 17494600,
  "status": "passed"
});
formatter.scenario({
  "line": 376,
  "name": "Admin Login - Configure - Pay Types",
  "description": "This scenario covers view Pay Types from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---pay-types",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 375,
      "name": "@Regression,"
    },
    {
      "line": 375,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 379,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 380,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 381,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 382,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 383,
  "name": "Clcik on Pay Types",
  "keyword": "Then "
});
formatter.step({
  "line": 384,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2761871900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 7513338700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11236491200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3134038600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Pay_Types()"
});
formatter.result({
  "duration": 5152913400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 432169200,
  "status": "passed"
});
formatter.after({
  "duration": 23200,
  "status": "passed"
});
formatter.before({
  "duration": 14132800,
  "status": "passed"
});
formatter.scenario({
  "line": 387,
  "name": "Admin Login - Configure - Comments",
  "description": "This scenario covers view  comments from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---comments",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 386,
      "name": "@Regression,"
    },
    {
      "line": 386,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 390,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 391,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 392,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 393,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 394,
  "name": "Clcik on Comments",
  "keyword": "Then "
});
formatter.step({
  "line": 395,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2938355700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8155968200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11230963000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3165241400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Comments()"
});
formatter.result({
  "duration": 5208128500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 471137300,
  "status": "passed"
});
formatter.after({
  "duration": 24400,
  "status": "passed"
});
formatter.before({
  "duration": 13551500,
  "status": "passed"
});
formatter.scenario({
  "line": 398,
  "name": "Admin Login - Configure - Pay Categories",
  "description": "This scenario covers view Pay categories from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---pay-categories",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 397,
      "name": "@Regression,"
    },
    {
      "line": 397,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 401,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 402,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 403,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 405,
  "name": "Clcik on Pay categories",
  "keyword": "Then "
});
formatter.step({
  "line": 406,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2725195100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6609651200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11211857400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3162002700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Pay_categories()"
});
formatter.result({
  "duration": 5223391100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 462395500,
  "status": "passed"
});
formatter.after({
  "duration": 27300,
  "status": "passed"
});
formatter.before({
  "duration": 17172000,
  "status": "passed"
});
formatter.scenario({
  "line": 409,
  "name": "Admin Login - Configure - Shift",
  "description": "This scenario covers view Shift from Admin Login",
  "id": "admin-view-scenarios;admin-login---configure---shift",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 408,
      "name": "@Regression,"
    },
    {
      "line": 408,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 412,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 413,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 414,
  "name": "click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 415,
  "name": "clcik on Configure",
  "keyword": "Then "
});
formatter.step({
  "line": 416,
  "name": "Clcik on Shift",
  "keyword": "Then "
});
formatter.step({
  "line": 417,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2674413800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 5177323300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11152933400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Configure()"
});
formatter.result({
  "duration": 3223444100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Shift()"
});
formatter.result({
  "duration": 5151586000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 749333800,
  "status": "passed"
});
formatter.after({
  "duration": 28700,
  "status": "passed"
});
formatter.before({
  "duration": 24166100,
  "status": "passed"
});
formatter.scenario({
  "line": 420,
  "name": "Admin login - View / Edit Project screen",
  "description": "This scenario covers View / Edit Project screen from Admin login",
  "id": "admin-view-scenarios;admin-login---view-/-edit-project-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 419,
      "name": "@Regression,"
    },
    {
      "line": 419,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 423,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 424,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 425,
  "name": "Admin click on Project Button",
  "keyword": "Then "
});
formatter.step({
  "line": 426,
  "name": "Admin clcik on Project submenu",
  "keyword": "Then "
});
formatter.step({
  "line": 427,
  "name": "Admin Check for Project details at main screen",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2917022000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 5355577300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_click_on_Project_Button()"
});
formatter.result({
  "duration": 149572800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Project_submenu()"
});
formatter.result({
  "duration": 5105594800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Check_for_Project_details_at_main_screen()"
});
formatter.result({
  "duration": 10129152000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 440082900,
  "status": "passed"
});
formatter.after({
  "duration": 26300,
  "status": "passed"
});
formatter.before({
  "duration": 27311100,
  "status": "passed"
});
formatter.scenario({
  "line": 431,
  "name": "Admin login - View / Edit Project Management",
  "description": "This scenario covers View / Edit Project Management from Admin login",
  "id": "admin-view-scenarios;admin-login---view-/-edit-project-management",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 430,
      "name": "@Regression,"
    },
    {
      "line": 430,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 434,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 435,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 436,
  "name": "Admin click on Project Button",
  "keyword": "Then "
});
formatter.step({
  "line": 437,
  "name": "Admin clcik on Project management submenu",
  "keyword": "Then "
});
formatter.step({
  "line": 438,
  "name": "Admin Check for Project management details at main screen",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2734357600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6556006800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_click_on_Project_Button()"
});
formatter.result({
  "duration": 162830800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Project_management_submenu()"
});
formatter.result({
  "duration": 5072715500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Check_for_Project_management_details_at_main_screen()"
});
formatter.result({
  "duration": 10076691800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 511831300,
  "status": "passed"
});
formatter.after({
  "duration": 16400,
  "status": "passed"
});
formatter.before({
  "duration": 11730800,
  "status": "passed"
});
formatter.scenario({
  "line": 442,
  "name": "Admin login - View Approve Time off request",
  "description": "This scenario covers VView Approve Time off request from Admin login",
  "id": "admin-view-scenarios;admin-login---view-approve-time-off-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 441,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "Admin click on Time card Button",
  "keyword": "Then "
});
formatter.step({
  "line": 448,
  "name": "Admin clcik on Time off approval at submenu",
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "Admin Check for View Approve Time off request details at main screen",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2734848500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 8106580400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_click_on_Time_card_Button()"
});
formatter.result({
  "duration": 2273126100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Time_off_approval_at_submenu()"
});
formatter.result({
  "duration": 5079167000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_Check_for_View_Approve_Time_off_request_details_at_main_screen()"
});
formatter.result({
  "duration": 10151271100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 439564000,
  "status": "passed"
});
formatter.after({
  "duration": 16900,
  "status": "passed"
});
formatter.before({
  "duration": 10242500,
  "status": "passed"
});
formatter.scenario({
  "line": 453,
  "name": "Admin login - Add message for Employee",
  "description": "This scenario covers Add message for Employee   from Admin login",
  "id": "admin-view-scenarios;admin-login---add-message-for-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 452,
      "name": "@Regression,"
    },
    {
      "line": 452,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 456,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 457,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 458,
  "name": "Admin click on Messaging",
  "keyword": "Then "
});
formatter.step({
  "line": 459,
  "name": "message screen loaded at rightpane add message details",
  "keyword": "When "
});
formatter.step({
  "line": 460,
  "name": "check message added",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2691434100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6511606100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_click_on_Messaging()"
});
formatter.result({
  "duration": 8240257400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.message_screen_loaded_at_rightpane_add_message_details()"
});
formatter.result({
  "duration": 5578856600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_message_added()"
});
formatter.result({
  "duration": 1942942700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 436397200,
  "status": "passed"
});
formatter.after({
  "duration": 31600,
  "status": "passed"
});
formatter.before({
  "duration": 21313900,
  "status": "passed"
});
formatter.scenario({
  "line": 464,
  "name": "Admin login - View / approve time off Request",
  "description": "This scenario covers View / approve time off Request from Admin login",
  "id": "admin-view-scenarios;admin-login---view-/-approve-time-off-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 463,
      "name": "@Regressio"
    }
  ]
});
formatter.step({
  "line": 466,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 467,
  "name": "Enter valid credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 468,
  "name": "Admin click on Time card Button",
  "keyword": "Then "
});
formatter.step({
  "line": 469,
  "name": "Admin clcik on Time off Request at submenu",
  "keyword": "Then "
});
formatter.step({
  "line": 470,
  "name": "request time off loaded check View details",
  "keyword": "When "
});
formatter.step({
  "line": 471,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2479218200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_credentials_and_click_login()"
});
formatter.result({
  "duration": 6262986100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_click_on_Time_card_Button()"
});
formatter.result({
  "duration": 2209174700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.admin_clcik_on_Time_off_Request_at_submenu()"
});
formatter.result({
  "duration": 5124051800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.request_time_off_loaded_check_View_details()"
});
formatter.result({
  "duration": 27902758200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 523704200,
  "status": "passed"
});
formatter.after({
  "duration": 27700,
  "status": "passed"
});
formatter.uri("featurefiles/Employee.feature");
formatter.feature({
  "line": 2,
  "name": "Employee Login Check and employee feature scenarios validated here.. [0303]",
  "description": "This file coveres all smoke scenarios of Employee login - \r\n\r\nNOTE- This features will cover Employee check list. \r\nmake sure to add correct credentials to Execute these feature scenarios",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303]",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Employyelogin,"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 13281500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate Employee Credentials should be able to login successfully",
  "description": "This scenario validates employee Login",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-employee-credentials-should-be-able-to-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity,"
    },
    {
      "line": 8,
      "name": "@smoke,"
    },
    {
      "line": 8,
      "name": "@Regression,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2955153600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 4438228000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 450611200,
  "status": "passed"
});
formatter.after({
  "duration": 24400,
  "status": "passed"
});
formatter.before({
  "duration": 12396500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Employee Punchin option",
  "description": "This scenario validates employee Punchin from webclock punch panel",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-employee-punchin-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@sanity,"
    },
    {
      "line": 17,
      "name": "@smoke,"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "emp click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2465691900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 3951297700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 88400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.emp_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11182723900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 13169108200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 525956900,
  "status": "passed"
});
formatter.after({
  "duration": 32700,
  "status": "passed"
});
formatter.before({
  "duration": 12988100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#  Given Launch Browser and Open eClock"
    },
    {
      "line": 33,
      "value": "#  When Enter valid Employee credentials and click login"
    },
    {
      "line": 34,
      "value": "#  Then User should be able to login successfully"
    },
    {
      "line": 35,
      "value": "#  Then emp click on webclock from side menu"
    },
    {
      "line": 36,
      "value": "#  Then click on Punch in Button"
    },
    {
      "line": 37,
      "value": "#  Then click on project time button and add time entry"
    },
    {
      "line": 38,
      "value": "#   When update completed check entry"
    },
    {
      "line": 39,
      "value": "#   Then Loggedout successfully"
    }
  ],
  "line": 42,
  "name": "Validate Employee  Lunch start",
  "description": "This scenario validates employee Lunch start from webclock punch panel",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-employee--lunch-start",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@sanity,"
    },
    {
      "line": 41,
      "name": "@smoke,"
    },
    {
      "line": 41,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "emp click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Clcik on Lunch start",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2724165700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 3154727500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.emp_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11226653100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 12928726600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Lunch_start()"
});
formatter.result({
  "duration": 8073474800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 428873100,
  "status": "passed"
});
formatter.after({
  "duration": 26900,
  "status": "passed"
});
formatter.before({
  "duration": 11655700,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validate  Employee Lunch stop",
  "description": "This scenario validates employee Lunch start from webclock punch panel",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate--employee-lunch-stop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@sanity,"
    },
    {
      "line": 53,
      "name": "@smoke,"
    },
    {
      "line": 53,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "emp click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Clcik on Lunch stop",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2477483300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 4413651200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.emp_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11234601400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 13127111800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Lunch_stop()"
});
formatter.result({
  "duration": 7483174100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 439249100,
  "status": "passed"
});
formatter.after({
  "duration": 23100,
  "status": "passed"
});
formatter.before({
  "duration": 17453700,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Validate  Employee Punch Out",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate--employee-punch-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@sanity,"
    },
    {
      "line": 65,
      "name": "@smoke,"
    },
    {
      "line": 65,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "emp click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Click on Punchout Button",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3209071100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 3422043600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 86400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.emp_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11236592400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punchout_Button()"
});
formatter.result({
  "duration": 10436546600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 689777000,
  "status": "passed"
});
formatter.after({
  "duration": 32500,
  "status": "passed"
});
formatter.before({
  "duration": 11511400,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Validate Employee Time card entry",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-employee-time-card-entry",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@sanity,"
    },
    {
      "line": 74,
      "name": "@smoke,"
    },
    {
      "line": 74,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "emp click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "employee click on employee Employees from side bar menu",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "click on Add time card link",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2948012700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 3314258500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.emp_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 11163761400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_employee_Employees_from_side_bar_menu()"
});
formatter.result({
  "duration": 5256258100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Add_time_card_link()"
});
formatter.result({
  "duration": 50700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 949129300,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
formatter.before({
  "duration": 11542400,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "validate View Employee Employee info",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-view-employee-employee-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@sanity,"
    },
    {
      "line": 84,
      "name": "@smoke,"
    },
    {
      "line": 84,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "employee click on employee Employees from side bar menu",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "check employee informarion at main screen",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2713027300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 3054317300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 69500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_employee_Employees_from_side_bar_menu()"
});
formatter.result({
  "duration": 5249900800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_employee_informarion_at_main_screen()"
});
formatter.result({
  "duration": 5013658600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 782048100,
  "status": "passed"
});
formatter.after({
  "duration": 23600,
  "status": "passed"
});
formatter.before({
  "duration": 14420000,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "validate View Employee Personal Info",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-view-employee-personal-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@sanity,"
    },
    {
      "line": 93,
      "name": "@smoke,"
    },
    {
      "line": 93,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "employee click on employee Personal info from side bar menu",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "check employee Personal informarion at main screen",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2493992800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 3456246000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_employee_Personal_info_from_side_bar_menu()"
});
formatter.result({
  "duration": 5264980100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_employee_Personal_informarion_at_main_screen()"
});
formatter.result({
  "duration": 5012088300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 494398900,
  "status": "passed"
});
formatter.after({
  "duration": 20200,
  "status": "passed"
});
formatter.before({
  "duration": 7502600,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "validate View Employee Employee benefits",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-view-employee-employee-benefits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@sanity,"
    },
    {
      "line": 102,
      "name": "@smoke,"
    },
    {
      "line": 102,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "employee click on employee Employee Benefits from side bar menu",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "check employee Employee Benefits at main screen",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2720107400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 2766078500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_employee_Employee_Benefits_from_side_bar_menu()"
});
formatter.result({
  "duration": 5270302800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_employee_Employee_Benefits_at_main_screen()"
});
formatter.result({
  "duration": 5013270000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 554256800,
  "status": "passed"
});
formatter.after({
  "duration": 24600,
  "status": "passed"
});
formatter.before({
  "duration": 8138800,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "validate View Employee Time off Request",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-view-employee-time-off-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@sanity,"
    },
    {
      "line": 111,
      "name": "@smoke,"
    },
    {
      "line": 111,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "employee click on employee Employee Time off Request from side bar menu",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "check Employee Time off Request at main screen",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2477149000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 4360043200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 73800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_employee_Employee_Time_off_Request_from_side_bar_menu()"
});
formatter.result({
  "duration": 5245789400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_Employee_Time_off_Request_at_main_screen()"
});
formatter.result({
  "duration": 10170242800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 501089800,
  "status": "passed"
});
formatter.after({
  "duration": 29600,
  "status": "passed"
});
formatter.before({
  "duration": 8701900,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "validate View Employee Calendar",
  "description": "",
  "id": "employee-login-check-and-employee-feature-scenarios-validated-here..-[0303];validate-view-employee-calendar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 121,
      "name": "@sanity,"
    },
    {
      "line": 121,
      "name": "@smoke,"
    },
    {
      "line": 121,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "Enter valid Employee credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "employee click on employee Employee Calendar from side bar menu",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "check Calendar details at main screen",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2750711000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_and_click_login()"
});
formatter.result({
  "duration": 2772324100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 535700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_employee_Employee_Calendar_from_side_bar_menu()"
});
formatter.result({
  "duration": 3215745100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_Calendar_details_at_main_screen()"
});
formatter.result({
  "duration": 3021536600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 491754800,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.uri("featurefiles/supervisor.feature");
formatter.feature({
  "line": 2,
  "name": "Supervisor Login Check with supervisor credentials -0202",
  "description": "This file coveres all smoke scenarios of supervisor - \r\n\r\nNOTE- This features will cover  supervisor check list. \r\nmake sure to add correct credentials to Execute these feature scenarios",
  "id": "supervisor-login-check-with-supervisor-credentials--0202",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SupervisorLogin"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 6192400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Valid Credentials should be able to login successfully",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;valid-credentials-should-be-able-to-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity,"
    },
    {
      "line": 8,
      "name": "@smoke,"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2762674400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5030902500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 414893800,
  "status": "passed"
});
formatter.after({
  "duration": 46300,
  "status": "passed"
});
formatter.before({
  "duration": 19989000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate Punchin option",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;validate-punchin-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke,"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "supervisor click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2716898900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4849035800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 5200483300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 13336487800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 564377200,
  "status": "passed"
});
formatter.after({
  "duration": 25300,
  "status": "passed"
});
formatter.before({
  "duration": 12801300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Lunch start",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;validate-lunch-start",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke,"
    },
    {
      "line": 24,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "supervisor click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Clcik on Lunch start",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2759233600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4657318200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 230000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 5235682700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 13037638400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Lunch_start()"
});
formatter.result({
  "duration": 7998791900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 706539400,
  "status": "passed"
});
formatter.after({
  "duration": 28200,
  "status": "passed"
});
formatter.before({
  "duration": 13315200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate Lunch stop",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;validate-lunch-stop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@smoke,"
    },
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "supervisor click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "click on Punch in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Clcik on Lunch stop",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2951110200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4771891400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 5220868300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punch_in_Button()"
});
formatter.result({
  "duration": 13119156400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clcik_on_Lunch_stop()"
});
formatter.result({
  "duration": 7262268900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 500190400,
  "status": "passed"
});
formatter.after({
  "duration": 38300,
  "status": "passed"
});
formatter.before({
  "duration": 16515800,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate Punch Out",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;validate-punch-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@smoke,"
    },
    {
      "line": 44,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "supervisor click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click on Punchout Button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2922277100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5550187000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 5209317900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_Punchout_Button()"
});
formatter.result({
  "duration": 10540610300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 709467800,
  "status": "passed"
});
formatter.after({
  "duration": 19400,
  "status": "passed"
});
formatter.before({
  "duration": 8147800,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Supervisor View Edit Calendar",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-edit-calendar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@smoke,"
    },
    {
      "line": 53,
      "name": "@Regression,"
    },
    {
      "line": 53,
      "name": "@Scalendar"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "supervisor click on  Calendar from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2951765100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4390354300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 84400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Calendar_from_side_menu()"
});
formatter.result({
  "duration": 15203166300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 425479700,
  "status": "passed"
});
formatter.after({
  "duration": 35600,
  "status": "passed"
});
formatter.before({
  "duration": 14124100,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "SupervisorView Timecard Exception",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisorview-timecard-exception",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@smoke,"
    },
    {
      "line": 61,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "supervisor click on  Time card Exception from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2670585100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5381379300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Time_card_Exception_from_side_menu()"
});
formatter.result({
  "duration": 5317231100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1185045100,
  "status": "passed"
});
formatter.after({
  "duration": 49100,
  "status": "passed"
});
formatter.before({
  "duration": 24825300,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Supervisor View employee info",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-employee-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@smoke,"
    },
    {
      "line": 69,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "supervisor click on  Employee Employee info from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2961931300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4589357700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Employee_Employee_info_from_side_menu()"
});
formatter.result({
  "duration": 5321517400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 949353500,
  "status": "passed"
});
formatter.after({
  "duration": 27000,
  "status": "passed"
});
formatter.before({
  "duration": 15631200,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "SupervisorView Timecard Exception",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisorview-timecard-exception",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 77,
      "name": "@smoke,"
    },
    {
      "line": 77,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "supervisor click on  Employee Employee Exception from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2953915700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5105223700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Employee_Employee_Exception_from_side_menu()"
});
formatter.result({
  "duration": 5323559300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1184523600,
  "status": "passed"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
formatter.before({
  "duration": 9866400,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Supervisor Edit personal info",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-edit-personal-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 85,
      "name": "@smoke,"
    },
    {
      "line": 85,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "supervisor click on  Employee Personal info from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2958174000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4892191400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Employee_Personal_info_from_side_menu()"
});
formatter.result({
  "duration": 5330072300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 392992800,
  "status": "passed"
});
formatter.after({
  "duration": 29700,
  "status": "passed"
});
formatter.before({
  "duration": 19743800,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Supervisor View Employee Benefits",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-employee-benefits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@smoke,"
    },
    {
      "line": 93,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "supervisor click on  Employee Employee Benefits from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2697658800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5128378200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 102400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Employee_Employee_Benefits_from_side_menu()"
});
formatter.result({
  "duration": 5290261400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 949625400,
  "status": "passed"
});
formatter.after({
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 17840400,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Supervisor View Excused calendar",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-excused-calendar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@smoke,"
    },
    {
      "line": 101,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "supervisor click on  Time card Excused calendar from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2871247600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5416274400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Time_card_Excused_calendar_from_side_menu()"
});
formatter.result({
  "duration": 5260882000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 1193195400,
  "status": "passed"
});
formatter.after({
  "duration": 40200,
  "status": "passed"
});
formatter.before({
  "duration": 21244000,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Supervisor View Employee Points",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-employee-points",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@smoke,"
    },
    {
      "line": 109,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "supervisor click on  Employee Employee points from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2982412900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5072689400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Employee_Employee_points_from_side_menu()"
});
formatter.result({
  "duration": 5246007500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 954752900,
  "status": "passed"
});
formatter.after({
  "duration": 49700,
  "status": "passed"
});
formatter.before({
  "duration": 17067900,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Supervisor View/Edit Project Screen",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view/edit-project-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@smoke,"
    },
    {
      "line": 117,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "supervisor click on  Project Project from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2466818500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5338007200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Project_Project_from_side_menu()"
});
formatter.result({
  "duration": 10298891300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 604657200,
  "status": "passed"
});
formatter.after({
  "duration": 27600,
  "status": "passed"
});
formatter.before({
  "duration": 9262000,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Supervisor View /Edit Project Management",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-/edit-project-management",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 125,
      "name": "@smoke,"
    },
    {
      "line": 125,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "supervisor click on  Project Project management from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2704324100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 6157657000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Project_Project_management_from_side_menu()"
});
formatter.result({
  "duration": 17511671900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 788047500,
  "status": "passed"
});
formatter.after({
  "duration": 31800,
  "status": "passed"
});
formatter.before({
  "duration": 24286000,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Supervisor View/edit time entry of his team members",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view/edit-time-entry-of-his-team-members",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 133,
      "name": "@smoke,"
    },
    {
      "line": 133,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "supervisor click on  Timecard Timecard from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2996992100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5132909100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Timecard_Timecard_from_side_menu()"
});
formatter.result({
  "duration": 260359617800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 685413500,
  "status": "passed"
});
formatter.after({
  "duration": 36400,
  "status": "passed"
});
formatter.before({
  "duration": 9944500,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "Supervisor View Dashboard details of team members",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-dashboard-details-of-team-members",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@smoke,"
    },
    {
      "line": 142,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "supervisor click on Dashboard Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "supervisor click on Dashboard outof office",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 3107745800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5314706700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 78100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Dashboard_Dashboard1()"
});
formatter.result({
  "duration": 17643650100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Dashboard_outof_office()"
});
formatter.result({
  "duration": 10329651600,
  "status": "passed"
});
formatter.after({
  "duration": 60300,
  "status": "passed"
});
formatter.before({
  "duration": 16046700,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "Supervisor View/approve time off request of his team members",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view/approve-time-off-request-of-his-team-members",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 151,
      "name": "@smoke,"
    },
    {
      "line": 151,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 153,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 154,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "supervisor click on  Timecard Approvals from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2882128400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 4397145100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 128400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Timecard_Approvals_from_side_menu()"
});
formatter.result({
  "duration": 5299882400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 917961800,
  "status": "passed"
});
formatter.after({
  "duration": 36000,
  "status": "passed"
});
formatter.before({
  "duration": 16693600,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "Supervisor login - Add message for Employee",
  "description": "This scenario covers Add message for Employee  from supervisor login",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-login---add-message-for-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 162,
      "name": "@smoke,"
    },
    {
      "line": 162,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 166,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 167,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "Supervisor click on Messaging",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "message screen loaded at rightpane add message details",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "check message added",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2677958200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 6031616000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Messaging()"
});
formatter.result({
  "duration": 8227120300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.message_screen_loaded_at_rightpane_add_message_details()"
});
formatter.result({
  "duration": 5039848700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.check_message_added()"
});
formatter.result({
  "duration": 3126530600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 409324300,
  "status": "passed"
});
formatter.after({
  "duration": 28300,
  "status": "passed"
});
formatter.before({
  "duration": 18065600,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "Supervisor login - View / approve time off Request",
  "description": "This scenario covers View / approve time off Request from Admin login",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-login---view-/-approve-time-off-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 174,
      "name": "@smoke,"
    },
    {
      "line": 174,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 179,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "Supervisor click on Timecard TimeOff Request",
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "request time off loaded check View details",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2693602400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5046030000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 112500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Timecard_TimeOff_Request()"
});
formatter.result({
  "duration": 247964400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.request_time_off_loaded_check_View_details()"
});
formatter.result({
  "duration": 28407619800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 507507000,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 6010000,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "Validate supervisor Time entry from timecard",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;validate-supervisor-time-entry-from-timecard",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 185,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 187,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 188,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "supervisor click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 191,
      "value": "#Then click on Punch in Button"
    }
  ],
  "line": 192,
  "name": "supervisor click on  Timecard Timecard from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "employee click on Add New time at main screen",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 194,
      "value": "# [inprogress]When New time entry added edit fileds and update"
    }
  ],
  "line": 195,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "duration": 2576005100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "duration": 5382562900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 97900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_webclock_from_side_menu()"
});
formatter.result({
  "duration": 5240225500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_Timecard_Timecard_from_side_menu()"
});
formatter.result({
  "duration": 260335887900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.employee_click_on_Add_New_time_at_main_screen()"
});
formatter.result({
  "duration": 6166815700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "duration": 8304093500,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8.30 seconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:889)\r\n\tat stepDef.stepdef.loggedout_successfully(stepdef.java:218)\r\n\tat ✽.Then Loggedout successfully(featurefiles/supervisor.feature:195)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3491200,
  "status": "passed"
});
formatter.before({
  "duration": 7948900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 198,
  "name": "Validate supervisor Time entry from project time",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;validate-supervisor-time-entry-from-project-time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 197,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 201,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 202,
  "name": "supervisor click on webclock from side menu",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 203,
      "value": "#Then click on project time button and add time entry"
    },
    {
      "line": 204,
      "value": "#When update completed check entry"
    }
  ],
  "line": 205,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_webclock_from_side_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2902800,
  "status": "passed"
});
formatter.before({
  "duration": 4336300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 208,
  "name": "Supervisor View schedule for employees/Team members",
  "description": "",
  "id": "supervisor-login-check-with-supervisor-credentials--0202;supervisor-view-schedule-for-employees/team-members",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 207,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 209,
  "name": "Launch Browser and Open eClock",
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "Enter valid supervisor credentials and click login",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "supervisor click on schedule weekly schedule from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 213,
  "name": "supervisor click on schedule Default from side menu",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "Loggedout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_eClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_supervisor_credentials_and_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_schedule_weekly_schedule_from_side_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.supervisor_click_on_schedule_Default_from_side_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.loggedout_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2185700,
  "status": "passed"
});
formatter.uri("featurefiles/webclock.feature");
formatter.feature({
  "line": 2,
  "name": "WebClock features check",
  "description": "",
  "id": "webclock-features-check",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@webClock"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 4327000,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "Webclcok Employee Punchin",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-punchin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@smoke,"
    },
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@DEMO03"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check Punchin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Punchin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3264000,
  "status": "passed"
});
formatter.before({
  "duration": 4317000,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Webclcok Employee Lunch Start",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-lunch-start",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@smoke,"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "check Lunch start",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Lunch_start()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2005900,
  "status": "passed"
});
formatter.before({
  "duration": 2829900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Webclcok Lunch Stop",
  "description": "",
  "id": "webclock-features-check;webclcok-lunch-stop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@sanity,"
    },
    {
      "line": 16,
      "name": "@smoke,"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "check Lunch stop",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Lunch_stop()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3015200,
  "status": "passed"
});
formatter.before({
  "duration": 4259000,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Webclcok Break Start",
  "description": "",
  "id": "webclock-features-check;webclcok-break-start",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@sanity,"
    },
    {
      "line": 22,
      "name": "@smoke,"
    },
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "check Break Start",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Break_Start()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2438000,
  "status": "passed"
});
formatter.before({
  "duration": 4040800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Webclcok Break Stop",
  "description": "",
  "id": "webclock-features-check;webclcok-break-stop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@sanity,"
    },
    {
      "line": 28,
      "name": "@smoke,"
    },
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "check Break Stop",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Break_Stop()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3222800,
  "status": "passed"
});
formatter.before({
  "duration": 9782700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "Webclcok Project Time",
  "description": "",
  "id": "webclock-features-check;webclcok-project-time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@sanity,"
    },
    {
      "line": 34,
      "name": "@smoke,"
    },
    {
      "line": 34,
      "name": "@Regression,"
    },
    {
      "line": 34,
      "name": "@ptime"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "check Project Time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Project_Time()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7492900,
  "status": "passed"
});
formatter.before({
  "duration": 4942600,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 41,
  "name": "Webclcok Employee Last Punch",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-last-punch",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@sanity,"
    },
    {
      "line": 40,
      "name": "@smoke,"
    },
    {
      "line": 40,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "check Last Punch",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Last_Punch()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3218400,
  "status": "passed"
});
formatter.before({
  "duration": 4365800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 47,
  "name": "Webclcok Employee Hours this payperiod",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-hours-this-payperiod",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@sanity,"
    },
    {
      "line": 46,
      "name": "@smoke,"
    },
    {
      "line": 46,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "check Hours this payperiod",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Hours_this_payperiod()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3016700,
  "status": "passed"
});
formatter.before({
  "duration": 4442800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 53,
  "name": "Webclcok Employee Request Status",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-request-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@sanity,"
    },
    {
      "line": 52,
      "name": "@smoke,"
    },
    {
      "line": 52,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "check Request Status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Request_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3399300,
  "status": "passed"
});
formatter.before({
  "duration": 4882800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 59,
  "name": "Webclcok Employee TimeOff Request",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-timeoff-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@sanity,"
    },
    {
      "line": 58,
      "name": "@smoke,"
    },
    {
      "line": 58,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "check TimeOff Request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_TimeOff_Request()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2357700,
  "status": "passed"
});
formatter.before({
  "duration": 4228100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 65,
  "name": "Webclcok Employee Current Benifit balance",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-current-benifit-balance",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@sanity,"
    },
    {
      "line": 64,
      "name": "@smoke,"
    },
    {
      "line": 64,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "check Current Benifit balance",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Current_Benifit_balance()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3413800,
  "status": "passed"
});
formatter.before({
  "duration": 6817800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 71,
  "name": "Webclcok Employee Job Start",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-job-start",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@sanity,"
    },
    {
      "line": 70,
      "name": "@smoke,"
    },
    {
      "line": 70,
      "name": "@Regression,"
    },
    {
      "line": 70,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "check Job start",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Job_start()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2529500,
  "status": "passed"
});
formatter.before({
  "duration": 6604400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 77,
  "name": "Webclcok Employee  POS. Transfer",
  "description": "",
  "id": "webclock-features-check;webclcok-employee--pos.-transfer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@sanity,"
    },
    {
      "line": 76,
      "name": "@smoke,"
    },
    {
      "line": 76,
      "name": "@Regression,"
    },
    {
      "line": 76,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "check  POS Transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_POS_Transfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2768700,
  "status": "passed"
});
formatter.before({
  "duration": 5141800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : There was a problem updating 1 or more record(s) due to  time overlaps.}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds: null\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027PIS076\u0027, ip: \u0027192.168.20.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53632}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\schandan\\AppData\\Local\\Temp\\scoped_dir10852_1795962031}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.89, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 92bd800b0db149d26eea4acf383fe7d5\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:829)\r\n\tat stepDef.UtilityDriver.inibrowser(UtilityDriver.java:55)\r\n\tat stepDef.Hooks.openBrowser(Hooks.java:27)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 85,
  "name": "Webclcok Employee Punchout",
  "description": "",
  "id": "webclock-features-check;webclcok-employee-punchout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@sanity,"
    },
    {
      "line": 84,
      "name": "@smoke,"
    },
    {
      "line": 84,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "Launch Browser and Open webClock",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "enter valid Employee credentials at webclock",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "check Punchout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.launch_Browser_and_Open_webClock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_valid_Employee_credentials_at_webclock()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.check_Punchout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3091000,
  "status": "passed"
});
});
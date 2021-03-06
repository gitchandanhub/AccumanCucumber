package stepDef;

//import java.text.SimpleDateFormat;
//import java.util.Calendar;
import org.junit.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByClassName;
import org.openqa.selenium.By.ByTagName;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.security.Credentials;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;



import org.openqa.selenium.support.ui.WebDriverWait;

import com.thoughtworks.selenium.webdriven.commands.IsAlertPresent;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdef {
	ConfigFileReader configFileReader;
	
	
	
	@Given("^Launch Browser and Open eClock$")
	public void launch_Browser_and_Open_eClock() throws Exception {
		
		// To run tests with FF browser  
		//System.setProperty("webdriver.gecko.driver", "\"F:\\selenium JARS\\geckodriver.exe\"");
	//	driver=new FirefoxDriver();
		
		//To run tests with Chrome Browser 
		//System.setProperty("webdriver.chrome.driver", "D:\\AUTO\\chromedriver.exe");
		//driver=new ChromeDriver();
		 
		//step2: Hit URL -n Test scenarios at inhouse 
		configFileReader = new ConfigFileReader();
		UtilityDriver.driver.navigate().to(configFileReader.getApplicationeclock());
		Thread.sleep(2000);
		//step2: Hit URL - Test scenarios at QA URL
		//UtilityDriver.driver.navigate().to("http://20.acumenport.com/pis/qa/eclockview/login.aspx");
		
		//UtilityDriver.driver.manage().window().maximize();
		//Thread.sleep(3000);
		
		
		
		
	//	Logger logger=Logger.getLogger("eclcokloginSteps");
	}
	
// Admin login
	@When("^Enter valid credentials and click login$")
	public void enter_valid_credentials_and_click_login() throws Exception {
		UtilityDriver.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		String admuser = configFileReader.getadminuser();
		String admpass = configFileReader.getadminpass();
		UtilityDriver.driver.findElement(By.id("txtUsername")).sendKeys(admuser);
		UtilityDriver.driver.findElement(By.id("txtPassword")).sendKeys(admpass);
		//Step 4: click login
		UtilityDriver.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		UtilityDriver.driver.findElement(By.xpath(".//*[@value='Login']")).click();
		}

// Employee login 0303
	@When("^Enter valid Employee credentials and click login$")
	public void enter_valid_Employee_credentials_and_click_login() throws Exception {
	   	
		String empuser = configFileReader.getempuser();
		String emppass = configFileReader.getemppwd();
		
		//UtilityDriver.driver.pageobjects.LoginPage.username.sendKeys(empuser);
		
		UtilityDriver.driver.findElement(By.id("txtUsername")).sendKeys(empuser);
		UtilityDriver.driver.findElement(By.id("txtPassword")).sendKeys(emppass);
		//Step 4: click login
		UtilityDriver.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		UtilityDriver.driver.findElement(By.xpath(".//*[@value='Login']")).click();
	}
	
	//supervisor login 0202
	@When("^Enter valid supervisor credentials and click login$")
	public void enter_valid_supervisor_credentials_and_click_login() throws Exception {
			
		String supuser = configFileReader.getsupuser();
		String suppass = configFileReader.getsuppwd();
		UtilityDriver.driver.findElement(By.id("txtUsername")).sendKeys(supuser);
		UtilityDriver.driver.findElement(By.id("txtPassword")).sendKeys(suppass);
		//Step 4: click login
		UtilityDriver.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		UtilityDriver.driver.findElement(By.xpath(".//*[@value='Login']")).click();
	}

	
	@Then("^User should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Exception {
	    System.out.println("Successfully Login");
	    
	 System.out.println("Verify titile");
	
	 //verify title 
		String apptitle = "";
		String Expectedtitle = "LaborView";
		
		System.out.println("Tittle is " +apptitle);
		 if(Expectedtitle == apptitle);
		System.out.println("title matched - Pass");
		
	} 

@Then("^click on webclock from side menu$")
public void click_on_webclock_from_side_menu() throws Exception {
	Thread.sleep(5000);
	
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("//a[contains(@href,'/webclock/index.aspx?HideHeader')]")).click();
	Thread.sleep(6000);
}


@Then("^emp click on webclock from side menu$")
public void emp_click_on_webclock_from_side_menu() throws Exception {
	Thread.sleep(5000);
	
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	//UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[4]/td/a")).click();
	//UtilityDriver.driver.findElement(By.xpath("//a[@href='webmessaging.aspx']")).click();
	UtilityDriver.driver.findElement(By.linkText("WebClock")).click();
	Thread.sleep(6000);
}

@Then("^click on Punch in Button$")
public void click_on_Punch_in_Button() throws Exception {
	System.out.println("Entered default");
	UtilityDriver.driver.switchTo().defaultContent();
	System.out.println("Entered entered webmain");
	Thread.sleep(2000);
	UtilityDriver.driver.switchTo().frame("kMain"); 
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000);
	System.out.println("Entered to punch pannel");
	UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl00_Imagebutton1")).click();
	Thread.sleep(6000);
	//driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td/div[1]/table/tbody/tr[7]/td/table/tbody/tr/td/table/tbody/tr[2]/td[1]/input")).click();
	System.out.println("Entered clicked on Punch in - Successfull Punch IN");
}

@Then("^Click on Punchout Button$")
public void click_on_Punchout_Button() throws Exception {
	Thread.sleep(4000);
	System.out.println("Punch panne punchout check");
	UtilityDriver.driver.switchTo().defaultContent();
	System.out.println("Entered entered webmain");
	UtilityDriver.driver.switchTo().frame("kMain"); 
	System.out.println("Entered to punch pannel");
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(4000);
	UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl01_Imagebutton1")).click();
	System.out.println("Successful");
	//driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td/div[1]/table/tbody/tr[7]/td/table/tbody/tr/td/table/tbody/tr[2]/td[1]/input")).click();
	System.out.println("Entered clicked on Punch in - Successfull Punch Out");
	 
}

@Then("^Clcik on Lunch start$")
public void clcik_on_Lunch_start() throws Exception {
	System.out.println("Punch pannel Lunch start check");
	UtilityDriver.driver.switchTo().defaultContent();
	System.out.println("Entered entered webmain");
	UtilityDriver.driver.switchTo().frame("kMain"); 
	System.out.println("Entered topunch pannel");
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(6000);
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td/div[1]/table/tbody/tr[7]/td/table/tbody/tr/td/table/tbody/tr[1]/td[3]/input")).click();
	System.out.println("Entered clicked on Lunch start - Successfull Lunch start");
	
	
}


@Then("^Clcik on Lunch stop$")
public void clcik_on_Lunch_stop() throws Exception {
	System.out.println("Punch panne Luch stop check");
	UtilityDriver.driver.switchTo().defaultContent();
	System.out.println("Entered entered webmain");
	UtilityDriver.driver.switchTo().frame("kMain"); 
	System.out.println("Entered to punch pannel");
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(6000);
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td/div[1]/table/tbody/tr[7]/td/table/tbody/tr/td/table/tbody/tr[1]/td[5]/input")).click();
	System.out.println("Entered clicked on Lunch STOP - Successfull Lunch STOP");
	
}

@Then("^Loggedout successfully$")
public void loggedout_successfully() throws Exception {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kHeader");
	UtilityDriver.driver.findElement(By.id("signout")).click();  
	//UtilityDriver.driver.quit();
	//System.out.println("Browser Quit");
}

@Then("^click on time card  left pane$")
public void click_on_time_card_left_pane() throws Exception {
	System.out.print("Checking Add new Time ");
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[14]/td")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[1]/td[2]/a")).click();
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	// driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("lnkNewTime")).click();
	System.out.println("clicked Add new Time ");
	UtilityDriver.driver.findElement(By.xpath("html/body/form/div[5]/table[1]/tbody/tr/td/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td[3]/span/input")).click();
	//driver.findElement(By.xpath("html/body/form/div[5]/table[1]/tbody/tr/td/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td[4]/span/input")).click(); 
	UtilityDriver.driver.findElement(By.id("rptTime_ctl00_txtIn")).sendKeys("8:00 AM");
	System.out.println("check update ");
    
}

@Then("^click on Add time card link$")
public void click_on_Add_time_card_link() throws Exception {
	System.out.println(" Menu Add new Time "); 
	
	
}

@Then("^Clcik on Home link to chk homepage loads$")
public void clcik_on_Home_link_to_chk_homepage_loads() throws Exception {
	System.out.println("Home link");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[1]/td/a")).click();		
	Thread.sleep(5000);
	
}

@Then("^Clcik on Employee Portal link to chk Employee page$")
public void clcik_on_Employee_Portal_link_to_chk_Employee_page() throws Exception {
	System.out.println("Employee Pages link");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td/a")).click();		
	Thread.sleep(5000); 
}

@Then("^Clcik on Portal Item search to check Portable Item search screen$")
public void clcik_on_Portal_Item_search_to_check_Portable_Item_search_screen() throws Exception {
	System.out.println("Portal Item search  link");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[3]/td/a")).click();		
	Thread.sleep(5000);
}

@Then("^Clcik on Web clock link to check Web clock page$")
public void clcik_on_Web_clock_link_to_check_Web_clock_page() throws Exception {
	System.out.println("Webclock link");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("//a[@href='webmessaging.aspx']")).click();
	//UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[4]/td/a")).click();		
	Thread.sleep(5000);
}

@Then("^Click on Dashboard link to check Dashboard options$")
public void click_on_Dashboard_link_to_check_Dashboard_options() throws Exception {
	System.out.println("Dashboard options Check");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[5]/td")).click();
	System.out.print("clicked on Dash board");
	Thread.sleep(4000); 
	
	// Dash board sub menu 
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[6]/td")).click();
			System.out.print("clicked on Dashboard sub menu");
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[6]/td/ul/div/table/tbody/tr[1]/td[2]/a")).click();
			Thread.sleep(9000);
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[6]/td/ul/div/table/tbody/tr[2]/td[2]/a")).click();
			Thread.sleep(5000);
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[6]/td/ul/div/table/tbody/tr[3]/td[2]/a")).click();
			Thread.sleep(5000);
}

@Then("^Click on Messaging Link$")
public void click_on_Messaging_Link() throws Exception {
	System.out.println("Messaging Link Check");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[7]/td/a")).click();
	System.out.print("clicked on Messaging Link");
}

@Then("^Clcik on messaging History Link$")
public void clcik_on_messaging_History_Link() throws Exception {
	System.out.println("Messaging  History Check");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	// Click Messaging History Link	
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[8]/td/a")).click();
	System.out.print("clicked on Messaging history");
	Thread.sleep(5000);
	
	}

@Then("^Clcik on Admin Link$")
public void clcik_on_Admin_Link() throws Exception {
	System.out.println("Admin Check");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	// Click Admin Link	
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[9]/td")).click();
			System.out.print("Clcik on Admin Link");
			Thread.sleep(5000);
}

@Then("^Click Admin sub menu Security Link$")
public void click_Admin_sub_menu_Security_Link() throws Exception {
   
	System.out.println("Admin sub menu Check");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	// Click Admin > sub menu "Security" Link	
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[10]/td/ul/div/table/tbody/tr[1]/td[2]/a")).click();
			System.out.print("clickedAdmin sub menu Security");
			Thread.sleep(5000); 
}

/*	@Then("^Clcik on Admin Link$")
public void clcikOnAdminLink() throws Throwable {
	System.out.println("Admin Check");
	driver.switchTo().defaultContent();
	driver.switchTo().frame("kSidebar");
	driver.findElement(By.className("ADS_MenuItem")).click();
	// Click Admin Link	
			driver.findElement(By.xpath("html/body/form/table/tbody/tr[9]/td")).click();
			System.out.print("clicked on Messaging history");
			Thread.sleep(5000);
} */

@Then("^Clcik on Portable Item search to check Portable Item search screen$")
public void clcik_on_Portable_Item_search_to_check_Portable_Item_search_screen() throws Exception {
    
	
}

@Then("^Clcik on Employee$")
public void clcik_on_Employee() throws Exception {
System.out.println("Admin sub menu Check");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Employee
UtilityDriver. driver.findElement(By.xpath("html/body/form/table/tbody/tr[12]/td")).click();

}

@Then("^Clcik on Employees$")
public void clcik_on_Employees() throws Exception { 
 
// Click on employee sub menu - Employees
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[13]/td/ul/div/table/tbody/tr[1]/td[2]/a")).click();
System.out.println("clicked on Employees");
Thread.sleep(3000);   
}

@Then("^select Employee details from Dropdown$")
public void select_Employee_details_from_Dropdown() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(3000);
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("[supervisor],QA1");
System.out.println("selected employee"); 
}

@When("^selected employee informations should get displayed$")
public void selected_employee_informations_should_get_displayed() throws Exception {

System.out.println("Displays employee details of selected name");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");

}

@Then("^Clcik on Employyes Benefit$")
public void clcik_on_Employyes_Benefit() throws Exception {

// Click on employee sub menu - Employee benefits
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[13]/td/ul/div/table/tbody/tr[5]/td[2]/a")).click();
System.out.println("clciked employee benefits");
UtilityDriver. driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("[supervisor],QA1");


} 

@Then("^check Assigned Benefits, period to skip and values tabs$")
public void check_Assigned_Benefits_period_to_skip_and_values_tabs() throws Exception {
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[2]/td/div/div[2]/div/ul/li[1]/a/span/span/span")).click();
System.out.println("view employee assign benefits");
Thread.sleep(3000);
// View Periods to skip
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[2]/td/div/div[2]/div/ul/li[2]/a/span/span/span")).click();
System.out.println("view employee Period to skip");
Thread.sleep(3000);
// View Usage
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[2]/td/div/div[2]/div/ul/li[3]/a/span/span/span")).click();
System.out.println("view employee usage");
Thread.sleep(3000);
}

@Then("^Employee benefita page should get displayed$")
public void employee_benefita_page_should_get_displayed() throws Exception {

System.out.println("Employee benefits displayed");

}

@Then("^Clcik on Personal Information$")
public void clcik_on_Personal_Information() throws Exception {
System.out.println("view employee personal information");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();

// Click on Employee
//driver.findElement(By.xpath("html/body/form/table/tbody/tr[12]/td")).click();
UtilityDriver. driver.findElement(By.xpath("html/body/form/table/tbody/tr[13]/td/ul/div/table/tbody/tr[3]/td[2]/a")).click();

System.out.println("clciked employee personal Information");
}

@Then("^Check Personal information displayed in right pane$")
public void check_Personal_information_displayed_in_right_pane() throws Exception {
//driver.findElement(By.xpath("html/body/form/table/tbody/tr[13]/td/ul/div/table/tbody/tr[3]/td[2]/a")).click();
//System.out.println("clciked employee personal Information");
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kMain");
WebElement DDBox = UtilityDriver.driver.findElement(By.id("cmbEmployees"));
 Select sel = new Select(DDBox);
 sel.selectByIndex(0);
 System.out.println("check personal Information of Employee");
 Thread.sleep(5000);
 UtilityDriver.driver.findElement(By.id("cmdUpdate")).click();		
 
//driver.findElement(By.id("cmbEmployees")).sendKeys("[supervisor],QA1");
//System.out.println("check personal Information");
//Thread.sleep(5000);
//System.out.println(" check employee personal information");

}

@When("^edit completes click on update button$")
public void edit_completes_click_on_update_button() throws Exception {

WebElement DDBox = UtilityDriver.driver.findElement(By.id("cmbEmployees"));
// Select sel = new Select(DDBox);
//sel.selectByVisibleText("[Employee], QA111");
// sel.selectByValue();
UtilityDriver.driver.findElement(By.id("rptUserFields_ctl00_txtField")).sendKeys("Test address");
 
// driver.findElement(By.id("cmdUpdate")).click();
System.out.print("clicked Update Button ");
}

@Then("^Clcik on Timecard Link$")
public void clcik_on_Timecard_Link() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[14]/td")).click();


}

@Then("^click on Timem card sub menu calendar link$")
public void click_on_Timem_card_sub_menu_calendar_link() throws Exception {
System.out.print("clicked calendar");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[10]/td[2]/a")).click();

}

@When("^check calendar displayed on right pane check details$")
public void check_calendar_displayed_on_right_pane_check_details() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kMain");
//driver.switchTo().frame("kMain");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr/td/table/tbody/tr[1]/td[2]/select")).click();
}


@Then("^clcik on Time card$")
public void clcik_on_Time_card() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
//driver.findElement(By.xpath("html/body/form/table/tbody/tr[14]/td")).click();
//driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[1]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath(".//*[@id='Form1']/table/tbody/tr[11]/td")).click();
UtilityDriver.driver.findElement(By.xpath(".//*[@id='sub_mnuTime']/table/tbody/tr[1]/td[2]/a")).click();

}

@Then("^clcik on time card sub menu Time Off request$")
public void clcik_on_time_card_sub_menu_Time_Off_request() throws Exception {
System.out.print("Time off request");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[11]/td[2]/a")).click();

}

@When("^time off request screen loads at right pane clcik on Add$")
public void time_off_request_screen_loads_at_right_pane_clcik_on_Add() throws Exception {
// Write code here that turns the phrase above into concrete actions

}

@Then("^enter dates select required fields$")
public void enter_dates_select_required_fields() throws Exception {
// Write code here that turns the phrase above into concrete actions

}

@Then("^click on Update$")
public void click_on_Update() throws Exception {
// Write code here that turns the phrase above into concrete actions

}

@Then("^clcik on time card sub menu Time Off Approval$")
public void clcik_on_time_card_sub_menu_Time_Off_Approval() throws Exception {
System.out.print("Time off request");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[12]/td[2]/a")).click();

} 



@When("^time off request screen loads at right pane$")
public void time_off_request_screen_loads_at_right_pane() throws Exception {
System.out.print("Time off request loaded");
Thread.sleep(5000);

}

@Then("^clcik on time card sub menu Calendar$")
public void clcik_on_time_card_sub_menu_Calendar() throws Exception {
System.out.print("Time card calendar here");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[10]/td[2]/a")).click();
Thread.sleep(5000);

}

@Then("^clcik on time card sub menu Invalid punches$")
public void clcik_on_time_card_sub_menu_Invalid_punches() throws Exception {
System.out.print("Time card Invalid punches here");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[8]/td[2]/a")).click();
Thread.sleep(5000);
}

@Then("^clcik on time card sub menu Time picture$")
public void clcik_on_time_card_sub_menu_Time_picture() throws Exception {
System.out.print("Time card Time picture");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[9]/td[2]/a")).click();
Thread.sleep(5000);
}

@Then("^clcik on time card sub menu  Swap Shift Request$")
public void clcik_on_time_card_sub_menu_Swap_Shift_Request() throws Exception {
System.out.print("Time card Swap Shift Request");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[17]/td[2]/a")).click();
Thread.sleep(5000);
}

@Then("^clcik on Configure$")
public void clcik_on_Configure() throws Exception {
// Write code here that turns the phrase above into concrete actions

UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on configuration
UtilityDriver. driver.findElement(By.xpath("//td[text()='Configure']")).click();
//UtilityDriver. driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td")).click();
System.out.println("Admin click on Config");
Thread.sleep(3000);
}

@Then("^Click on Group$")
public void click_on_Group() throws Exception {
// Write code here that turns the phrase above into concrete actions
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configGroups.aspx']")).click();
System.out.println("view Admin Config- Group");
Thread.sleep(5000);
}

@When("^group details loaded on right pane check details$")
public void group_details_loaded_on_right_pane_check_details() throws Exception {
// Write code here that turns the phrase above into concrete actions
 System.out.println("view Group information");
 Thread.sleep(5000);
 
}

@Then("^Click on Group settings$")
public void click_on_Group_settings() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='GroupSetup.aspx']")).click();
System.out.println("view Admin Config- Group settings");
Thread.sleep(5000);

}

@When("^group settings loads at right pane check details$")
public void group_settings_loads_at_right_pane_check_details() throws Exception {
 System.out.println("view Group Settings information");
 Thread.sleep(5000);
}

@Then("^Click on Departments$")
public void click_on_Departments() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configDepartments.aspx']")).click();
System.out.println("view Admin Config- Department");
Thread.sleep(5000);
}

@Then("^Click on Position$")
public void click_on_Position() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configPositions.aspx']")).click();
System.out.println("view Admin Config- Position");
Thread.sleep(5000);

}

@Then("^click on Job Type$")
public void click_on_Job_Type() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configJobTypes.aspx']")).click();
System.out.println("view Admin Config- Job Type");
Thread.sleep(5000);


}

@Then("^Click on Status code$")
public void click_on_Status_code() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configStatusCodes.aspx']")).click();
System.out.println("view Admin Config- Status code");
Thread.sleep(5000);

}

@Then("^Clcik on View benefits$")
public void clcik_on_View_benefits() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configBenefits.aspx']")).click();
System.out.println("view Admin Config- benefits");
Thread.sleep(5000);
}

@Then("^Clcik on Group Default$")
public void clcik_on_Group_Default() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configGroupBenefits.aspx']")).click();
System.out.println("view Admin Config- Group default");
Thread.sleep(5000);
}

@Then("^Clcik on Task$")
public void clcik_on_Task() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configTasks.aspx?lvl=0']")).click();
System.out.println("view Admin Config- TASK");
 Thread.sleep(5000);

}

@Then("^Clcik on Prj Sales Items$")
public void clcik_on_Prj_Sales_Items() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configItem.aspx']")).click();
System.out.println("view Admin Config- Prj Sales Item");
 Thread.sleep(5000);

}

@Then("^Clcik on Project Items$")
public void clcik_on_Project_Items() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configProjectItem.aspx']")).click();
System.out.println("view Admin Config- Prroject Item");
 Thread.sleep(5000);

}

@Then("^Clcik on Certification$")
public void clcik_on_Certification() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='Certifications.aspx']")).click();
System.out.println("view Admin Config- Certification");
 Thread.sleep(5000);


}

@Then("^clcik on Breaks$")
public void clcik_on_Breaks() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configBreaks.aspx']")).click();
System.out.println("view Admin Config- Breaks");
 Thread.sleep(5000);


}

@Then("^Clcik on Holiday Template$")
public void clcik_on_Holiday_Template() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configHolidayTemplates.aspx']")).click();
System.out.println("view Admin Config- Holiday Templates");
 Thread.sleep(5000);

}

@Then("^clcik on Holiday Set$")
public void clcik_on_Holiday_Set() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configHolidaySets.aspx']")).click();
System.out.println("view Admin Config- Holiday Set");
 Thread.sleep(5000);

}

@Then("^Click on Holidays$")
public void click_on_Holidays() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configHolidays.aspx']")).click();
System.out.println("view Admin Config- Holidays");
 Thread.sleep(5000);

}

@Then("^Clcik on Pay Rules$")
public void clcik_on_Pay_Rules() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='payrules.aspx']")).click();
System.out.println("view Admin Config- Pay Rule");
 Thread.sleep(5000); 

}

@Then("^Clcik on Points$")
public void clcik_on_Points() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configPoints.aspx']")).click();
System.out.println("view Admin Config- Points");
 Thread.sleep(5000); 
}

@Then("^Clcik on Point Reason$")
public void clcik_on_Point_Reason() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configReasonPoint.aspx']")).click();
System.out.println("view Admin Config- Point Reason");
 Thread.sleep(5000); 
}

@Then("^Clcik on Email templates$")
public void clcik_on_Email_templates() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configWarningLevelEmailTemplates.aspx']")).click();
System.out.println("view Admin Config- Email Templates");
 Thread.sleep(5000); 
}

@Then("^Clcik on Pay Types$")
public void clcik_on_Pay_Types() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configPayTypes.aspx']")).click();
System.out.println("view Admin Config- Pay Types");
 Thread.sleep(5000); 
}

@Then("^Clcik on Comments$")
public void clcik_on_Comments() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configComments.aspx']")).click();
System.out.println("view Admin Config- Comments");
 Thread.sleep(5000); 
}

@Then("^Clcik on Pay categories$")
public void clcik_on_Pay_categories() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configPayCategories.aspx']")).click();
System.out.println("view Admin Config- Pay categories");
 Thread.sleep(5000); 
}

@Then("^Clcik on Shift$")
public void clcik_on_Shift() throws Exception {
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='configShiftCodes.aspx']")).click();
System.out.println("view Admin Config- Shift");
 Thread.sleep(5000); 
}

@Then("^clcik on Reports$")
public void clcik_on_Reports() throws Exception {
// Write code here that turns the phrase above into concrete actions
//System.out.println("view Admin Config");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Reports
UtilityDriver.driver.findElement(By.xpath("//td[text()='Reports']")).click(); 

}

@Then("^go to Time - Timecard and click$")
public void go_to_Time_Timecard_and_click() throws Exception {
// 
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='reports/TimecardReport.aspx']")).click();
System.out.println("time card report page loades in right pane ");
Thread.sleep(5000); 
}

@Then("^go to Time - Project Time$")
public void go_to_Time_Project_Time_and_click() throws Exception {
// 
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath(".//*[@id='sub_mnuReports']/table/tbody/tr[3]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath(".//*[@id='sub_smnuReports_Time']/table/tbody/tr[20]/td[2]/a")).click();
System.out.println("time card report page loades in right pane ");
Thread.sleep(5000); 
}

@Then("^go to Time - Timecard Totals$")
public void go_to_Time_Timecard_Totals_and_click() throws Exception {
// 
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath(".//*[@id='sub_mnuReports']/table/tbody/tr[3]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath(".//*[@id='sub_smnuReports_Time']/table/tbody/tr[8]/td[2]/a")).click();
System.out.println("time card report page loades in right pane ");
Thread.sleep(5000); 
}


@Then("^go to Time - Timecard History$")
public void go_to_Time_Timecard_History_and_click() throws Exception {
// 
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[5]/td[2]/a")).click();
System.out.println("time card report page loades in right pane ");
Thread.sleep(5000); 
}



@Then("^go to Time - Project View$")
public void go_to_Time_Project_View_and_click() throws Exception {
// 
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[18]/td[2]/a")).click();
System.out.println("time card report page loades in right pane ");
Thread.sleep(5000); 
}



@Then("^check Create report for Timecard$")
public void check_Create_report_for_Timecard() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	String maintitle= UtilityDriver.driver.getTitle();
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page "+maintitle);
	Thread.sleep(6000);
	}}
	/*Set<String> ids = UtilityDriver.driver.getWindowHandles();
	try{
		
		UtilityDriver.driver.switchTo().activeElement().click();
		Thread.sleep(5000);
		UtilityDriver.driver.close();
	} 	
	catch (Exception e) {
			for(String id: ids){	
				UtilityDriver.driver.switchTo().window(id);
				String title = UtilityDriver.driver.getTitle();
				if(title.equals("LabourView")){
				System.out.println("currently at main screen");
				}
				else {
					System.out.println("Check report data ");
					Thread.sleep(5000);
					UtilityDriver.driver.close();
					}
	}
} */

@Then("^check Create report for Expenses report$")
public void check_Create_report_for_Expenses_report() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^check Create report for Project time$")
public void check_Create_report_for_Project_time() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^check Create report for Timecard Totals$")
public void check_Create_report_for_Timecard_Totals() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^check Create report for Timecard History$")
public void check_Create_report_for_Timecard_History() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^check Create report for Project View$")
public void check_Create_report_for_Project_View() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	Thread.sleep(8000);
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^go to Time - Break time$")
public void go_to_Time_Break_time() throws Throwable {
	// 
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[20]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000); 
}

@Then("^check Create report for Break time$")
public void check_Create_report_for_Break_time() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^go to Time - Excused time$")
public void go_to_Time_Excused_time() throws Throwable {
	// 
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[35]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000); 
}

@Then("^check Create report for Excused time$")
public void check_Create_report_for_Excused_time() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^go to Time - Task time$")
public void go_to_Time_Task_time() throws Throwable {
	// 
		System.out.println("view report submenu and then click on Time");
		//reports side bar sub menu
		UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
		UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[14]/td[2]/a")).click();
		System.out.println("time card report page loades in right pane ");
		Thread.sleep(5000); 
}

@Then("^check Create report for Task time$")
public void check_Create_report_for_Task_time() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^go to Time - Currently on-Task$")
public void go_to_Time_Currently_on_Task() throws Throwable {
	// 
			System.out.println("view report submenu and then click on Time");
			//reports side bar sub menu
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[16]/td[2]/a")).click();
			System.out.println("time card report page loades in right pane ");
			Thread.sleep(5000); 
}

@Then("^check Create report for Currently on-Task$")
public void check_Create_report_for_Currently_on_Task() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^go to Time - Pay-period end$")
public void go_to_Time_Pay_period_end() throws Throwable {
	// 
				System.out.println("view report submenu and then click on Time");
				//reports side bar sub menu
				UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
				UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[23]/td[2]/a")).click();
				System.out.println("time card report page loades in right pane ");
				Thread.sleep(5000);
}

@Then("^check Create report Pay-period end$")
public void check_Create_report_Pay_period_end() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

@Then("^go to Time - Daily billing report$")
public void go_to_Time_Daily_billing_report() throws Throwable {
	// 
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[41]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^check Create report for Daily billing report$")
public void check_Create_report_for_Daily_billing_report() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	Thread.sleep(5000);
	UtilityDriver.driver.switchTo().frame("kMain");
	UtilityDriver.driver.findElement(By.id("cmdReport")).click();
	try{
		UtilityDriver.driver.switchTo().activeElement();
	}catch (Exception e){
		UtilityDriver.driver.switchTo().alert().accept();
		
	System.out.println("closed page " );
	Thread.sleep(5000);
	}
	//UtilityDriver.driver.close();
}

// 

@Then("^Supervisor clcik on Reports$")
public void supervisor_clcik_on_Reports() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	// Click on Reports
	UtilityDriver.driver.findElement(By.xpath("//td[text()='Project']")).click(); 

}

@Then("^Supervisor go to Time - Timecard and click$")
public void supervisor_go_to_Time_Timecard_and_click() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("//td[text()='Time']")).click();
	UtilityDriver.driver.findElement(By.xpath("//a[@href='reports/TimecardReport.aspx']")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Expenses report$")
public void supervisor_go_to_Time_Expenses_report() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[2]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Project Time$")
public void supervisor_go_to_Time_Project_Time() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[12]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Timecard Totals$")
public void supervisor_go_to_Time_Timecard_Totals() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[3]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Timecard History$")
public void supervisor_go_to_Time_Timecard_History() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[4]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Project View$")
public void supervisor_go_to_Time_Project_View() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[14]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Break time$")
public void supervisor_go_to_Time_Break_time() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[15]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Excused time$")
public void supervisor_go_to_Time_Excused_time() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[17]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Task time$")
public void supervisor_go_to_Time_Task_time() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[9]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Currently on-Task$")
public void supervisor_go_to_Time_Currently_on_Task() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[3]/td[2]/ul/div/table/tbody/tr[11]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}


/*

@Then("^Supervisor go to Time - Pay-period end$")
public void supervisor_go_to_Time_Pay_period_end() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[41]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

@Then("^Supervisor go to Time - Daily billing report$")
public void supervisor_go_to_Time_Daily_billing_report() throws Throwable {
	System.out.println("view report submenu and then click on Time");
	//reports side bar sub menu
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[16]/td/ul/div/table/tbody/tr[2]/td[2]")).click();
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[41]/td[2]/a")).click();
	System.out.println("time card report page loades in right pane ");
	Thread.sleep(5000);
}

*/



@When("^time card report opens at right pane$")
public void time_card_report_opens_at_rith_pane() throws Exception {
// 
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kMain");

}

@Then("^select date range$")
public void select_date_range() throws Exception {
// choose start n stop dates of report 
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td[2]/div/table/tbody/tr/td[1]/span/input[1]")).sendKeys("10/17/2017");
UtilityDriver.driver.findElement(By.id("rdtStop_dateInput")).sendKeys("11/17/2017");
System.out.println("selected date rangese");
Thread.sleep(5000);

}

@Then("^go to Time - Expenses report$")
public void go_to_Time_Expenses_and_click() throws Exception {
// 
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[4]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[2]/td[2]/a")).click();
System.out.println("time Expenses report loades in right pane ");

}
@Then("^select Employee, Groups, Department, Position$")
public void select_Employee_Groups_Department_Position() throws Exception {
// select dropdown options - Employee, Groups, Department, Position and supervisor
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[2]/td/table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/div/table/tbody/tr/td[1]/input")).sendKeys("All items checked");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[2]/td/table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/div/div/table/tbody/tr/td[1]/input")).sendKeys("All items checked");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[2]/td/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/div/div/table/tbody/tr/td[1]/input")).sendKeys("All items checked");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[2]/td/table/tbody/tr/td[1]/table/tbody/tr[4]/td[2]/div/div/table/tbody/tr/td[1]/input")).sendKeys("All items checked");
	//driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[2]/td/table/tbody/tr/td[1]/table/tbody/tr[5]/td[2]/div/div/table/tbody/tr/td[1]/input")).sendKeys("check All");
	System.out.println("selected dropdown options");	

}

@Then("^select order by$")
public void select_order_by() throws Exception {
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[3]/td/table/tbody/tr/td[1]/span[2]/input")).click();
System.out.println("selected order by groups");	
}

@Then("^select Report format$")
public void select_Report_format() throws Exception {
// Write code here that turns the phrase above into concrete actions
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[3]/td/table/tbody/tr/td[2]/span[3]/input")).click();
}

@Then("^select show options$")
public void select_show_options() throws Exception {
// Write code here that turns the phrase above into concrete actions

}

@Then("^selec Employee status$")
public void selec_Employee_status() throws Exception {
// Write code here that turns the phrase above into concrete actions

}

@Then("^clcik on create report button$")
public void clcik_on_ceate_eport_button() throws Exception {
// Write code here that turns the phrase above into concrete actions
 // click on create report 
UtilityDriver.driver.findElement(By.name("cmdReport")).click(); 
System.out.println("clicked on create report");
}

@Then("^go to Time - Expences Report and click$")
public void go_to_Time_Expences_Report_and_click() throws Exception {
System.out.println("view report submenu and then click on Time");
//reports side bar sub menu
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]")).click();
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[21]/td/ul/div/table/tbody/tr[5]/td[2]/ul/div/table/tbody/tr[1]/td[2]/a")).click();
System.out.println("time card report page loades in right pane ");


}

@Then("^select Hours format$")
public void select_Hours_format() throws Exception {
// Write code here that turns the phrase above into concrete actions

}

@Then("^select Employee status$")
public void select_Employee_status() throws Exception {
// Write code here that turns the phrase above into concrete actions

	
}

@Then("^supervisor click on webclock from side menu$")
public void supervisor_click_on_webclock_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();

UtilityDriver.driver.findElement(By.linkText("WebClock")).click();
//UtilityDriver.driver.findElement(By.xpath(".//*[@id='Form1']/table/tbody/tr[2]/td/a")).click();
//driver.findElement(By.xpath("html/body/form/table/tbody/tr[15]/td/ul/div/table/tbody/tr[1]/td[2]")).click();
}

@Then("^supervisor click on Time card from side menu$")
public void supervisor_click_on_Time_card_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='Timecard2.aspx']")).click();
}

@Then("^supervisor click on  Calendar from side menu$")
public void supervisor_click_on_Calendar_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='calendar.aspx']")).click();



// Move to calendar main
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);
//UtilityDriver.driver.findElement(By.id("cmbEmployee")).sendKeys("[Employee], QA 111");

UtilityDriver.driver.findElement(By.xpath("/html/body/form/table[2]/tbody/tr/td/table/tbody/tr[1]/td[2]/select")).sendKeys("[Employee], QA 1112");
UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptCalendar_ctl07_rptTimes_ctl00_txtHours']")).clear();
UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptCalendar_ctl07_rptTimes_ctl00_txtHours']")).sendKeys("3");
try{
UtilityDriver.driver.findElement(By.id("rptCalendar_ctl07_rptTimes_ctl00_cmbType")).sendKeys("No Pay");}
catch(Exception e)
{
	
	 try	{
	UtilityDriver.driver.switchTo().alert().accept();
	}catch(Exception ea){}
	
	UtilityDriver.driver.findElement(By.id("rptCalendar_ctl07_rptTimes_ctl01_txtHours")).sendKeys("3");
	UtilityDriver.driver.findElement(By.id("rptCalendar_ctl07_rptTimes_ctl01_cmbType")).sendKeys("No Pay");
}

try{
UtilityDriver.driver.findElement(By.id("cmdUpdate")).click();
} catch (Exception e) {
	System.out.println("calendar not updated" );
}
try	{
	UtilityDriver.driver.switchTo().alert().accept();
	}catch(Exception e2){}
}

@Then("^supervisor click on  Time card Exception from side menu$")
public void supervisor_click_on_Time_card_Exception_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='TimecardExceptions.aspx']")).click();

}

@Then("^supervisor click on  Employee Employee info from side menu$")
public void supervisor_click_on_Employee_Employee_info_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empeditor.aspx']")).click(); 

}

@Then("^supervisor click on  Employee Employee Exception from side menu$")
public void supervisor_click_on_Employee_Employee_Exception_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empeditor.aspx']")).click(); 

}

@Then("^supervisor click on  Employee Personal info from side menu$")
public void supervisor_click_on_Employee_Personal_info_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empPersonal.aspx']")).click(); 

}


@Then("^supervisor click on  Employee Employee Benefits from side menu$")
public void supervisor_click_on_Employee_Employee_Benefits_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empBenefits.aspx']")).click(); 

}



@Then("^supervisor click on  Time card Excused calendar from side menu$")
public void supervisor_click_on_Time_card_Excused_calendar_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='ExcusedCalendar.aspx']")).click();
}

@Then("^supervisor click on  Employee Employee points from side menu$")
public void supervisor_click_on_Employee_Employee_points_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empPoints.aspx']")).click(); 

}

@Then("^supervisor click on  Project Project from side menu$")
public void supervisor_click_on_Project_Project_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Project']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='ProjectsManager.aspx']")).click(); 
System.out.println("clicked on Project -project n move to project main");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);

}

@Then("^supervisor click on  Project Project management from side menu$")
public void supervisor_click_on_Project_Project_management_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Project']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='ProjectDetailsStatus.aspx']")).click(); 
System.out.println("Clciked on Project management n move to project management main" );
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);

// Add new
UtilityDriver.driver.findElement(By.id("cmdAdd1")).click();
System.out.println("clicked on Add");

// Edit task 
UtilityDriver.driver.findElement(By.id("rptDetails_ctl00_cmbStatus")).sendKeys("In Progress");

// Update to project management list
UtilityDriver.driver.findElement(By.id("cmdUpdate")).click();
System.out.println("clicked on Update");

// Delete added entry
try{
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td/table[1]/tbody/tr[2]/td[1]/table/tbody/tr[2]/td[1]/input")).click();
UtilityDriver.driver.switchTo().alert().accept();
System.out.println("Deleted entry");
}catch (Exception e){}


}

@Then("^supervisor click on  Timecard Timecard from side menu$")
public void supervisor_click_on_Timecard_Timecard_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='Timecard2.aspx']")).click(); 
System.out.println("Clicked on Time card Time card n moved to Time card entries in main");
Thread.sleep(25000);

// View time entry from main screen
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
System.out.println("time entry details");
Thread.sleep(20000);
WebElement emp = UtilityDriver.driver.findElement(By.xpath("//select[@id='cmbEmployees']"));
WebDriverWait wait = new WebDriverWait(UtilityDriver.driver, 200);
try{wait.until(ExpectedConditions.elementToBeSelected(emp));}
 catch (Exception e){}

Select sel = new Select(emp);
sel.selectByVisibleText("[Employee], QA 1112");
//emp.sendKeys("[Employee], QA 111");

UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");

try{
UtilityDriver.driver.findElement(By.id("rptTime_ctl00_imgEdit")).click();
}catch(Exception a){
	System.out.println("Edit not vivible for this record");
	}
// move to edit screen
try
{ 
UtilityDriver.driver.switchTo().activeElement().click();} catch (Exception e){}

System.out.println("moved");

/*
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
try{
UtilityDriver.driver.switchTo().frame("RadWindow1");}catch (Exception e){}

UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[2]/td[2]/input")).sendKeys("9:00 AM");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[2]/td[2]/select")).sendKeys("Good");

UtilityDriver.driver.findElement(By.xpath("html/body/form/table[1]/tbody/tr[1]/td/input[1]")).click();
*/

	
// Edit Time entry from main screen
}


@Then("^supervisor click on schedule weekly schedule from side menu$")
public void supervisor_click_on_schedule_weekly_schedule_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Schedules']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='DD_WeeklySchedule.aspx']")).click();
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");

// View Employee schedule
try{
//UtilityDriver.driver.findElement(By.xpath("html/body/form/table[1]/tbody/tr[1]/td[1]/table/tbody/tr[1]/td[2]/div/table/tbody/tr/td[1]/input")).sendKeys("Employee");
UtilityDriver.driver.findElement(By.xpath("//input[@id='ddSelector_Input']")).sendKeys("Employee");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/input[1]")).click();
}catch (Exception e){}


}


@Then("^supervisor click on schedule Default from side menu$")
public void supervisor_click_on_schedule_Default_from_side_menu() throws Exception 
{
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Schedules']")).click();
Thread.sleep(1000);
try{
UtilityDriver.driver.findElement(By.xpath("//a[@href='MassScheduleChange.aspx']")).click();
}catch (Exception e){
	UtilityDriver.driver.findElement(By.xpath("//td[text()='Schedules']")).click();
	UtilityDriver.driver.findElement(By.xpath("//a[@href='MassScheduleChange.aspx']")).click();
}
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");


}


@Then("^supervisor click on  Timecard Approvals from side menu$")
public void supervisor_click_on_Timecard_Approvals_from_side_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
UtilityDriver.driver.findElement(By.xpath("//a[@href='TimecardApprove.aspx']")).click();
} 

@Then("^supervisor click on Dashboard Dashboard$")
public void supervisor_click_on_Dashboard_Dashboard1() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Dashboard']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='dashboard.aspx?firstLoad=1']")).click();
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);
System.out.println("Displaying main");
Thread.sleep(2000);
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
try{
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td[1]/div[1]/div/div/ul/li[2]/a/span/span/span")).click();
}catch (Exception e){}
Thread.sleep(3000);
System.out.println("Displaying filter");
}


@Then("^supervisor click on Dashboard outof office$")
public void supervisor_click_on_Dashboard_outof_office() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
System.out.println("entered side bar");
UtilityDriver.driver.findElement(By.xpath("//td[text()='Dashboard']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//td[text()='Dashboard']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='OutofOffice.aspx']")).click();	
System.out.println("clicked on outof office side bar");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);
System.out.println("Displaying outof office details");

}


@Then("^employee click on employee Employees from side bar menu$")
public void employee_click_on_employee_Employees_from_side_bar_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empeditor.aspx']")).click();
}

@Then("^check employee informarion at main screen$")
public void check_employee_informarion_at_main_screen() throws Exception {
System.out.println("Clciked on Employees - see employee details in right pane");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);

}

@Then("^employee click on employee Personal info from side bar menu$")
public void employee_click_on_employee_Personal_info_from_side_bar_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empPersonal.aspx']")).click();
}

@Then("^check employee Personal informarion at main screen$")
public void check_employee_Personal_informarion_at_main_screen() throws Exception {
System.out.println("Clciked on Employees - see Personal details in right pane");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);     
}

@Then("^employee click on employee Employee Benefits from side bar menu$")
public void employee_click_on_employee_Employee_Benefits_from_side_bar_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='empBenefits.aspx']")).click();
}

@Then("^check employee Employee Benefits at main screen$")
public void check_employee_Employee_Benefits_at_main_screen() throws Exception {
System.out.println("Clciked on Employees - see employee benefits details in right pane");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);    
}

@Then("^employee click on employee Employee Time off Request from side bar menu$")
public void employee_click_on_employee_Employee_Time_off_Request_from_side_bar_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='EmployeeRequest.aspx']")).click();
}

@Then("^check Employee Time off Request at main screen$")
public void check_Employee_Time_off_Request_at_main_screen() throws Exception {
System.out.println("Clciked on Employees - Timeoff request in right pane");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 
UtilityDriver.driver.findElement(By.id("lnkNewTime")).click();
Thread.sleep(5000);
System.out.println(" Reloaded and new time of request added to screen");

/*//driver.switchTo().defaultContent();
//driver.switchTo().frame("kMain");

Thread.sleep(3000); 
driver.findElement(By.xpath("html/body/form/table[3]/tbody/tr[2]/td[5]/input")).sendKeys("3");
driver.findElement(By.xpath("html/body/form/table[3]/tbody/tr[2]/td[6]/select")).sendKeys("No Pay");
Thread.sleep(3000);
// click update button
driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[1]/td[4]/input")).click();

*/	
}


@Then("^click on project time button and add time entry$")
public void click_on_project_time_button_and_add_time_entry() throws Exception {
System.out.println("check project time entry frm punch pannel");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(3000);
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl11_Imagebutton1")).click();
System.out.println("clicked punch time");
Thread.sleep(6000);
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain"); 
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.findElement(By.id("txtProjectCodes")).sendKeys("5105");  
}

@When("^update completed check entry$")
public void update_completed_check_entry() throws Exception {
UtilityDriver.driver.findElement(By.id("cmdSubmit")).click();
System.out.println("clicked update");
	
}

@Then("^Check Delete time entry$")
public void Check_Delete_time_entry() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.switchTo().frame("kMain");
System.out.println("Entered to pannel");
UtilityDriver.driver.findElement( By.xpath("html/body/form/table/tbody/tr[1]/td/table/tbody/tr[3]/td/table[2]/tbody/tr/td/div/table/tbody/tr[1]/td[1]/input[2]")).click();
System.out.println("Clicked on delete");

Alert alert=UtilityDriver.driver.switchTo().alert();
System.out.println(alert.getText());
alert.accept();
System.out.println("accepted"); 

	
}


@Then("^Admin clcik on Schedule$")
public void admin_clcik_on_Schedule() throws Exception {
System.out.println("Admin  Schedule");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Employee
UtilityDriver.driver.findElement(By.xpath("//td[text()='Schedules']")).click();  
}

@Then("^Admin Click on schedule Default$")
public void admin_Click_on_schedule_Default() throws Exception {
UtilityDriver.driver.findElement(By.xpath("//a[@href='DD_DefaultSchedule.aspx']")).click(); 
 System.out.println("schedule Default");
}

@Then("^Admin Click on Dashboard Default$")
public void admin_Click_on_Dashboard_Default() throws Exception {
System.out.println("Admin > Dashboard Default");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Employee
UtilityDriver.driver.findElement(By.xpath("//td[text()='Dashboard']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='dashboard.aspx?firstLoad=1']")).click();
}

@Then("^Admin clcik on Employee$")
public void admin_clcik_on_Employee() throws Exception {
System.out.println("Admin > Employee");
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Employee
UtilityDriver.driver.findElement(By.xpath("//td[text()='Employee']")).click();
//UtilityDriver.driver.findElement(By.xpath(".//*[@id='Form1']/table/tbody/tr[9]/td/a")).click();
}

@Then("^Admin clcik on Employee Access Info$")
public void admin_clcik_on_Employee_Access_Info() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.findElement(By.xpath("//a[@href='empAccess.aspx']")).click(); 
 System.out.println("Employee Access Info");
}

//@Then("Admin View or Edit Employee Access info$")
/*public void Admin_View_or_Edit_Employee_Access_info() throws Exception {
	
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain"); 
	WebElement employeDD = UtilityDriver.driver.findElement(By.id("cmbEmployees"));
			
	// code to view for each employee access info from dropdown 
	Select sel = new Select(employeDD);
	try{
	List<WebElement> items = sel.getOptions();
	
	System.out.println("Totoal employees here.. "+items.size());
	
	}catch (Exception e){}//for (int k=0; k<items.size();k++)
	
	//{
		
	//for(WebElement item:items)
	//{
	//	System.out.println(item.getText());
	//	String empname = item.getText();
		
	//	System.out.println(empname);
		//selectmyemployee(employeDD, empname);
		//UtilityDriver.driver.findElement(By.id("imgNext")).click();
		//UtilityDriver.driver.switchTo().defaultContent();
		//UtilityDriver.driver.switchTo().frame("kMain"); 
		//UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("empname");
		//System.out.println("now view Access infor of >>" +empname);
		//Thread.sleep(5000);
		
	//}
	
}*/

public void selectmyemployee(WebElement employeDD, String empname) throws Exception 
{
			//UtilityDriver.driver.findElement(By.id("imgNext")).click();
			UtilityDriver.driver.switchTo().defaultContent();
			UtilityDriver.driver.switchTo().frame("kMain"); 
			UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("empname");
			Thread.sleep(5000);
}


@Then("^Admin clcik on Employee settings$")
public void admin_clcik_on_Employee_settings() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.findElement(By.xpath("//a[@href='empPayOptions.aspx']")).click(); 
 System.out.println("Employee settings"); 
}

@Then("^Admin clcik on Employee benefits$")
public void admin_clcik_on_Employee_benefits() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.findElement(By.xpath("//a[@href='empBenefits.aspx']")).click(); 
 System.out.println("Employee benefits"); 
}

@Then("^Admin clcik on Employee Points$")
public void admin_clcik_on_Employee_Points() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.findElement(By.xpath("//a[@href='empPoints.aspx']")).click(); 
 System.out.println("Employee Points"); 
}

@Then("^Admin clcik on Time card$")
public void admin_clcik_on_Time_card() throws Exception {
System.out.println("Admin > Time card");
UtilityDriver.driver.switchTo().defaultContent();
Thread.sleep(5000);
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on time card
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click();
}

@Then("^Admin Click on Time card Approvals$")
public void admin_Click_on_Time_card_Approvals() throws Exception {
UtilityDriver.driver.findElement(By.xpath("//a[@href='TimecardApprove.aspx']")).click(); 
 System.out.println("Time card Approvals"); 
}

@Then("^Admin Click on Time card Calendar$")
public void admin_Click_on_Time_card_Calendar() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.findElement(By.xpath("//a[@href='calendar.aspx']")).click(); 
 System.out.println("Time card Calendar"); 
}

@Then("^Admin Click on Time card Exception$")
public void admin_Click_on_Time_card_Exception() throws Exception {
UtilityDriver.driver.findElement(By.xpath("//a[@href='TimecardExceptions.aspx']")).click(); 
 System.out.println("Time card Exception"); 
}


@Then("^employee click on Time card - Time card submenu from side bar menu$")
public void employee_click_on_Time_card_Time_card_submenu_from_side_bar_menu() throws Exception {
System.out.println("Employee > Time card entry check start");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Time card > time card 
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='Timecard2.aspx']")).click();
Thread.sleep(3000);
}

@Then("^employee click on employee Employee Calendar from side bar menu$")
public void employee_click_on_employee_Employee_Calendar_from_side_bar_menu() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Time card > time card 
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='calendar.aspx']")).click();
Thread.sleep(3000);
}


@Then("^check Calendar details at main screen$")
public void check_Calendar_details_at_main_screen() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain"); 
//driver.switchTo().frame("kMain");
//UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr/td/table/tbody/tr[2]/td[2]/select[1]")).sendKeys("November");
System.out.println("presrnt month calendar displayed");   
Thread.sleep(3000);

}







@Then("^employee click on Add New time at main screen$")
public void employee_click_on_Add_New_time_at_main_screen() throws Exception {
System.out.println("Clciked on Add new time card");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
//driver.switchTo().frame("kMain");
Thread.sleep(6000); 
System.out.println("Entered main frame at time card");
//driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[1]/td[1]/a[1]")).click();
UtilityDriver.driver.findElement(By.id("lnkNewTime")).click();



}

@When("^New time entry added edit fileds and update$")
public void new_time_entry_added_edit_fileds_and_update() throws Exception {
System.out.println("Clciked on Add new time card");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 
//UtilityDriver.driver.findElement(By.id("lnkNewTime")).click();

//String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());

//UtilityDriver.driver.close();
UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptTime_ctl00_cmbDate']")).sendKeys("Fri 01/2");
UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptTime_ctl00_txtIn']")).sendKeys("12:00 AM");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[1]/td[2]/input[2]")).sendKeys("12:00 PM");
try{
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[1]/td[2]/input")).click();
} 
catch(Exception e)
{
	UtilityDriver.driver.switchTo().alert().accept();
	}

//driver.findElement(By.xpath(".//*[@id='cmdUpdate2']")).click();
System.out.println("updated time card Entry");

}

@Then("^edit exited entry and update$")
public void edit_exited_entry_and_update() throws Exception {
System.out.println("Check Edit existed time entry");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 
UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptTime_ctl00_imgEdit']")).click();
// switch window To Modify time record 
// Edit existed 
			Thread.sleep(5000);
			UtilityDriver.driver.switchTo().defaultContent();
			UtilityDriver.driver.switchTo().frame("kMain");
			Thread.sleep(5000); 
			String parent= UtilityDriver.driver.getTitle();
			System.out.println("title is" +parent);
			UtilityDriver.driver.findElement(By.xpath("html/body/form/div[6]/table[1]/tbody/tr/td/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td[3]/a/img")).click();
			
			UtilityDriver.driver.switchTo().activeElement();
			UtilityDriver.driver.switchTo().frame(UtilityDriver.driver.findElement(By.cssSelector("rwTable rwShadow")));
			String chld= UtilityDriver.driver.getTitle();
			System.out.println("title is" +chld);
			UtilityDriver.driver.findElement(By.xpath(".//*[@id='RadWindowWrapper_RadWindow1']/table/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/em")).click();
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table[1]/tbody/tr[1]/td/input[1]")).click();
			


}

@Then("^employee click on employee Time card - Time card from side bar menu$")
public void employee_click_on_employee_Time_card_Time_card_from_side_bar_menu() throws Exception {
System.out.println("Employee > Time card entry check start");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Time card > time card 
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click(); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='Timecard2.aspx']")).click();
}

@Then("^Admin click on Project Button$")
public void admin_click_on_Project_Button() throws Exception {
System.out.println("Project ");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
// Click on Time card > time card 
UtilityDriver.driver.findElement(By.xpath("//td[text()='Project']")).click(); 
}

@Then("^Admin clcik on Project submenu$")
public void admin_clcik_on_Project_submenu() throws Exception {
System.out.println("Project ");
UtilityDriver.driver.findElement(By.xpath("//a[@href='ProjectsManager.aspx']")).click(); 
System.out.println("Project > Project clicked ");
Thread.sleep(5000);
}

@Then("^Admin Check for Project details at main screen$")
public void admin_Check_for_Project_details_at_main_screen() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 
String parent= UtilityDriver.driver.getTitle();
System.out.println("title is" +parent);
UtilityDriver.driver.findElement(By.xpath(".//*[@id='imgHeader']")).click();
}

@Then("^Admin clcik on Project management submenu$")
public void admin_clcik_on_Project_management_submenu() throws Exception {
System.out.println("Project management");
UtilityDriver.driver.findElement(By.xpath("//a[@href='ProjectDetailsStatus.aspx']")).click(); 
System.out.println("Project > Project management ");
Thread.sleep(5000);
}

@Then("^Admin Check for Project management details at main screen$")
public void admin_Check_for_Project_management_details_at_main_screen() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 
String parent= UtilityDriver.driver.getTitle();
System.out.println("title is" +parent);
//driver.findElement(By.xpath(".//*[@id='imgHeader']")).click();
}

@Then("^Admin click on Time card Button$")
public void admin_click_on_Time_card_Button() throws Exception {
System.out.println(" Time card ");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
Thread.sleep(2000);
// Click on Time card > time card 
UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click(); 
}

@Then("^Admin clcik on Time off approval at submenu$")
public void admin_clcik_on_Time_off_approval_at_submenu() throws Exception {
System.out.println(" Time Off Approval ");
UtilityDriver.driver.findElement(By.xpath("//a[@href='EmployeeRequestApproval.aspx']")).click(); 
System.out.println(" Time Off Approval");
Thread.sleep(5000);
}

@Then("^Admin Check for View Approve Time off request details at main screen$")
public void admin_Check_for_View_Approve_Time_off_request_details_at_main_screen() throws Exception {
Thread.sleep(5000);
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 
String parent= UtilityDriver.driver.getTitle();
System.out.println("title is" +parent);
UtilityDriver.driver.findElement(By.xpath(".//*[@id='imgHeader']")).click();
System.out.println(" Time Off Approval details ");
}

@Then("^Admin click on Messaging$")
public void admin_click_on_Messaging() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
System.out.println(" sidebar ");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
Thread.sleep(3000);

System.out.println(" Admin Messaging ");
// Click on messaging  
UtilityDriver.driver.findElement(By.xpath("//a[@href='webmessaging.aspx']")).click();
Thread.sleep(5000);
}

@When("^message screen loaded at rightpane add message details$")
public void message_screen_loaded_at_rightpane_add_message_details() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000);
System.out.println(" Messaging loaded in right pane ");
}

@When("^check message added$")
public void check_message_added() throws Exception {

String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
UtilityDriver.driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[3]/td/table/tbody/tr[1]/td[2]/input")).sendKeys("Employee message today ", timeStamp);
System.out.println("subject entered");


//driver.findElement(By.xpath("html/body/form/table[2]/tbody/tr[3]/td/table/tbody/tr[1]/td[2]/input")).sendKeys("Admin message today ");
UtilityDriver.driver.findElement(By.id("RadeditorMsg_contentIframe")).sendKeys("Message displayed the text here", timeStamp);
System.out.println("message entered");

UtilityDriver.driver.findElement(By.id("LSTgroup_0")).click();
try{
UtilityDriver.driver.findElement(By.id("LSTemp_0")).click();
}catch (Exception ea){}
System.out.println("selected check boxes");

UtilityDriver.driver.findElement(By.id("cmdPost")).click();

System.out.println("clciked on post");
try{
	UtilityDriver.driver.switchTo().alert().accept();	
}catch (Exception e){}
}

@Then("^Supervisor click on Messaging$")
public void supervisor_click_on_Messaging() throws Exception {
UtilityDriver.driver.switchTo().defaultContent();
System.out.println(" sidebar ");
UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kSidebar");
UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
Thread.sleep(3000);

System.out.println(" supervisor Messaging ");
// Click on messaging  
UtilityDriver.driver.findElement(By.xpath("//a[@href='webmessaging.aspx']")).click();
Thread.sleep(5000); 

}

@Then("^Admin clcik on Time off Request at submenu$")
public void admin_clcik_on_Time_off_Request_at_submenu() throws Exception {
Thread.sleep(5000); 
UtilityDriver.driver.findElement(By.xpath("//a[@href='EmployeeRequest.aspx']")).click();
}

@When("^request time off loaded check View details$")
public void request_time_off_loaded_check_View_details() throws Exception {

UtilityDriver.driver.switchTo().defaultContent();
UtilityDriver.driver.switchTo().frame("kMain");
Thread.sleep(5000); 

System.out.println("view employee time off request details QA");
UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("[test], QA");
Thread.sleep(2000);
//html/body/form/table[1]/tbody/tr[2]/td[1]/table/tbody/tr/td[3]/select
UtilityDriver.driver.findElement(By.id("cmbStatus")).sendKeys("Pending");
Thread.sleep(3000);
UtilityDriver.driver.findElement(By.id("cmdUpdate")).click();
Thread.sleep(5000);

System.out.println("view employee time off request details QA");
UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("QA111");
Thread.sleep(2000);
//html/body/form/table[1]/tbody/tr[2]/td[1]/table/tbody/tr/td[3]/select
UtilityDriver.driver.findElement(By.id("cmbStatus")).sendKeys("Pending");
Thread.sleep(3000);
UtilityDriver.driver.findElement(By.id("cmdUpdate")).click();
Thread.sleep(5000);
}

@Then("^Supervisor click on Timecard TimeOff Request$")
public void supervisor_click_on_Timecard_TimeOff_Request() throws Exception {

// Time card Time off request
	System.out.println("Time off request");
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kSidebar");
	UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
	// Click as supervisor 
	UtilityDriver.driver.findElement(By.xpath("//td[text()='Time Card']")).click(); 
	UtilityDriver.driver.findElement(By.xpath("//a[@href='EmployeeRequest.aspx']")).click();

}

//******************************WEB CLOCK Methods ***************************
//***********************************************************************************

@When("^enter valid Employee credentials at webclock$")
public void enter_valid_Employee_credentials_at_webclock() throws Exception {
Thread.sleep(3000);
String supuser = configFileReader.getsupuser();
String suppass = configFileReader.getsuppwd();
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.findElement(By.id("txtClockID")).sendKeys(supuser);
UtilityDriver.driver.findElement(By.id("txtPIN")).sendKeys(suppass);
System.out.println("entered un and pin for webclock");

}

@Then("^check Punchin$")
public void check_Punchin() throws Exception {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl00_Imagebutton1")).click();
System.out.println("Clciked on punchin");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");

}

@Then("^check Lunch start$")
public void check_Lunch_start() throws Exception {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl02_Imagebutton1")).click();
System.out.println("Clciked on Lunch start");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");
}

@Then("^check Lunch stop$")
public void check_Lunch_stop() throws Exception {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl03_Imagebutton1")).click();
System.out.println("Clciked on Lunch stop");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");
}

@Then("^check Break Start$")
public void check_Break_Start() throws Exception {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl09_Imagebutton1")).click();
System.out.println("Clciked on Break Start");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");

}

@Then("^check Break Stop$")
public void check_Break_Stop() throws Exception {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl10_Imagebutton1")).click();
System.out.println("Clciked on Break Stop");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");
}

@Then("^check Project Time$")
public void check_Project_Time() throws Exception {
	UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl04_Imagebutton1")).click();
	System.out.println("Clciked on Project Time");
	Thread.sleep(1000);
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	//UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td/table/tbody/tr[2]/td/table[2]/tbody/tr[1]/td[2]/input")).sendKeys("5105");
	UtilityDriver.driver.findElement(By.id("txtProjectCodes")).sendKeys("5105");
	UtilityDriver.driver.findElement(By.id("cmdSubmit")).click();
	System.out.println("added project time");
	//UtilityDriver.driver.quit();
	System.out.println("Browser Quit");
	}

@Then("^check Punchout$")
public void check_Punchout() throws Exception {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl01_Imagebutton1")).click();
System.out.println("Clciked on punchOut");
Thread.sleep(5000);
	
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");   
}

@Then("^check Webclock logo$")
public void check_Webclock_logo() throws Throwable {
String apptitle = "";
String Expectedtitle = "WebCLOCK";

System.out.println("Tittle is " +apptitle);
 if(Expectedtitle == apptitle);
 
System.out.println("title matched - Pass");

// Check logo of webclock

WebElement ImageFile = UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td[1]/img"));
//driver.findElement(By.tagName("img"));

Boolean ImagePresent = (Boolean) ((JavascriptExecutor)UtilityDriver.driver).executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0", ImageFile);
if (!ImagePresent)
{
     System.out.println("Image not displayed.");
}
else
{
    System.out.println("Image displayed.");
				       
}

}

@Then("^check invalid login$")
public void check_invalid_login() throws Throwable {
Thread.sleep(3000);
UtilityDriver.driver.switchTo().frame("kMain");
UtilityDriver.driver.findElement(By.id("txtClockID")).sendKeys("0202");
UtilityDriver.driver.findElement(By.id("txtPIN")).sendKeys("0202aa");
// String message = driver.get(arg0);      lblMessages // negative scenario 
}

@Then("^check Last Punch$")
public void check_Last_Punch() throws Throwable {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl05_Imagebutton1")).click();
System.out.println("Clciked on Last Punch");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");
}

@Then("^check Hours this payperiod$")
public void check_Hours_this_payperiod() throws Throwable {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl06_Imagebutton1")).click();
System.out.println("Clciked on Hours this payperiod");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");
}

@Then("^check Request Status$")
public void check_Request_Status() throws Throwable {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl06_Imagebutton1")).click();
System.out.println("Clciked on  Request Statu");
Calendar d= Calendar.getInstance();
DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
String today = dateFormat.format(d.getTime());
d.add(Calendar.MONTH, + 1);
// d.add(Calendar.DATE, -10);

String reqtill =  dateFormat.format(d.getTime());

System.out.println("Request status for dates" + today + "TO " +reqtill);
UtilityDriver.driver.findElement(By.id("rptParams_ctl12_calRequestedDateFrom_dateInput")).sendKeys(today);

UtilityDriver.driver.findElement(By.id("rptParams_ctl12_calRequestedDateTo_dateInput")).sendKeys(reqtill);

UtilityDriver.driver.findElement(By.id("cmdOK")).click();
System.out.println("Checked Request status 1 month");

Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");  

} 

@Then("^check Current Benifit balance$")
public void check_Current_Benifit_balance() throws Throwable {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl13_Imagebutton1")).click();
System.out.println("Clciked on Current Benifit balance");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr/td[2]/table/tbody/tr[2]/td/select")).sendKeys("Vacation - 1 Year");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[2]/input[1]")).click();
System.out.println("View 1 year balance");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit"); 
}

@Then("^check  POS Transfer$")
public void check_POS_Transfer() throws Throwable {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl11_Imagebutton1")).click();
System.out.println("Clciked on POS Transfer");

Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit"); 

}

@Then("^check Job start$")
public void check_Job_start() throws Throwable {

UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl08_Imagebutton1")).click();
System.out.println("Clciked on Job start");

Thread.sleep(2000);
try{
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[1]/td[2]/table/tbody/tr[1]/td/input")).sendKeys("test1");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[2]/td[2]/table/tbody/tr[1]/td/input")).sendKeys("test2");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[3]/td[2]/table/tbody/tr[2]/td/select")).sendKeys("Test");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/select")).sendKeys("Test");
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[2]/input[1]")).click();

}catch (Exception e){}
}

@Then("^check TimeOff Request$")
public void check_TimeOff_Request() throws Throwable {
UtilityDriver.driver.findElement(By.id("rptPunchButtons_ctl07_Imagebutton1")).click();
System.out.println("Clciked on TimeOff Request");

UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[1]/td[2]/table/tbody/tr[2]/td/select")).sendKeys("Vacation");

UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[2]/td[2]/table/tbody/tr[1]/td/div/table/tbody/tr/td[1]/span/input[1]")).sendKeys("12/21/2017");

UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[4]/td[2]/table/tbody/tr[1]/td/input")).sendKeys("5");
//		html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[1]/div/table/tbody/tr[4]/td[2]/table/tbody/tr[1]/td/input
		
UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr/td/table/tbody/tr[2]/td/div[2]/input[1]")).click();
System.out.println("Time off added");
Thread.sleep(5000);
//UtilityDriver.driver.quit();
System.out.println("Browser Quit");
}


@Given("^Launch Browser and Open webClock$")
public void launch_Browser_and_Open_webClock() throws Exception {

//System.setProperty("webdriver.gecko.driver", "D:\\AUTO\\geckodriver.exe");
//driver=new FirefoxDriver();
	 
//step2: Hit URL [
//UtilityDriver.driver.navigate().to(configFileReader.getApplicationwebclock());
	configFileReader = new ConfigFileReader();
UtilityDriver.driver.navigate().to(configFileReader.getApplicationwebclock());
//UtilityDriver.driver.navigate().to("http://20.acumenport.com/pis/qa/webclock/");

	
//UtilityDriver.driver.manage().window().maximize();
//Thread.sleep(3000);
//Logger logger=Logger.getLogger("eclcokloginSteps");
}


@Then("^Employee add new time off request$")
public void employee_add_new_time_off_request() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000); 
	UtilityDriver.driver.findElement(By.id("lnkNewTime")).click();
	
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000);
	
		// Date formating 
	
	Date today = new Date();               
	SimpleDateFormat formattedDate = new SimpleDateFormat("MM-DD-yyyy");            
	Calendar c = Calendar.getInstance();  
	System.out.println("Today " +today);
	c.add(Calendar.DATE, 5);  // number of days to add      
	String leavestartDate = (String)(formattedDate.format(c.getTime()));
	System.out.println("leavestartDate date is " + leavestartDate);
	
	c.add(Calendar.DATE, 2);  // number of days to add      
	String leaveEndDate = (String)(formattedDate.format(c.getTime()));
	System.out.println("leaveEnd date is " + leaveEndDate);
					
	//UtilityDriver.driver.findElement(By.id("rptRequest_ctl00_txtFrom")).sendKeys(leavestartDate);
	//UtilityDriver.driver.findElement(By.id("rptRequest_ctl00_txtTo")).sendKeys(leaveEndDate);

	//UtilityDriver.driver.findElement(By.cssSelector("[@style='background-color: pink;'][@class='rcInputCell']")).click();

	UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[2]/div/table/tbody/tr/td[1]/span/input[1]")).clear();
	UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[2]/div/table/tbody/tr/td[1]/span/input[1]")).sendKeys(leavestartDate);
	System.out.println("selected from leave [today+5]   " +leavestartDate);
	
	UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[3]/div/table/tbody/tr/td[1]/span/input[1]")).clear();
	UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[3]/div/table/tbody/tr/td[1]/span/input[1]")).sendKeys(leaveEndDate);
	System.out.println("selected To leave - as [today+7]2days later  "+leaveEndDate);
	
	UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[5]/input")).sendKeys("5");
	System.out.println("hours perday entered ");
	
	UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[6]/select")).sendKeys("Vacation");
	
	
	UtilityDriver.driver.findElement(By.id("cmdUpdate")).click();
	 try{
		 UtilityDriver.driver.findElement(By.name("cmdRefresh")).click();
	 }
	 catch (Exception e){
	 Alert alert = UtilityDriver.driver.switchTo().alert();
		String message = alert.getText();
		System.out.println(message);
		alert.accept();
	 }
	 System.out.println("updated leave");
	}
	/*
	try{
		UtilityDriver.driver.findElement(By.xpath("//tr[@style='background-color: pink;']/td[1]")).click();
	}catch (Exception e) {
		if(IsAlertPresent)
		{
		Alert alert = UtilityDriver.driver.switchTo().alert();
		String message = alert.getText();
		System.out.println(message);
		alert.accept();
		}
	}
	*/
	
	
	
	
	//UtilityDriver.driver.findElement(By.linkText("Open the calendar popup.")).click();
	//String loc = UtilityDriver.driver.switchTo().activeElement().getText();
	

	 
//	String classname = UtilityDriver.driver.findElement(ByTagName("input").
		


@Then("^Supervisor click on Timecard TimeOff Approval$")
public void Supervisor_click_on_Timecard_TimeOff_Approval() throws Throwable {
	// Time card Time off Approval
		System.out.println("Time off Approval");
		UtilityDriver.driver.switchTo().defaultContent();
		UtilityDriver.driver.switchTo().frame("kSidebar");
		UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
		// Click as supervisor 
		UtilityDriver.driver.findElement(By.xpath(".//*[@id='Form1']/table/tbody/tr[9]/td")).click(); 
		UtilityDriver.driver.findElement(By.xpath(".//*[@id='sub_mnuTime']/table/tbody/tr[11]/td[2]/a")).click();

	
}


@When("^request time off loaded select employee and verify approval$")
public void request_time_off_loaded_select_employee_and_verify_approval() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000); 
	
	UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("[Employee], QA");
	UtilityDriver.driver.findElement(By.id("cmbStatus")).sendKeys("Pending");
	UtilityDriver.driver.findElement(By.id("cmdRefresh")).click();
	
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000); 

	try{
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table[4]/tbody/tr[3]/td[3]/input")).sendKeys("Approved");
	}
	catch (Exception e){
		System.out.println("no element to approve");
		 
	}
	try{
	UtilityDriver.driver.findElement(By.xpath("html/body/form/table[4]/tbody/tr[2]/td[10]/select")).sendKeys("Approved");
	}
	catch (Exception e){
		System.out.println("no element to approve");
	}
		try{
		UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptRequest_ctl00_imgUpdate']")).click();
		}
		catch (Exception e){
			System.out.println("no element to approve");
		}
	System.out.println("Appproved");
	
	/*try{
	UtilityDriver.driver.findElement(By.xpath("//input[contains(@value,'1/24/2018')]"));
	}catch (Exception e){
		System.out.println("nomatch");
		UtilityDriver.driver.findElement(By.xpath
		
	}
	UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptRequest_ctl00_txtResponse']")).sendKeys("Approved");
	UtilityDriver.driver.findElement(By.xpath(".//*[@id='rptRequest_ctl00_cmbStatus']")).sendKeys("Approved");
	UtilityDriver.driver.findElement(By.xpath("..//*[@id='rptRequest_ctl00_imgUpdate']")).click();
	
	System.out.println("Appproved");
	*/
}

@Then("^employee click on employee time card - Time card and verify Approval entry$")
public void employee_click_on_employee_time_card_Time_card_and_verify_Approval_entry() throws Throwable {
   
	// Time card Time card
			System.out.println("Time off Approval");
			UtilityDriver.driver.switchTo().defaultContent();
			UtilityDriver.driver.switchTo().frame("kSidebar");
			UtilityDriver.driver.findElement(By.className("ADS_MenuItem")).click();
			
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[11]/td")).click(); 
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table/tbody/tr[12]/td/ul/div/table/tbody/tr[1]/td[2]/a")).click();
	
			UtilityDriver.driver.switchTo().defaultContent();
			UtilityDriver.driver.switchTo().frame("kMain");
			Thread.sleep(3000); 
			
			UtilityDriver.driver.findElement(By.xpath("html/body/form/table[3]/tbody/tr/td/table/tbody/tr/td[5]/a")).click();
			System.out.println("vacation details displayed");
			
}


@Then("^supervisor add reason and note and click on update$")
public void supervisor_add_reason_and_note_and_click_on_update() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000); 
	
	UtilityDriver.driver.findElement(By.id("cmbEmployees")).sendKeys("[Employee], QA");
	
}

@Then("^employee click on employee time card -  Employee should be able to see supervisor note / comments and status should be rejected\\.$")
public void employee_click_on_employee_time_card_Employee_should_be_able_to_see_supervisor_note_comments_and_status_should_be_rejected() throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000); 
	
	
}

@Then("^check negative benefit options ON$")
public void check_negative_benefit_options_ON()throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000);
	
	UtilityDriver.driver.findElement(By.id("lstBenefits")).click();
	UtilityDriver.driver.findElement(By.xpath(".//*[@id='lstBenefits']/option[15]")).click();
	System.out.println("Entered benefits");
	/*WebElement benifits = UtilityDriver.driver.findElement(By.id("lstBenefits"));
	
String vacation = "Vacation - 1 Year";
 
 WebElement s = (WebElement) new Select(UtilityDriver.driver.findElement(By.id("lstBenefits")));
	((Select) s).selectByVisibleText(vacation);
	
	*/

	UtilityDriver.driver.findElement(By.id("tabNegative")).click();
	System.out.println("entered negative tab");
	
	boolean a = UtilityDriver.driver.findElement(By.id("optAllowNegative")).isSelected();
	//UtilityDriver.driver.findElement(By.name("cmdUpdate")).click();	
	System.out.println(a);
	
	if(!a)
	{
		System.out.println("update to Benifita allowed");
	
		UtilityDriver.driver.findElement(By.id("optAllowNegative")).click();
		UtilityDriver.driver.findElement(By.name("cmdUpdate")).click();
	}
		
	}
	



@Then("^check negative benefit options OFF$")
public void check_negative_benefit_options_OFF()throws Throwable {
	UtilityDriver.driver.switchTo().defaultContent();
	UtilityDriver.driver.switchTo().frame("kMain");
	Thread.sleep(3000);
	
	UtilityDriver.driver.findElement(By.id("lstBenefits")).click();
	UtilityDriver.driver.findElement(By.xpath(".//*[@id='lstBenefits']/option[15]")).click();
	System.out.println("Entered benefits");
	/*WebElement benifits = UtilityDriver.driver.findElement(By.id("lstBenefits"));
	
String vacation = "Vacation - 1 Year";
 
 WebElement s = (WebElement) new Select(UtilityDriver.driver.findElement(By.id("lstBenefits")));
	((Select) s).selectByVisibleText(vacation);
	
	*/

	UtilityDriver.driver.findElement(By.id("tabNegative")).click();
	System.out.println("entered negative tab");
	
	boolean a = UtilityDriver.driver.findElement(By.id("optDisallowNegative")).isSelected();
	System.out.println(a);
	//UtilityDriver.driver.findElement(By.name("cmdUpdate")).click();
	if(!a)
	{
		System.out.println("update to Benifita Not allowed");
	
		UtilityDriver.driver.findElement(By.id("optDisallowNegative")).click();	
		UtilityDriver.driver.findElement(By.name("cmdUpdate")).click();
	}
		
}

}









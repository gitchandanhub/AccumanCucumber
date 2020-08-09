package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class menuoptions extends BaseClass{

	public menuoptions(WebDriver driver){
		super(driver);
	}

	@FindBy(how=How.NAME, using="kSidebar")
	public static WebElement leftSidebar;
	
	@FindBy(how=How.XPATH, using="//a[@href='welcome.aspx']")
	public static WebElement Home;
	
	@FindBy(how=How.XPATH, using="//a[@href='welcome.aspx']")
	public static WebElement WebClock;
	
	@FindBy(how=How.XPATH, using="//a[@href='welcome.aspx']")
	public static WebElement TimeCard;
	
	@FindBy(how=How.XPATH, using="//a[@href='welcome.aspx']")
	public static WebElement Dashboard;
	
	@FindBy(how=How.XPATH, using="//a[@href='welcome.aspx']")
	public static WebElement Messaging;
	
	
	
}

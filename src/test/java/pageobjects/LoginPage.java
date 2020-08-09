package pageobjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class LoginPage extends BaseClass{

	public LoginPage(WebDriver driver){
		super(driver);
	}    
	
	@FindBy(how=How.ID, using="txtUsername")
	public static WebElement username;
	
	@FindBy(how=How.ID, using="txtPassword")
	public static WebElement password;
	
	@FindBy(how=How.XPATH, using=".//*[@value='Login']")
	public static WebElement signin_button;
	
}
		

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

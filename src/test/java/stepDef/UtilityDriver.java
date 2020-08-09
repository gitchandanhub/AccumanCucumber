package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.phantomjs.PhantomJSDriver;

public class UtilityDriver
{
	static ConfigFileReader configFileReader;
	
	public static WebDriver driver = null;
   public static void inibrowser()
   {
	   configFileReader = new ConfigFileReader();
      if(driver == null)
     {
    	// To run tests with Chrome browser 
    	  System.setProperty("webdriver.chrome.driver", configFileReader.getDriverPath());
    	  driver = new ChromeDriver();
    	  
    	//  System.setProperty( "phantomjs.binary.path", configFileReader.getDriverPath()); 	
    	//  driver = new PhantomJSDriver();
    	  
      	
      	// To run tests with FF browser  
     	//System.setProperty("webdriver.gecko.driver", "D:\\AUTO\\\\geckodriver.exe");
     	//driver = new FirefoxDriver();
     		
     }
       else
       {
         System.out.println("driver already initialized");
       }
    try{
       driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    }
    
    catch (org.openqa.selenium.UnhandledAlertException e) {                
        Alert alert = driver.switchTo().alert(); 
        String alertText = alert.getText().trim();
        System.out.println("Alert data: "+ alertText);
        alert.dismiss();}
    /*
    catch(Exception e)
    {
    	System.out.println("Driver ont responding");
    	driver.switchTo().activeElement();
    	driver.close();
    	
    }*/
       driver.manage().window().maximize();
     }
      public static void close()
        {
             driver.close(); 
        }
  }

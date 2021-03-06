package stepDef;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileReader {
	private Properties properties;
	private final String propertyFilePath= "C:\\Users\\schandan\\Desktop\\QA\\Automation_Scripts_of_Test_Cases\\Functional suites\\AcumenR3Smokenew\\configs\\Configuration.properties";
 
	
	public ConfigFileReader(){
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}		
	}
	
	public String getDriverPath(){
		String driverPath = properties.getProperty("driverpath");
		if(driverPath!= null) return driverPath;
		else throw new RuntimeException("driverPath not specified in the Configuration.properties file.");		
	}
	
	public String getApplicationeclock() {
		String url = properties.getProperty("eClockurl");
		if(url != null) return url;
		else throw new RuntimeException("eClockurl not specified in the Configuration.properties file.");
	}
 
	public String getApplicationwebclock() {
		String url = properties.getProperty("wClockurl");
		if(url != null) return url;
		else throw new RuntimeException("wClockurl not specified in the Configuration.properties file.");
	}
	
	public String getadminuser() {
		String url = properties.getProperty("adminuser");
		if(url != null) return url;
		else throw new RuntimeException("admin user not specified in the Configuration.properties file.");
	}
	
	public String getadminpass() {
		String url = properties.getProperty("adminpsw");
		if(url != null) return url;
		else throw new RuntimeException("admin passwprd not specified in the Configuration.properties file.");
	}
	
	public String getempuser() {
		String url = properties.getProperty("empuser");
		if(url != null) return url;
		else throw new RuntimeException("emp user not specified in the Configuration.properties file.");
	}
	
	public String getemppwd() {
		String url = properties.getProperty("emppwd");
		if(url != null) return url;
		else throw new RuntimeException("emp pwd not specified in the Configuration.properties file.");
	}
	
	public String getsupuser() {
		String url = properties.getProperty("supuser");
		if(url != null) return url;
		else throw new RuntimeException("sup user not specified in the Configuration.properties file.");
	}
	
	public String getsuppwd() {
		String url = properties.getProperty("suppwd");
		if(url != null) return url;
		else throw new RuntimeException("sup pwd not specified in the Configuration.properties file.");
	}
	
	
}

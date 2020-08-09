package stepDef;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;


//@RunWith(Cucumber.class)
@RunWith(Cucumber.class)

@CucumberOptions(
		features = "classpath:featurefiles",
		plugin = {//"pretty", 
				"html:target/cucumber-html-report", 
				"json:target/cucumber.json", 
				//"pretty:target/cucumber-pretty.txt",
		       // "usage:target/cucumber-usage.json",
		        "junit:target/cucumber-results.xml" },
		tags = {"@Regression"})

public class RunCukesTest{

	public static void main(String[] args) throws Exception {
		
		CucumberResultsOverview results = new CucumberResultsOverview();
		results.setOutputDirectory("target");
		results.setOutputName("cucumber-results");
		results.setSourceFile("/AcumenR3Smoke1/target/cucumber.json");
		results.executeFeaturesOverviewReport();}
	
	
}
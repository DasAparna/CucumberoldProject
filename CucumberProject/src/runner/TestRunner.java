package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"Features"},glue={"stepDefination"},plugin={"html:taget/cucumber-html-report"})
public class TestRunner {

}

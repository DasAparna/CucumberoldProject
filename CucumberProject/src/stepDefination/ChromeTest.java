package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChromeTest {
	public static WebDriver driver;
	
	@FindBy(id = "email")
	private WebElement emailID;
	@FindBy (id="pass")
	private WebElement password;
	
	//Checking git repo
	@Given("^Open Chrome and start facebook$")
	public void open_Chrome_and_start_facebook() throws InterruptedException {
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\bijay\\Desktop\\Workspace\\chromedriver_win32\\chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
		   Thread.sleep(1000);
		   driver.get("https://www.facebook.com/");
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String user, String pass) {
		emailID.sendKeys(user);
		password.sendKeys(pass);
	}

	@Then("^click on the login button$")
	public void click_on_the_login_button() {
	    
	}

	@Then("^user should be loggedin successully$")
	public void user_should_be_loggedin_successully() {
	   
	}

	@When("^I enter valid (\\d+) and valid Fail$")
	public void i_enter_valid_and_valid_Fail(int arg1) {
	   
	}



}

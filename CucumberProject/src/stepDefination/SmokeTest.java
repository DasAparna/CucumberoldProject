package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	public static WebDriver driver;
	WebElement ele;
	WebDriverWait wait;
	
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application() throws InterruptedException {
	   System.setProperty("webdriver.chrome.driver", "C:\\Users\\bijay\\Desktop\\Workspace\\chromedriver_win32\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.manage().window().maximize();
	   Thread.sleep(1000);
	   driver.get("http://automationpractice.com/index.php?");
	}

	@When("^user clicks on signin$")
	public void user_clicks_on_signin() throws InterruptedException {
	   driver.findElement(By.xpath("//div/a[contains(@class,'login')]")).click();
	   Thread.sleep(20000);
	}

	@When("^user enters valid \"([^\"]*)\"$")
	public void user_enters_valid(String emailId) {
		driver.findElement(By.xpath("//div/input[contains(@type,'text')]")).sendKeys(emailId);
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws InterruptedException {
		driver.findElement(By.xpath("//button/span/i[contains(@class,'icon-user left')]")).click();
	Thread.sleep(10000);
	}

	@Given("^user is on personal information page$")
	public void user_is_on_personal_information_page() {
		driver.findElement(By.xpath("//div/h3[contains(text(),'Your personal information')]")).isDisplayed();
	}

	@When("^user clicks on gender$")
	public void user_clicks_on_gender() throws InterruptedException {
		Thread.sleep(1000);
		//wait.until(ExpectedConditions.visibilityOf((WebElement)By.xpath("//div/label[contains(@for,'id_gender2')]")));
		driver.findElement(By.xpath("//div/label[contains(@for,'id_gender2')]")).click();
	
	
	
	}

	@When("^user selects \"([^\"]*)\" in day drop down$")
	public void user_selects_in_day_drop_down(String dd) {
	    WebElement ele = driver.findElement(By.xpath("//select[contains(@id,'days')]"));
	     Select sl = new Select(ele);
	     sl.selectByValue(dd);
	    		 
	}

	@When("^user selects \"([^\"]*)\" in month drop down$")
	public void user_selects_in_month_drop_down(String mdd) {
		  WebElement ele = driver.findElement(By.xpath("//select[contains(@id,'months')]"));
		     Select sl = new Select(ele);
		     sl.selectByValue(mdd);
		    	
	}

	@When("^user selects \"([^\"]*)\" in year drop down$")
	public void user_selects_in_year_drop_down(String ydd) {
		  WebElement ele = driver.findElement(By.xpath("//select[contains(@id,'years')]"));
		     Select sl = new Select(ele);
		     sl.selectByValue(ydd);
		    	
	}

	@When("^user enters \"([^\"]*)\"$")
	public void user_enters(String fname) {
		driver.findElement(By.xpath("//p/input[contains(@id,'firstname')]")).sendKeys(fname);
	}
	@When("^user enters lName valid \"([^\"]*)\"$")
	public void user_enters_lName_valid(String lname) {
		driver.findElement(By.xpath("//div/input[contains(@id,'customer_lastname')]")).sendKeys(lname);
	}
	
	@When("^user enters passwrd valid \"([^\"]*)\"$")
	public void user_enters_passwrd_valid(String pass) {
		driver.findElement(By.xpath("//div/input[contains(@id,'passwd')]")).sendKeys(pass);
	}
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String firstN, String lastN) {
		driver.findElement(By.xpath("//p/input[contains(@id,'firstname')]")).sendKeys(firstN);
		driver.findElement(By.xpath("//p/input[contains(@id,'lastname')]")).sendKeys(lastN);
	}

	@When("^user enters \"([^\"]*)\" in address$")
	public void user_enters_in_address(String address) {
		driver.findElement(By.xpath("//p/input[contains(@id,'address1')]")).sendKeys(address);
	}
	@When("^user enters company \"([^\"]*)\"$")
	public void user_enters_company (String comp) {
		driver.findElement(By.xpath("//div/input[contains(@id,'customer_lastname')]")).sendKeys(comp);
	}

	@When("^user enters \"([^\"]*)\" in city$")
	public void user_enters_in_city(String city) {
		driver.findElement(By.xpath("//p/input[contains(@id,'city')]")).sendKeys(city);
	
	}

	@When("^user enters \"([^\"]*)\" in state$")
	public void user_enters_in_state(String stateDD) {
	    WebElement ele = driver.findElement(By.xpath("//select[contains(@id,'id_state')]"));
	    Select sl = new Select(ele);
	    sl.selectByValue(stateDD);
	}

	@When("^user enters \"([^\"]*)\" in zip$")
	public void user_enters_in_zip(String zip) {
		driver.findElement(By.xpath("//p/input[contains(@id,'postcode')]")).sendKeys(zip);
	}

	@When("^user enters \"([^\"]*)\" in phone number$")
	public void user_enters_in_phone_number(String phNum) {
		driver.findElement(By.xpath("//p/input[contains(@id,'phone_mobile')]")).sendKeys(phNum);
	}

	@When("^user enters \"([^\"]*)\" in alias$")
	public void user_enters_in_alias(String alias) {
		driver.findElement(By.xpath("//p/input[contains(@id,'alias')]")).sendKeys(alias);
	}

	@Then("^user should be able to register successfully$")
	public void user_should_be_able_to_register_successfully() {
		driver.findElement(By.xpath("//button[contains(@id,'submitAccount')]")).click();
	}
	
}

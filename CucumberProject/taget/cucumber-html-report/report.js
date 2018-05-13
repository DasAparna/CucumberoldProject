$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Chrome.feature");
formatter.feature({
  "name": "Open Facebook in Chrome Browser",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Facebook login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start facebook",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be loggedin successully",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "apa",
        "success"
      ]
    },
    {
      "cells": [
        "cpa",
        "Fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Facebook login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "ChromeTest.open_Chrome_and_start_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"apa\" and \"success\"",
  "keyword": "When "
});
formatter.match({
  "location": "ChromeTest.i_enter_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.ChromeTest.i_enter_and(ChromeTest.java:33)\r\n\tat ✽.I enter \"apa\" and \"success\"(Features/Chrome.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "ChromeTest.click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be loggedin successully",
  "keyword": "And "
});
formatter.match({
  "location": "ChromeTest.user_should_be_loggedin_successully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Facebook login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "ChromeTest.open_Chrome_and_start_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"cpa\" and \"Fail\"",
  "keyword": "When "
});
formatter.match({
  "location": "ChromeTest.i_enter_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.ChromeTest.i_enter_and(ChromeTest.java:33)\r\n\tat ✽.I enter \"cpa\" and \"Fail\"(Features/Chrome.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "ChromeTest.click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be loggedin successully",
  "keyword": "And "
});
formatter.match({
  "location": "ChromeTest.user_should_be_loggedin_successully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Features/MyApplication.feature");
formatter.feature({
  "name": "Test automationpractice smoke scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:15.31Z\u0027\nSystem info: host: \u0027DESKTOP-S76DE4I\u0027, ip: \u0027192.168.0.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\bijay\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: 348aaa73606032759b43120749a23638\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat stepDefination.SmokeTest.open_chrome_and_start_application(SmokeTest.java:30)\r\n\tat ✽.Open chrome and start application(Features/MyApplication.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on signin",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.user_clicks_on_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid \"adas1328@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "personal information page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on personal information page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.user_is_on_personal_information_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:15.31Z\u0027\nSystem info: host: \u0027DESKTOP-S76DE4I\u0027, ip: \u0027192.168.0.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\bijay\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: 348aaa73606032759b43120749a23638\n*** Element info: {Using\u003dxpath, value\u003d//div/h3[contains(text(),\u0027Your personal information\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefination.SmokeTest.user_is_on_personal_information_page(SmokeTest.java:52)\r\n\tat ✽.user is on personal information page(Features/MyApplication.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on gender",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.user_clicks_on_gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid \"Aparna\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters lName valid \"Das\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_lName_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters passwrd valid \"aps123\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_passwrd_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"4\" in day drop down",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_selects_in_day_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"5\" in month drop down",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_selects_in_month_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"2001\" in year drop down",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_selects_in_year_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Apar\" and \"das\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters company \"TechM\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_company(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"london\" in address",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"acsd\" in address",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"USA\" in city",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"5\" in state",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_state(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"00000\" in zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_zip(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"1234567893\" in phone number",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_phone_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"aps\" in alias",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.user_enters_in_alias(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_register_successfully()"
});
formatter.result({
  "status": "skipped"
});
});
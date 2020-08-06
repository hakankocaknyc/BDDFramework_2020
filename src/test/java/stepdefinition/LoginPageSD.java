package stepdefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import runnerTest.webPages.LoginPage;

public class LoginPageSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on home page$")
    public void iAmonHomePage(){

        Assert.assertEquals(BasePage.get().getCurrentUrl(),"https://www.facebook.com");
    }

    @When("^I enter(.+)into (username|password) text fields on home screen$")
    public void enterDataUserandPassField(String anyText, String textFields){

        switch (textFields){
            case "username" :
                loginPage.enterEmail(anyText);
                break;
             case "password":
                 loginPage.enterPassword(anyText);
                 break;

        }
    }

    @And("^I click on (login button|create account) on home screen$")
    public void clickonButton(String button){
        loginPage.clickOnLoginButton();

        switch (button){
            case "login button":
                loginPage.clickOnLoginButton();
                break;
            case "create account":
                // implement your actual
                break;

        }
    }

    @Then("^I verify that   invalid credentials$")
        public void verifyInvalidLogin(){
//            Assert.assertEquals(loginPage.getTextElement(),"Log into Facebook | Facebook");
            loginPage.createAccount();
        }

    }


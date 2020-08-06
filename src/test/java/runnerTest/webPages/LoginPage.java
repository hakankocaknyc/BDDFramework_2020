package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil{
    //Locator
    private By emailTextField = By.id("email");

    private By passworTextdField = By.id("pass");
    private By LoginButton = By.id("u_0_b");
    private By errorMessage = By.xpath("//span[contains(text(), 'Log Into Facebook')]");
    private By createAccount = By.xpath("//a[contains(text(), 'Create New Account')]");

        // Actions

    public void enterEmail(String enterEmail){

        sendValue(emailTextField,enterEmail);
    }

    public void enterPassword(String enterPassword){
        sendValue(passworTextdField,enterPassword);
    }

    public void clickOnLoginButton(){

        clickOn(LoginButton);
    }

    public String getTextElement(){
        return getTextFromElement(errorMessage);
    }

    public boolean createAccount(){
        return isElementDisplayed(createAccount);
    }}
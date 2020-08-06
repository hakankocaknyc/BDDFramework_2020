@login

  Feature: Login Feature

    Background:
      Given: I am on home page



      @login
      Scenario Outline: Verify invalid login for multiple users
        When I enter <username> into username text fields on home screen
        And  I enter <password> into password text fields on home screen
        And I click on login button on home screen
        Then I verify that   invalid credentials



        Examples:

        | username        | password  |
        | hakan@gmail.com |  test@123 |
        | john@gmail.com  |  acd@123  |
        | jim@gmail.com   |  1233@er  |

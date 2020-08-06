$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that   invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "hakan@gmail.com",
        "test@123"
      ],
      "line": 22,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "john@gmail.com",
        "acd@123"
      ],
      "line": 23,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "jim@gmail.com",
        "1233@er"
      ],
      "line": 24,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8500810370,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "Given: I am on home page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter hakan@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter test@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that   invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " hakan@gmail.com ",
      "offset": 7
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 1766777944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " test@123 ",
      "offset": 7
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 178905944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickonButton(String)"
});
formatter.result({
  "duration": 25178909507,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Hakans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:ca8:4552:a03a:6f71%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/bz/l372ww8s1gg...}, goog:chromeOptions: {debuggerAddress: localhost:64183}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 659057f7ec74a013595210bdc170639a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat runnerTest.webPages.ElementUtil.clickOn(ElementUtil.java:49)\n\tat runnerTest.webPages.LoginPage.clickOnLoginButton(LoginPage.java:27)\n\tat stepdefinition.LoginPageSD.clickonButton(LoginPageSD.java:42)\n\tat ✽.And I click on login button on home screen(Login.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 905039070,
  "status": "passed"
});
formatter.before({
  "duration": 4992389438,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "Given: I am on home page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 23,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter john@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter acd@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that   invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " john@gmail.com ",
      "offset": 7
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 464227471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " acd@123 ",
      "offset": 7
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 451571658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickonButton(String)"
});
formatter.result({
  "duration": 1221640702,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Hakans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:ca8:4552:a03a:6f71%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/bz/l372ww8s1gg...}, goog:chromeOptions: {debuggerAddress: localhost:64354}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b865456564cdf3dc44e517ca441c477f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat runnerTest.webPages.ElementUtil.clickOn(ElementUtil.java:49)\n\tat runnerTest.webPages.LoginPage.clickOnLoginButton(LoginPage.java:27)\n\tat stepdefinition.LoginPageSD.clickonButton(LoginPageSD.java:42)\n\tat ✽.And I click on login button on home screen(Login.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 853785209,
  "status": "passed"
});
formatter.before({
  "duration": 4355529244,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "Given: I am on home page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter jim@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter 1233@er into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that   invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " jim@gmail.com ",
      "offset": 7
    },
    {
      "val": "username",
      "offset": 27
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 416006899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 1233@er ",
      "offset": 7
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 300377978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickonButton(String)"
});
formatter.result({
  "duration": 19946781459,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Hakans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:ca8:4552:a03a:6f71%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/bz/l372ww8s1gg...}, goog:chromeOptions: {debuggerAddress: localhost:64421}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e905b026d5ca6172fa5c3e4fa684bce2\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat runnerTest.webPages.ElementUtil.clickOn(ElementUtil.java:49)\n\tat runnerTest.webPages.LoginPage.clickOnLoginButton(LoginPage.java:27)\n\tat stepdefinition.LoginPageSD.clickonButton(LoginPageSD.java:42)\n\tat ✽.And I click on login button on home screen(Login.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 815718164,
  "status": "passed"
});
});
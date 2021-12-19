$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/e-commerce.feature");
formatter.feature({
  "name": "E-commerce",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I initialize chrome driver",
  "keyword": "Given "
});
formatter.match({
  "location": "MySteps.initializeChromeDriver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to \"https://www.trendyol.com\" url",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.gotoURL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1 - Add product to basket with user login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@HTC"
    }
  ]
});
formatter.step({
  "name": "I focus homepage popup image element",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.mouseHover(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: homepage popUp close index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus sign in title element",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.mouseHover(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: login button index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"testtrendyol100@gmail.com\" text to email address bar text area",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.enterText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"testtrendyol100\" text to password bar text area",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.enterText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: submit login button index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait search input box element 5 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.waitElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus search input box element",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.mouseHover(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Oyuncu Bilgisayarı\" text to search input box text area",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.enterText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"ENTER\" keyboard button",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.clickKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see search results page",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus first product element",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.mouseHover(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: first product index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  switch to tab",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.SwithTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see product new tab page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait add cart button element 2 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.waitElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: add cart button index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: my cart area index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 5 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see my cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  check cart info header text element1 and info empty cart element2 in Cart",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.CheckMyCart(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
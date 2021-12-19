Feature: E-commerce

  Background:
    Given I initialize chrome driver
    When I go to "https://www.trendyol.com" url
    Then I see home page

  @HTC
  Scenario: 1 - Add product to basket with user login
    When I focus homepage popup image element
    When I click element: homepage popUp close index: 1
    When I focus sign in title element
    When I click element: login button index: 1
    Then I see login page

    When I enter "testtrendyol100@gmail.com" text to email address bar text area
    Then I enter "testtrendyol100" text to password bar text area
    When I click element: submit login button index: 1
    Then I see home page

    When I wait search input box element 5 seconds
    When I focus search input box element
    When I enter "Oyuncu Bilgisayarı" text to search input box text area
    Then I click "ENTER" keyboard button
    And I see search results page
    And I wait for 3 seconds


    When I focus first product element
    When I click element: first product index: 1
    When I wait for 3 seconds
    When I  switch to tab
    Then I see product new tab page


    When I wait add cart button element 2 seconds
    When I click element: add cart button index: 1
    When I click element: my cart area index: 1
    When I wait for 5 seconds
    Then I see my cart page
    And I  check cart info header text element1 and info empty cart element2 in Cart

    
    #############

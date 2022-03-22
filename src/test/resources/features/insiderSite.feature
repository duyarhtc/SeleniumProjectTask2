Feature: E-commerce

  Background:
    Given I initialize chrome driver
    When I go to "https://useinsider.com/" url
    Then I see home page
    And I wait for 5 seconds

  @HTC
  Scenario: Start Full Test

    When I check home page
    When I click element: homepage allow cookies index: 1
    When I click element in homepage menu in More option
    And I wait for 5 seconds
    When I click element: homepage menu in career index: 1
    Then I see career page
    And I wait for 2 seconds


    When I check careerPage seeAllTeamsButton in page index: 1
    When I check careerPage locationArea in page index: 1
    When I check careerPage lifeAtInsiderArea in page index: 1
    When I wait for 3 seconds



    When I scroollPage for  element: careerPage seeAllTeamsButton , 1 and 0 - 2500
    When I click element: careerPage seeAllTeamsButton index: 1
    When I scroollPage for  element: careerPage qualityAssuranceArea , 1 and 0 - 2800
    When I click element: careerPage qualityAssuranceArea index: 1





    #When I click element: careerPage seeAllTeamsButton index: 1









    When I focus sign in title element

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


Feature: Navigation Feature

    Background: I am on the home page
        Given User is on automationpractice.com


    Scenario Outline: User should able to click on Menu links and see the Menu pages
        When User click on "<menuOption>" Menu item
        Then title of the page should be displayed as "<MenuPageTitle>"
        Examples:
            | menuOption | MenuPageTitle       |
            | Women      | Women - My Store    |
            | Dresses    | Dresses - My Store  |
            | T-shirts   | T-shirts - My Store |
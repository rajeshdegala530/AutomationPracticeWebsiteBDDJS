
Feature: Search Functionality Feature

    Background: I am on the home page
        Given User is on automationpractice.com


    Scenario Outline: Verify products are displayed on Successfull Search
        When User enter "<keyword>" in the search input box
        And Click search submit button
        Then Products results are displayed on the page
        Examples:
            | keyword         |
            | Dress           |
            | T-SHIRTS        |
            | EVENING DRESSES |

    Scenario Outline: Verify No results page is displayed on Unsuccessful Search
        When User enter "<InvalidKeyword>" in the search input box
        And Click search submit button
        Then No results Message is displayed on the page

        Examples:
            | InvalidKeyword |
            | shorts         |
            | floral         |
            | fasdfas        |

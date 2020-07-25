Feature: Customer Login:

    Background: I am on the Customer Login Page
        Given User is on the Login Page


    Scenario Outline: Customer Login with Valid Credentials
        When User enter the "<LoginEmail>" and "<LoginPasswd>" and landed on My Account page
        Then User Account is displayed next to Signout Link by Account name
        Examples:
            | LoginEmail  | LoginPasswd |
            | d5@test.com | test123     |

    Scenario Outline: To Display Error Message on Invalid Email address
        When User enter "<invalidemail>" and "<invalidpassword>"
        And  click on signin button to land on My account page
        Then Error Message is displayed
        Examples:
            | invalidemail      | invalidpassword |
            | werwer@sdfsfd.com | sfasdf          |
            |                   | sfsdf           |
            | d5@test.com       | sdfsdf          |
            | d5@test.com       |                 |
            |                   |                 |
            | d5@test.come      | test123         |






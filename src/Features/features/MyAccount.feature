Feature: My Account Feature

    Background: To Check My Acount functioanlity
        Given User is on the Login Page

    Scenario Outline: User should able to see Order History & Details
        When user enter the "<LoginEmail>" and "<LoginPasswd>" and landed on My Account page
        And User land on Order History page by selecting "Order history and details" link
        Then Page name is "Order history - My Store"
        And Order list table is displayed
        Examples:
            | LoginEmail  | LoginPasswd |
            | d5@test.com | test123     |

    
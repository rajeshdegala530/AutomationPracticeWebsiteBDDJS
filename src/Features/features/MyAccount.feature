Feature: My Account Feature

    Background: To Check My Acount functioanlity
        Given User is on the Login Page

    Scenario Outline: User should able My Account Pages and Validate the tests
        When User enter the "<LoginEmail>" and "<LoginPasswd>" and landed on My Account page
        And User land on "<MyAccountPageType>" page by selecting PageLinkOption
        Then Page name is "<MyAccountPageTitle>" and passed validations
        #Examples:
        #   | LoginEmail  | LoginPasswd |
        #   | d5@test.com | test123     |

        Examples:
            | LoginEmail  | LoginPasswd | MyAccountPageType | MyAccountPageTitle       |
            | d5@test.com | test123     | Orders            | Order history - My Store |
            | d5@test.com | test123     | Credit            | Order slip - My Store    |
            | d5@test.com | test123     | Addresses         | Addresses - My Store     |
            | d5@test.com | test123     | PersopnalInfo     | Identity - My Store      |
            | d5@test.com | test123     | WishList          | My Store                 |


Feature: Customer Login
    # As a user ...
    # I want to ...
    # So that I ...

    Background: I am on the Login Page
        Given User is on the Login Page

    Scenario: Validate User is on the Login Page
        Then page title displayed as "Login - My Store"

    Scenario Outline:Create a New Customer Account
        When User Enter the "<Emailid>" in the text box and click Create Button
        And "Authentication" text is displayed on Page Breadcrumbs
        And User selected Title and firstname as "<fname>" lastname as "<lname>"
        And password as "<password>"
        And day as "<day>" month as "<month>" and year as "<year>"
        And Selected newsletter subscription
        And Selected country as "<country>" and more fields displayed
        And Entered address details as "<FirName>","<LasName>","<company>","<Addl1>","<Addl2>","<City>","<State>","<zipcode>"
        And Entered "<MobileNumber>" number and "<Alias>"
        And User click on Register Button
        Then User is landed on My Account Page and able to see "My account" text
        And Sigin button changed to Singout followed by Account name

        Examples:
            | Emailid     | fname | lname | password | day | month | year | FirName | LasName | company | Addl1    | Addl2    | City    | State | zipcode | country | MobileNumber | Alias  |
            | d8@test.com | abc   | def   | test123  | 21  | 3     | 1985 | abc     | def     | testc   | Testadd1 | Testadd2 | Addison | 1     | 35540   | 21      | 010101010101 | myuser |
            | d9@test.com | abc   | def   | test123  | 21  | 3     | 1985 | abc     | def     | testc   | Testadd1 | Testadd2 | Addison | 1     | 35540   | 21      | 010101010101 | myuser |


    
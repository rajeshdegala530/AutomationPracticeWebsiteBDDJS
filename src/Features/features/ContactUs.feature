Feature: Contact Us Form Feature

    Background: User is on the AutomationPractice.com - ContactUs Page
        Given User is on ConactUs page


    Scenario: User is able to See Conact Us Form displayed
        Then the page title is dispalyed as "Contact us - My Store"

    Scenario: Submitting Contact Us Form
        When user select contact dropdown
        And enter the email id
        And enter the OrderReference Number
        And Enter the message
        And Submit the send button
        Then page displayed with success message
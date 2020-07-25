Feature: Email Subscription Feature

    Background: User am on the home page
        Given User is on automationpractice.com


    Scenario Outline: News letter Subscription - New Registration Message
        When the user enter "<mailid>" in the text box
        And the user click submit button
        Then success subscription message is displayed

        Examples:
            | mailid    |
            | rd8@r.com |



    Scenario Outline: News letter Subscription - Already Registered Message
        When the user enter "<usedmailid>" in the text box
        And the user click submit button
        Then Already subscribed message is displayed

        Examples:
            | usedmailid |
            | r1@r.com   |

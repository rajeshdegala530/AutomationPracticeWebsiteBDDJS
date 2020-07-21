Feature: Home Page Functionality Validations

Background: To Load AutomationPractice.com
Given User is on HomePage of automationpractice.com

Scenario: User to validate logo and page title
When User to see logo is present on the site
Then should display the page title as "My Store"

Scenario: User should be able to validat the Banner is Displayed
Then banner is displayed on top of the page

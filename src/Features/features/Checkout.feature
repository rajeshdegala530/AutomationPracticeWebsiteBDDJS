Feature: Checkout Feature



    Scenario: Place an Order with Single Product - User Not signed in
        Given User is on automationpractice.com
        When Selected product from Hompe Page - Popular Items list display
        And Added the product to cart by clicking Add to Cart button
        And landed on Shopping Cart Summary page by clicking Proceed to Checkout button
        And Click on Proceed Checkout button from Shopping Cart Page
        And  user enter the "<LoginEmail>" and "<LoginPasswd>"
        And click on signin button to land on Shopping cart page
        And On Address Page Click on Proceed Checkout button
        And On Shipping Page select the terms and conditions and click on Proceed to Checkout button
        And On Payment page, Select Pay by Cheque method
        And On Check Payment, click on I confirm order button
        Then Order complete message is displayed
        And Start to type your And step here Order summary is displayed with Order summary reference


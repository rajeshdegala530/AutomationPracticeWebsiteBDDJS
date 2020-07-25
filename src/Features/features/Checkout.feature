Feature: Checkout Feature


    Scenario Outline: Place an Order with Single Product - User Not signed in
        Given User added product to bag and navigated to checkout page
        When User enter the "<LoginEmail>" and "<LoginPasswd>" and landed on My Account page 
       # And click on signin button to land on Shopping cart page
        And and navigated till Payment page
        And On Payment page, Select Pay by Cheque method and confirm order 
        Then "Order confirmation - My Store" page is displayed and Order is placed

   Examples:
            | LoginEmail  | LoginPasswd |
            | d5@test.com | test123     |
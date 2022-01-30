/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import OrderPage from '../../../../support/pageObjects/OrderPage'
import SearchPage from '../../../../support/pageObjects/SearchPage'
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome


    const homePage=new HomePage()
    const orderPage=new OrderPage()
    const searchPage=new SearchPage()


Given('I open Voostore Page',()=>
{
    cy.visit(Cypress.env('url'))
    homePage.acceptCookie().click()
    homePage.getSearchField().type('dress{enter}')
})


And('I search a dress',()=>
{
    searchPage.searchedItems().first().click()
    
})

When('I add a item to cart',function(dataTable)
{
    searchPage.addToBox().click()
    searchPage.proceedToCheckout().click()
    orderPage.enterEmail().type(dataTable.rawTable[1][0])
    orderPage.enterPassword().type(dataTable.rawTable[1][1])
})


Then('I order a item, should get a item.',()=>
{

    orderPage.loginButton().click()
    orderPage.toNextButton().click()
    orderPage.termAndConditionCheckBox().check()
    orderPage.shippingServiceProviderCheckBox().check()
    orderPage.newsletterCheckBox().check()
    orderPage.voucherField().type('It is task 1 using BDD')

})


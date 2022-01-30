/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import OrderPage from '../../support/pageObjects/OrderPage'
import SearchPage from '../../support/pageObjects/SearchPage'

describe('My Second Test Suite', function() 
{


it('My FirstTest case',function() {

    const homePage=new HomePage()
    const orderPage=new OrderPage()
    const searchPage=new SearchPage()

    cy.visit(Cypress.env('url'))

    homePage.acceptCookie().click()
    homePage.getSearchField().type('dress{enter}')

    searchPage.searchedItems().first().click()
    searchPage.addToBox().click()
    searchPage.proceedToCheckout().click()

    orderPage.enterEmail().type('andrew.jackson.tester1@gmail.com')
    orderPage.enterPassword().type('Qpfmffls.1')
    orderPage.loginButton().click()
    orderPage.toNextButton().click()
    orderPage.termAndConditionCheckBox().check()
    orderPage.shippingServiceProviderCheckBox().check()
    orderPage.newsletterCheckBox().check()
    orderPage.voucherField().type('It is task 1 using BDD')


 
})
})




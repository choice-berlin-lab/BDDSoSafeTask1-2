class OrderPage
{

enterEmail()
{
    return cy.get('#email')
}

enterPassword()
{
    return cy.get('#passwort')
}
loginButton()
{
    return cy.get('.register--login-btn')
}
toNextButton()
{
    return cy.get('.confirm--actions > .btn')
}
termAndConditionCheckBox()
{
    return cy.get(':nth-child(1) > .column--checkbox > [type="checkbox"]')
}
shippingServiceProviderCheckBox()
{
    return cy.get(':nth-child(2) > .column--checkbox > [type="checkbox"]')
}
newsletterCheckBox()
{
    return cy.get(':nth-child(3) > .column--checkbox > [type="checkbox"]')
}
voucherField()
{
    return cy.get('.add-voucher--field')
}



}

export default OrderPage;
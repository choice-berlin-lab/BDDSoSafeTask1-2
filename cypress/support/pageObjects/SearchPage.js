class SearchPage
{

searchedItems()
{
    return cy.get('.product--title')
}
addToBox()
{
    return cy.get('.buybox--button')
}

proceedToCheckout()
{
    return cy.get('.button--container > .is--primary')
}
}

export default SearchPage;
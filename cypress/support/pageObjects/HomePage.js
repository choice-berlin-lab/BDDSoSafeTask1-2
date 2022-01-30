class HomePage
{

acceptCookie()
{
    return cy.get('.cookie-permission--accept-button')
}

getSearchField()
{
    return cy.get(".shop--navigation > .navigation--list > .entry--search > .main-search--form > .main-search--field")

}

}

export default HomePage;
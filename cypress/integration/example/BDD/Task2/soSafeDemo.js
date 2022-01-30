/// <reference types="Cypress" />

import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('I open sosafe Page',()=>
{
    cy.visit('https://sosafe.de/')
    cy.get(':nth-child(4) > ._brlbs-btn').click()
})

And('I click a demo navigation button and verify 3 of demo icon displayed',()=>
{
    cy.get('.fusion-icon').click()
    cy.get('#mobile-menu-item-3818 > .fusion-bar-highlight').click()
    cy.get('.fusion-builder-row-3 > .fusion-builder-row > .fusion_builder_column_1_3').should('have.length',3)
})

When('I click the E-learning demo icon',()=>
{
    cy.get('.fusion-builder-column-3 > .fusion-column-wrapper > :nth-child(2) > .fusion-imageframe > .fusion-no-lightbox > .img-responsive').click()
})


And('Verify if E-learning demo request content is displayed', ()=>
{
    cy.get('#elearning > .fusion-builder-row').should('be.visible')
}
)

And('I click the E-learning demo button and fill up the form', function(dataTable)
{
    cy.get('.fusion-builder-column-13 > .fusion-column-wrapper > [style="text-align:center;"] > .fusion-button').click()

    cy.get('#hs-form-iframe-3').wait(10000).then(function($iFrame){
        const iFrameContent = $iFrame.content()
        const emailInput = iframe.find('input:eq(0)')
        const firstnameInput = iframe.find('input:eq(1)')
        const lastnameInput = iframe.find('input:eq(2)')
        const numberOf = iframe.find('select')
        const button = iframe.find('button')

        cy
          .wrap(emailInput)
          .click()
          .type('ddd')

    }


) 
}
)
Then('I click the inquire now button and verify if confirmation message is dispalyed', ()=>
{
    //click
    //verification
}
)


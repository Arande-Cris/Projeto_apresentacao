Cypress.Commands.add('goToPage', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
    cy.viewport(1024, 768);
    cy.visit("/");
    cy.get('button[id^="onetrust-accept"]').click()
    cy.get('div[id="conteudo-principal"]').should('be.visible')
   
})

Cypress.Commands.add('nameTitulosTable',(nameTitulos)=>{
    cy.get('a[class="btn btn--white"][href="/titulos/precos-e-taxas.htm"]').click({force: true})
    cy.get('table[class^="td-invest-table"]').should('be.visible')
    cy.get('table').contains('td', nameTitulos).should('be.visible')
})
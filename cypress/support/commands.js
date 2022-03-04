Cypress.Commands.add('goToPage', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
    cy.viewport(1024, 768);
    cy.visit("/");
    cy.get('button[id^="onetrust-accept"]').click()
    cy.get('div[id="conteudo-principal"]').should('be.visible')
   
})
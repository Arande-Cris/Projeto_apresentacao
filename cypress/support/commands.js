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

Cypress.Commands.add('aprendaAInvestir',(tituloVideo)=>{
    cy.get('a[class="btn btn--primary"][href="/como-investir.htm"]').click({force: true})
    cy.contains('h2', 'COMO INVESTIR').should('be.visible')
    cy.contains('h2', 'Aprendendo a Investir').scrollIntoView()
        .should('be.visible')
    cy.contains('span',tituloVideo).invoke('text').as("tituloV")      


})


Cypress.Commands.add('tabelaTitulos', (nameTitulo)=>{
    cy.get('a[class="btn btn--white"][href="/titulos/precos-e-taxas.htm"]').click({force: true})
    cy.get('table[class^="td-invest-table"]').should('be.visible')
    cy.get('table').contains('td', nameTitulo).should('be.visible')
})

import faker from "@faker-js/faker";
faker.locale = 'pt_BR';

class authActions {

    maisOpcoes() {
        cy.get('a[class="btn btn--primary margin-top-medium btn--investment-section"]').click({ force: true })
        cy.get('a[id="start-simulation-button"]').click({ force: true })
    }

    invetirestudos(){
        cy.get('a[data-objetivo="ES"]').click({ force: true })
        cy.get('div[class="tdsimu-mensagem-user"]').should('contain', 'Estudos')
        cy.get('div[class="tdsimu-mensagem-td tdsimu-mensagem-td--nova-msg"]', { timeout: 200000 }).should('contain', 'Por quanto tempo você pretende deixar o seu dinheiro investido?')
        cy.get('a[data-bi-label="1-3anos"]', { timeout: 15000 }).click({ force: true })
        cy.get('p[id="typewriter7"]', { timeout: 200000 }).should('contain', 'Entendi! Já descobrimos o seu perfil e temos incríveis')
        cy.get('a[data-bi-label="vejaencontramos"]').click({ force: true })
        cy.get('a[class="btn btn--primary margin-top-small"]').click({ force: true })
        cy.get('a[onclick="openDataInvestment()"]').click({ force: true })
        cy.get('input[id="valor-para-investir"]').type('10000')
        cy.get('a[onclick="setInvestment()"]').click({ force: true })
        cy.get('input[id="valor-por-mes"]').type('30')
        cy.get('a[data-bi-label="valor-investir-mensal"]').click({ force: true })
        cy.get('a[class="btn btn--primary btn-simu--investir"]')
            .should('be.visible')
            .and('have.text', 'Investir')
        cy.get('a[data-bi-label="enviar-email"]').click({ force: true })
        cy.get('input[type="email"]').type(faker.internet.email())
        cy.get('input[id="check-box"]').check()
        cy.get('a[class="btn btn--primary td-btn-enviar-email"]').click({ force: true })
        cy.get('span[class="tdsimu-email-enviado"]').should('contain', 'E-mail enviado')
    }

}
export default new authActions();
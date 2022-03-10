/// <reference types="cypress" />
import auth from "../../support/appActions"
import faker from "@faker-js/faker";
faker.locale = 'pt_BR';

/**
 * O Objetivo deste projeto é utilizar o máximo de conhecimento técnico possivél.
 * Apenas cenários 100% validados, com checkpoints, aplicando a biblioteca Faker, logica de programação, Fixtures, Factories, Commands e appActions. 
 * Roteiro de Teste: 
 * Simule Mais Opções – Home Page + redirecionamento 
 * Ver Todos os Títulos – Home Page + redirecionamento
 * Descubra o título ideal – Home Page + redirecionamento
 * Comece a Investir – Home Page + redirecionamento
 * Escolha seu Objetivo – Home Page + redirecionamento
 * Opções de Título – Home Page + redirecionamento
 * 
 * Teste de Casos 
 * Testar aplicação com aporte de 00,00
 * Testar aplicação com aporte mensal menor que 30,00
 * Testar com aporte acima de 1.0000.000,000
 * Acrescentar grafico de partição por equivalencia: limite 
 * 
 * 
 */

describe('Teste Site WorX - Grupo 4', () => {
    beforeEach(() => {
        cy.goToPage();
        //checkPoint 
        
    });

    //Hom e+ direcionamento
    it('Simule Investimento estudantes - Quanto quero investir hoje', () => {
        auth.maisOpcoes()
        auth.invetirestudos()
    })

    it('Todos os Titulos', () => {
        cy.get('a[class="btn btn--white"][href="/titulos/precos-e-taxas.htm"]').click({ force: true })
        cy.get('a[id="161"]').click({ force: true })
        cy.get('a[href="javascript:abreTela2(2)"]').click({ force: true })
        cy.contains('a[class="btn btn--primary td-btn-avancar-resgate"]')
            .should('not.exist')
        cy.get('input[name="valor-para-resgatar"]').type('10000000', { force: true })
        cy.get('a[class="btn btn--primary td-btn-avancar-resgate"]')
            .should('be.visible')
            .and('have.text', 'Avançar')
            .click({ force: true })
        cy.get('a[href^="javascript:$"]').click({ force: true })
        cy.get('a[class="btn btn--primary btn-simu--investir"]')
            .should('be.visible')
            .and('have.text', 'Investir')
        cy.get('a[class^="btn btn--primary td-precosTaxas__modal-email "').click({ force: true })
        cy.get('input[type="email"]').type(faker.internet.email())
        cy.get('input[id="check-box"]').check()
        cy.get('a[class="btn btn--primary td-btn-enviar-email"]').click({ force: true })
        cy.get('span[class="td-email-enviado"]').should('contain', 'E-mail enviado')    
    })    




})
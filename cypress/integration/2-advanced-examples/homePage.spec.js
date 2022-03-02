/// <reference types="cypress" />
import faker from "@faker-js/faker";
faker.locale = 'pt_BR';

// O Objetivo deste projeto é utilizar o máximo de conhecimento técnico possivél.
// Apenas cenários 100% validados, com checkpoints, aplicando a biblioteca Faker, logica de programação, Fixtures, Factories, Commands e appActions. 
describe('Teste Site WorX - Grupo 4', () => {
    it('Visitar Pagina', () => {
        cy.visit('/')
        cy.viewport(1024, 768);
        cy.get('button[id^="onetrust-accept"]').click()
    })

    it('Visitar Pagina', () => {
        cy.visit('/')
        cy.get('button[id^="onetrust-accept"]').click()
    })

})
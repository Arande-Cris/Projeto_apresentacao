/// <reference types="cypress" />
import faker from "@faker-js/faker";
import { random } from "cypress/types/lodash";
import { beforeEach } from "mocha";
faker.locale = 'pt_BR';

// O Objetivo deste projeto é utilizar o máximo de conhecimento técnico possivél.
// Apenas cenários 100% validados, com checkpoints, aplicando a biblioteca Faker, logica de programação, Fixtures, Factories, Commands e appActions. 
// Roteiro de Teste: 
// 	Simule seu Investimento - Home Page 
// 	Simule Mais Opções – Home Page + redirecionamento 
// 	Escolha seu Objetivo – Home Page + redirecionamento
// 	Descubra o título ideal – Home Page + redirecionamento
// 	Opções de Título – Home Page + redirecionamento
// 	Ver Todos os Títulos – Home Page + redirecionamento
// 	Comece a Investir – Home Page + redirecionamento

describe('Teste Site WorX - Grupo 4', () => {
    it('Visitar Pagina', () => {
        cy.visit('/')
        cy.viewport(1024, 768);
        cy.get('button[id^="onetrust-accept"]').click()
    })

    // it('Simule Seu Investimento - HomePage', ()=>{
    //     cy.get('input[class^="td-simulation__input "]').type("10000")
    // })
    
})
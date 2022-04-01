/// <reference types="cypress" />
import auth from "../support/appActions"
import faker from "@faker-js/faker";
faker.locale = 'pt_BR';

describe('Teste Site WorX - Grupo 4', () => {
    /*
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
     * Aplicando tipos de teste
     * Testar aplicação com aporte mensal menor que 30,00
     * Testar com aporte acima de 1.000.000,00
     * Acrescentar grafico de partição por equivalencia: limite 
     * Os valores Limites são: 29,00; 30,00; 1.000.000,00 e 1.000.001,00
     * 
     * 
     */

   beforeEach(() => {
        cy.goToPage();

    });

    //Hom e+ direcionamento
    it('Simule Investimento estudantes - Quanto quero investir hoje', () => {
        auth.maisOpcoes()
        auth.invetirestudos()
    })

    it('Todos os Titulos', () => {
        auth.todosTitulos()
    })

    //ADICIONAR FIXTURES COM ARRAY E COMANDO COMMANDS => NAMETITULOSTABLE <= JA CRIADO!
    it('Veja Todos os Titulos: Validando itens em tabela', () => {

        auth.titulosEmTabela()
    })


})
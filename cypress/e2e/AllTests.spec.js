/// <reference types="cypress" />
import tableFactoty from "../../Factory/tableFactoty";
import auth from "../support/appActions"
import faker from "@faker-js/faker";
faker.locale = 'pt_BR';

describe('Testes Site Tesouro Direto', () => {
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

    //Home+ direcionamento
    it('Descubra o titulo ideal e simule investimento - Estudantes', () => {
        auth.maisOpcoes()
        auth.invetirestudos()
    })

    //ADICIONAR Factory <= JA CRIADO!
    it('Validar Titulos em Tabela: Tesouro Prefixado 2025', () => {
        cy.tabelaTitulos('Tesouro Prefixado 2025')
    })

    it('Validar Titulos em Tabela: Tesouro Prefixado 2029', () => {
        cy.tabelaTitulos('Tesouro Prefixado 2029')
    })

    it('Validar Titulos em Tabela: Tesouro Selic 2027', () => {
        cy.tabelaTitulos('Tesouro Selic 2027')
    })

    it('Validar Titulos em Tabela: Tesouro IPCA+ 2045', () => {
        cy.tabelaTitulos('Tesouro IPCA+ 2045')
    })


    //Home+ direcionamento
    it('Todos os Titulos: Tesouro Prefixado 2025', () => {
        auth.todosTitulos()
    })

    //MELHORAR: AUMENTAR COMPLEXIDADE E DIMINUIR A QUANTIDADE DE LINHAS DE CÓDIGO
    // De 87 pra 78 linhas, mas ainda tem que melhorar
    it('Comece a investir: Video 1', function () {
        cy.aprendaAInvestir('Conceitos básicos sobre impostos e taxas')
    })

    it('Validar Video 1', function () {
        auth.validTitle()
        cy.contains('span', this.tituloV).click({ force: true })
        cy.get('p[class="td-internal-heading__destaque---video__content__title"]').invoke("text").should('contain', this.tituloV)
    })


    it('Comece a investir: Video 2', function () {
        cy.aprendaAInvestir('Conceitos básicos para investir')
    })

    it('Validar Video 2', function () {
        auth.validTitle()
        cy.contains('span', this.tituloV).click({ force: true })
        cy.get('p[class="td-internal-heading__destaque---video__content__title"]').invoke("text").should('contain', this.tituloV)
    })

    it('Comece a investir: Video 3', function () {
        cy.aprendaAInvestir('Como funcionam os títulos públicos prefixados')
    })

    it('Validar Video 3', function () {
        auth.validTitle()
        cy.contains('span', this.tituloV).click({ force: true })
        cy.get('p[class="td-internal-heading__destaque---video__content__title"]').invoke("text").should('contain', this.tituloV)
    })



})
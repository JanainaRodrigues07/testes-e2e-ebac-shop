/// <reference types="cypress" />
import CheckoutPage from '../support/page_objects/checkout.page'
const dadosCheckout = require ('../fixtures/checkout.json')

var faker = require('faker');


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProduto('Arcadio Gym Short' , '32' , 'Black' , 4)

        CheckoutPage.editarCheckout(
            dadosCheckout[0].nome, 
            dadosCheckout[0].sobrenome, 
            dadosCheckout[0].empresa, 
            dadosCheckout[0].pais, 
            dadosCheckout[0].rua, 
            dadosCheckout[0].numero, 
            dadosCheckout[0].cidade, 
            dadosCheckout[0].estado, 
            dadosCheckout[0].cep, 
            dadosCheckout[0].telefone, 
            dadosCheckout[0].email
            )
            cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido')
         
        
    });


})
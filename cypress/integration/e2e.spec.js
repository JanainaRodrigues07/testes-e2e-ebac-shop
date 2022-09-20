/// <reference types="cypress" />
import CheckoutPage from '../support/page_objects/checkout.page'
const dadosCheckout = require ('../fixtures/checkout.json')


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
        cy.addProduto('Aether Gym Pant' , '33' , 'Green' , 4)
        CheckoutPage.editarCheckout(dadosCheckout[0].nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, telefone, email)
        

       
        //.click - carrinho
        //.click - finalizar
        //Checkout

        //TODO 
    });


})
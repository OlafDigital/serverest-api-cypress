import { faker } from "@faker-js/faker"
Cypress.Commands.add('cria_user', (user) => {
    //const email = faker.internet.email()
    //user.email = email
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user

    }).then((response) => { return response })
})

Cypress.Commands.add('busca_user', (idUsuario) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/usuarios/` + idUsuario
    }).then((response) => {
        expect(response.status).to.eq(200)
    })

})

Cypress.Commands.add('edita_user', (user) => {
    const email = faker.internet.email()
    //user.email = email
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${Cypress.env("idUsuario")}`,
        body: user
    }).then((response) => { return response })

})


Cypress.Commands.add('login', (email, senha) => {
    cy.api({
        method: 'POST',
        url: `https://serverest.dev/login`,
        body: {
            email: email,
            password: senha
        }
    }).then((response) => { return response })

})

Cypress.Commands.add('cria_produto', (prod) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        body: prod,
        headers: {
            Authorization: Cypress.env('token')
        }
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_produto', (idProduto) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/produtos/` + idProduto
    }).then((response) => { return response })
})

Cypress.Commands.add('edita_produto', (prod) => {
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/produtos/${Cypress.env("idProduto")}`,
        body: prod,
        headers: {
            Authorization: Cypress.env('token')
        }
    }).then((response) => { return response })

})
// CRIAÇÃO DE CARRINHO DE COMPRAS

Cypress.Commands.add('cria_carrinho', () => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        body: {produtos: [{ idProduto: Cypress.env('idProduto'), quantidade: 1}]},
        headers: {Authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_carrinho', (idCarrinho) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/carrinhos/` + idCarrinho,
        headers: {
            Authorization: Cypress.env('token')
        }
    }).then((response) => { return response })

})  

Cypress.Commands.add('Cancelar_compras', () => {
    cy.api({
        method: 'DELETE',
        url: `https://serverest.dev/carrinhos/cancelar-compra`,
        headers: { Authorization: Cypress.env('token') }    
    }).then((response) => { return response })

})



Cypress.Commands.add('deleta_produto', (idProduto) => {
    cy.api({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/` + idProduto,
        headers: {
            Authorization: Cypress.env('token')
        }
    }).then((response) => { return response })
})

Cypress.Commands.add('deleta_user', (idUsuario) => {
    cy.api({
        method: 'DELETE',
        // url: `https://serverest.dev/usuarios/${idUsuario}`
        url: `https://serverest.dev/usuarios/` + idUsuario
    }).then((response) => { return response })
})

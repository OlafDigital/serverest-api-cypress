
describe("API do Serverest", () => {

    context("USUÁRIOS", () => {

        it("Deve criar usuarios", () => {
            cy.fixture('usuario').then(function (usuario) {
                const user = usuario.cria_usuario

                cy.cria_user(user)
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq("Cadastro realizado com sucesso")
                Cypress.env('idUsuario', response.body._id)
            })

        })
        it('Deve buscar todos os usuarios', () => {
            const idUsuario = ''
            cy.busca_user(idUsuario)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })

        })
        it('Deve buscar usuario por ID', () => {
            const idUsuario = Cypress.env("idUsuario")
            cy.busca_user(idUsuario)
                .then((response) => {
                    expect(response.status).to.eq(200)
                }).then((response) => {
                    expect(response.status).to.eq(200)
                })

        })
        it('Deve atualizar usuario', () => {
            cy.fixture('usuario').then(function (usuario) {
                const user = usuario.edita_usuario
                cy.edita_user(user)
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq("Registro alterado com sucesso")
            })
        })
    })

    /******************************************************************************************************************/
    //AQI COMEÇA O BLOCO DE LOGIN DE USUÁRIO PARA AUTENTICAÇÃO E OBTENÇÃO DO TOKEN DE ACESSO PARA REALIZAR A EXCLUSÃO DO USUÁRIO CRIADO

    context("LOGIN DE USUÁRIO", () => {
        it('Deve realizar login do usuario', () => {
            cy.fixture('usuario').then(function (usuario) {
                const email = usuario.cria_usuario.email
                const senha = usuario.cria_usuario.password
                cy.login(email, senha)
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.message).to.eq("Login realizado com sucesso")
                        expect(response.body).to.have.property('authorization')
                        const token = response.body.authorization
                        Cypress.env('token', token)
                    })
            })

        })
    })

    /******************************************************************************************************************/
    //AQUI COMEÇA O BLOCO DE CRUD DE PRODUTOS 

    context("PRODUTOS", () => {
        it('Deve criar produto', () => {
            cy.fixture('produto').then(function (produto) {

                const prod = produto.cria_produto
                cy.cria_produto(prod)

                    .then((response) => {
                        expect(response.status).to.eq(201)
                        expect(response.body.message).to.eq("Cadastro realizado com sucesso")
                        Cypress.env('idProduto', response.body._id)
                    })

            })
        })
        it('Deve buscar todos os produtos', () => {
            const idProduto = ''
            cy.busca_produto(idProduto)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })

        })
        it('Deve buscar produto por ID', () => {
            const idProduto = Cypress.env("idProduto")
            cy.busca_produto(idProduto)
                .then((response) => {
                    expect(response.status).to.eq(200)
                }).then((response) => {
                    expect(response.status).to.eq(200)
                })
        })

        it('Deve atualizar produto', () => {
            cy.fixture('produto').then(function (produto) {
                const prod = produto.edita_produto
                cy.edita_produto(prod)
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq("Registro alterado com sucesso")
            })
        })
    })

    //AQUI COMEÇA O CADASTRO DE CARRINHO DE COMPRAS

    context("CARRINHO", () => {
        it('Deve criar carrinho de compras', () => {
            cy.cria_carrinho()
                .then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body.message).to.eq("Cadastro realizado com sucesso")
                    Cypress.env('idCarrinho', response.body._id)
                })
        })

        it('Deve buscar carrinho de compras', () => {
            const idCarrinho = ""
            cy.busca_carrinho(idCarrinho)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })
        })

        it('Deve buscar carrinho de compras por ID', () => {
            const idCarrinho = Cypress.env("idCarrinho")
            cy.busca_carrinho(idCarrinho)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })
        })

        it('Deve cancelar compras', () => {
            cy.Cancelar_compras()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido")
                })
        })
    })

    context("EXCLUSÃO", () => {
        it('Deve deletar produto', () => {
            const idProduto = Cypress.env("idProduto")
            cy.deleta_produto(idProduto)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Registro excluído com sucesso")
                })
        })

        /******************************************************************************************************************/
        //APENAS O EXCLUIR USUÁRIO FICU POR ÚLTIMO PARA GARANTIR QUE O USUÁRIO SEJA EXCLUÍDO APÓS A AUTENTICAÇÃO E OBTENÇÃO DO TOKEN DE ACESSO PARA REALIZAR A EXCLUSÃO DO USUÁRIO CRIADO   


        it('Deve deletar usuario', () => {
            const idUsuario = Cypress.env("idUsuario")
            cy.deleta_user(idUsuario)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Registro excluído com sucesso")
                })
        })
    })
})
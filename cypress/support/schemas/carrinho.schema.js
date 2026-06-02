export const carrinhoSchema = {

    criarCarrinho: {
        type: 'object',
        required: ['message', '_id'],
        properties: {
            message: { type: 'string' },
            _id: { type: 'string' }
        }
    },

    listarCarrinhos: {
        type: 'object',
        required: ['quantidade', 'carrinhos'],
        properties: {
            quantidade: {
                type: 'number'
            },
            carrinhos: {
                type: 'array'
            }
        }
    },

    buscarCarrinho: {
        type: 'object',
        required: [
            'produtos',
            'precoTotal',
            'quantidadeTotal',
            'idUsuario',
            '_id'
        ],
        properties: {
            produtos: {
                type: 'array'
            },
            precoTotal: {
                type: 'number'
            },
            quantidadeTotal: {
                type: 'number'
            },
            idUsuario: {
                type: 'string'
            },
            _id: {
                type: 'string'
            }
        }
    },

    cancelarCompra: {
        type: 'object',
        required: ['message'],
        properties: {
            message: {
                type: 'string'
            }
        }
    }
}
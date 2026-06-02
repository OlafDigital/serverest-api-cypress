export const produtoSchema = {

    criarProduto: {
        type: 'object',
        required: ['message', '_id'],
        properties: {
            message: { type: 'string' },
            _id: { type: 'string' }
        }
    },

    listarProdutos: {
        type: 'object',
        required: ['quantidade', 'produtos'],
        properties: {
            quantidade: { type: 'number' },
            produtos: { type: 'array' }
        }
    },

    buscarProduto: {
        type: 'object',
        required: [
            'nome',
            'preco',
            'descricao',
            'quantidade',
            '_id'
        ],
        properties: {
            nome: { type: 'string' },
            preco: { type: 'number' },
            descricao: { type: 'string' },
            quantidade: { type: 'number' },
            _id: { type: 'string' }
        }
    },

    atualizarProduto: {
        type: 'object',
        required: ['message'],
        properties: {
            message: { type: 'string' }
        }
    },

    deletarProduto: {
        type: 'object',
        required: ['message'],
        properties: {
            message: { type: 'string' }
        }
    }

}
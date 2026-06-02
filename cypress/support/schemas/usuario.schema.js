export const usuarioSchema = {

    criarUsuario: {
        type: 'object',
        required: ['message', '_id'],
        properties: {
            message: { type: 'string' },
            _id: { type: 'string' }
        }
    },

    listarUsuarios: {
        type: 'object',
        required: ['quantidade', 'usuarios'],
        properties: {
            quantidade: { type: 'number' },
            usuarios: { type: 'array' }
        }
    },

    buscarUsuario: {
        type: 'object',
        required: [
            'nome',
            'email',
            'password',
            'administrador',
            '_id'
        ],
        properties: {
            nome: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
            administrador: { type: 'string' },
            _id: { type: 'string' }
        }
    },

    atualizarUsuario: {
        type: 'object',
        required: ['message'],
        properties: {
            message: { type: 'string' }
        }
    },

    deletarUsuario: {
        type: 'object',
        required: ['message'],
        properties: {
            message: { type: 'string' }
        }
    }
}
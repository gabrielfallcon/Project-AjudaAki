const INITIAL_STATE = {

    codigo        : '',
    nome          : '',
    especialidade : '',
    preco         : '',
    local         : '',
    lista         : []

}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'ADD_COD' :
            return {...state, codigo: action.playload}
        case 'ADD_NOME' :
            return {...state, nome: action.playload}
        case 'ADD_ESPEC' : 
            return{...state, especialidade: action.playload}
        case 'ADD_PRECO' :
            return{...state, preco: action.playload}
        case 'ADD_LOCAL' :
            return{...state, local : action.playload}
        case 'LISTAR_AJUDA' :
            return{...state, lista : action.playload}
        case 'LIMPAR_FORM' :
            return INITIAL_STATE

        default:
            return state
    }
}
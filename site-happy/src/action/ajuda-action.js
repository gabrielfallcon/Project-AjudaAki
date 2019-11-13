import axios from 'axios'

const URL = "http://localhost:3200/ajuda/cadastro"

export const adicionaCodigo = e => {
    return{
        type     : 'ADD_COD',
        playload : e.target.value
    }
}

export const adicionaNome = e => {
    return {
        type     : 'ADD_NOME',
        playload : e.target.value
    }
}

export const adicionaEspecialidade = e => {
    return{
        type     : 'ADD_ESPEC',
        playload : e.target.value
    }
}

export const adicionaPreco = e => {
    return{
        type     : 'ADD_PRECO',
        playload : e.target.value
    }
}

export const adicionaLocal = e => {
    return{
        type     :  'ADD_LOCAL',
        playload : e.target.value
    }
}

export const listarAjuda = () => {
    return (dispatch) => {
        return axios.get(URL).then(response=>{
            dispatch({
                type : 'LISTAR_AJUDA',
                playload : response.data
            })
        },
            (err)=> {
                console.log(err)
            }
        )
    }
}

export const adicionarAjuda = (codigo, nome, especialidade, preco, local) => {
    return(dispatch) => {
        return axios.post(URL, {codigo, nome, especialidade, preco, local})
        .then(response =>{
            dispatch({
                type : 'LIMPAR_FORM'
            })
        })
    }
}
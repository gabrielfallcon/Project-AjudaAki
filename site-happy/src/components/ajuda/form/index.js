import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { adicionaCodigo, adicionaNome, adicionaEspecialidade, adicionaPreco, adicionaLocal, adicionarAjuda } from '../../../action/ajuda-action'

const mapStateToProps = state => ({
    codigo: state.ajuda.codigo,
    nome: state.ajuda.nome,
    especialidade: state.ajuda.especialidade,
    preco: state.ajuda.preco,
    local: state.ajuda.local,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    adicionaCodigo,
    adicionaNome,
    adicionaEspecialidade,
    adicionaPreco,
    adicionaLocal,
    adicionarAjuda
}, dispatch)

class Formulario extends React.Component {
    render() {
        const {
            codigo,
            nome,
            especialidade,
            preco,
            local,

            adicionaCodigo,
            adicionaNome,
            adicionaEspecialidade,
            adicionaPreco,
            adicionaLocal,
            adicionarAjuda
        } = this.props

        return (
            <div className="border-right border-left pl-3 pr-3">
                <hr></hr>
                <h1>Cadastre Sua ajuda aqui !</h1>
                <form className="my-5">

                    <div className="form-group row">
                        <label htmlFor="text"
                            className="col-sm-3 col-form-label">Código:</label>
                        <div className="col-sm-10 col-6">
                            <input type="number"className="form-control" id="codigo" placeholder="Código..." value={codigo}
                            onChange={adicionaCodigo}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="text"
                            className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-10 col-6">
                            <input type="text" className="form-control" id="nome" placeholder="Nome..." value={nome} 
                            onChange={adicionaNome}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="text"
                            className="col-sm-3 col-form-label">Especialidade:</label>
                        <div className="col-sm-10 col-6">
                            <input type="text" className="form-control" id="especialidade" placeholder="Especialidade..." value={especialidade} 
                            onChange={adicionaEspecialidade}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="text"
                            className="col-sm-3 col-form-label">Preço:</label>
                        <div className="col-sm-10 col-6">
                            <input type="number" className="form-control" id="preco" placeholder="Preço..." value={preco} 
                            onChange={adicionaPreco}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="text"
                            className="col-sm-3 col-form-label">Local:</label>
                        <div className="col-sm-10 col-6">
                            <input type="text" className="form-control" id="local" placeholder="Local..." value={local} 
                            onChange={adicionaLocal}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <button className="btn btn-dark text-white"
                        onClick={
                            () =>adicionarAjuda (
                                codigo,
                                nome,
                                especialidade,
                                preco,
                                local
                            )
                        }
                        >Adicionar
                        </button>
                    </div>
                </form>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulario)
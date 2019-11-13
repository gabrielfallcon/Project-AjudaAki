import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {listarAjuda} from '../../../action/ajuda-action'

const mapStateToProps = state => ({
    lista : state.ajuda.lista
})

const mapDispatchToProps = dispatch => bindActionCreators({
    listarAjuda
}, dispatch)

class Lista extends React.Component {

    componentWillMount() {
        this.props.listarAjuda()
    }

    listarAjuda = () => {
        const ajuda = this.props.lista || []

        return ajuda.map(ajuda => (
            <tr key={ajuda.id}>
                <td>{ajuda.nome}</td>
                <td>{ajuda.especialidade}</td>
                <td>{ajuda.preco}</td>
                <td>{ajuda.local}</td>
                <td>
                <button className="btn btn-success mr-3"
                    // onClick={() => this.props.consultarCurso(curso)}
                >
                    <i className="fa fa-check"></i>
                </button>
                
                <button className="btn btn-danger"
                    // onClick={() => this.props.removerCurso(curso)}
                    >
                    <i className="fa fa-trash-o"></i>
                </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div class="my-5">
                <h3 class="my-5">Ajudas Disponiveis:</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Especialidade</th>
                            <th>R$</th>
                            <th>Local</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listarAjuda()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lista)
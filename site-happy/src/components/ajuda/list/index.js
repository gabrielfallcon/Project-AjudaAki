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
                <td class="text-center">{ajuda.nome}</td>
                <td class="text-center">{ajuda.especialidade}</td>
                <td class="text-center">R${ajuda.preco}</td>
                <td class="text-center">{ajuda.local}</td>

                <td class="text-center">

                {/* <button className="btn btn-success mr-3"
                    // onClick={() => this.props.consultarCurso(curso)}
                >
                    <i className="fa fa-check"></i>
                </button>
                
                <button className="btn btn-danger"
                    // onClick={() => this.props.removerCurso(curso)}
                    >
                    <i className="fa fa-trash-o"></i>
                </button> */}
                <button className="btn btn-outline-dark">Contratar</button>

                </td>

            </tr>
        ))
    }

    render(){
        return(
            <div class="my-5 table">
                <h3 class="my-5">Ajudas Disponiveis:</h3>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th class="text-center">Nome</th>
                            <th class="text-center">Especialidade</th>
                            <th class="text-center">Preço</th>
                            <th class="text-center">Local</th>
                            <th class="text-center">Ação</th>
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
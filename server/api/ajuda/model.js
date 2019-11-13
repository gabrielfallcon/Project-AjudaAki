const restfull = require('node-restful')

const mongoose = require('mongoose')

const ajudaSchema = new mongoose.Schema({

    codigo         : {type : Number, required : true},
    nome           : {type : String, required : true},
    especialidade  : {type : String,   required : true},
    preco          : {type : String, required : true},
    local          : {type : String, required : true  }

})

module.exports = restfull.model('ajuda', ajudaSchema)
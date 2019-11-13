const Ajuda = require('./model')


Ajuda.methods(['get','post','put','delete'])
Ajuda.updateOptions({ new: true, runValidators: true })

module.exports = Ajuda
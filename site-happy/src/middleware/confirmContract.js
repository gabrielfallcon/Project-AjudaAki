export const confirmMiddleware = store => next => action => {
    if(action.addAjuda) {
        if(window.confirm('Tem certeza que deseja adicionar uma ajuda?')) {
            next(action)
        }
    } else {
        next(action)
    }
    
}



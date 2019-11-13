import { combineReducers } from 'redux'

import ajudaReducer from './ajuda-reducers'

const reducers = combineReducers({
    ajuda : ajudaReducer
})

export default reducers
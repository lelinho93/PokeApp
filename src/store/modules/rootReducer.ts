import { combineReducers } from 'redux'
import { resettableReducer } from 'reduxsauce'


const resettable = resettableReducer('auth/LOG_OUT')

const rootReducer = combineReducers({
  
})

export default rootReducer
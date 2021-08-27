import {LOGIN,REGISTER,LOGOUT, UPDATE_PROFILE} from '../types/index'

const initState ={
    user:{},
    token:'',
    isLoggedIn:false
}

const authReducer = (state = initState, action) =>{
    const {type,payload} = action
    switch(type){
        case LOGIN:
            return{
                ...state,
                user:payload.user,
                token:payload.token,
                isLoggedIn:true
            }
            case REGISTER:
                return{
                    ...state,
                    user:payload.user,
                    token:payload.token,
                    isLoggedIn:true
                }
            case LOGOUT:
                return{
                    ...state,
                    user:{},
                    token:'',
                    isLoggedIn:false
                }
            case UPDATE_PROFILE:
                return{
                    ...state,
                    user:payload
                }
            default:{
                return state
            }
    }
}

export default authReducer;
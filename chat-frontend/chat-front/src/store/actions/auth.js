import Authservice from '../../services/authService'
import {LOGIN,REGISTER,LOGOUT, UPDATE_PROFILE} from '../types/index'


export const login = (params,history) => dispatch =>{
    return Authservice.login(params)
    .then(data =>{
        dispatch({type:LOGIN, payload:data})
        history.push('/chat')
    })
    .catch(err =>{
        console.log('error',err)
    })
}

export const register =(params,history) => dispatch =>{
    return Authservice.register(params)
    .then(data =>{
        dispatch({type:REGISTER,payload:data})
        history.push('/chat')
    })
    .catch(err =>{
        console.log(err)
    })
}

export const logout = ()=> dispatch =>{
    Authservice.logout()
    dispatch({type:LOGOUT})
}

export const updateProfile = (params) => dispatch =>{
    return Authservice.updateProfile(params)
    .then(data => {
        dispatch({type: UPDATE_PROFILE,payload:data})
    })
    .catch(err =>{ throw err})
}
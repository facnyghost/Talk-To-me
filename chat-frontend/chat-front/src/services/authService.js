import API from './api'
import makeToast from '../Toaster'

const Authservice ={
    login:(data) =>{
        return API.post('login',data)
        .then(({data}) =>{
            makeToast("success",data.message)
            setHeadersAndStorage(data)
            return data;
        }).catch(error =>{
            makeToast("error",error.response.data.error)
            console.log("AUTH SERVICE ERR",error.response.data.error);
            throw error
        })
    },
    register:(data)=>{
        return API.post('/register',data)
        .then(({data}) =>{
            makeToast("success",data.message)
            setHeadersAndStorage(data)
            return data
        })
        .catch(error =>{
            console.log("Auth service err",error.response.data.err)
            makeToast("error",error.response.data.err)
            throw error
        })
    },
    logout:() =>{
        API.defaults.headers['Authorization'] = ''
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    },
    updateProfile:(data) =>{
        const headers = {
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        }
        return API.post('/users/update',data,headers)
        .then(({data}) =>{
            localStorage.setItem('user',JSON.stringify(data));
            return data
        })
        .catch(err => {
            console.log('Auth service err',err)
            throw err
        })
    }
}
const setHeadersAndStorage =({user,token}) =>{
     API.defaults.headers['Authorization'] =`Bearer ${token}`
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
}
export default Authservice;
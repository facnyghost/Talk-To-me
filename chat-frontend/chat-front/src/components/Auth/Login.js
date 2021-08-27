import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {login} from '../../store/actions/auth'
require('../../assets/common.css')

const Login = ({history}) => {
const dispatch = useDispatch()
const [email,setEmail] = useState('johny.doey@mail.com')
const [password,setPassword] = useState('secret')
const submitForm = (e) =>{
    e.preventDefault()
    dispatch(login({email,password},history))
} 
return (
        <div className='back'>
        <div className="title">Talk to me</div>
        <div className="title_2">Chat App</div>
            <div className='card'>
                <div className="cardHeader">
                Login
                </div>

                    <div className='cardBody'>
                    <h2 className="h2">Welcome Back</h2>

                    <div className='inputForm'>
                        <form  onSubmit={submitForm}>
                            <div className='inputGroup'>
                                <input onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    required='required'
                                    type='text'
                                    placeholder='E-mail' />
                            </div>
                            <div className='inputGroup'>
                                <input onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    required='required'
                                    type='password'
                                    placeholder='Password' />
                            </div>
                            <button>Login</button>
                        </form>
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
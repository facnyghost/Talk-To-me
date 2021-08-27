import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {register} from '../../store/actions/auth'
import {useDispatch} from 'react-redux'
require('../../assets/common.css')
const Register = ({history}) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setgender] = useState('')
    const dispatch=useDispatch()
    const submitForm = (e) =>{
        e.preventDefault()
        dispatch(register({firstName,lastName,email,gender,password},history))
    }
    return (
        <div >
        <div className='back'>
         <div className="title">Talk to me</div>
            <div className="title_2">Chat App</div>
            <div className='card'>
                <div className="cardHeader">
                    Registartion
                </div>
                <div className='cardBody'>
                    <h2>Create New Account</h2>
                    <div className='inputForm'>
                        <form onSubmit={submitForm}>
                            <div className='inputGroup'>
                                <input onChange={e => setfirstName(e.target.value)}
                                    value={firstName}
                                    required='required'
                                    type='text'
                                    placeholder='First Name' />
                            </div>
                            <div className='inputGroup'>
                                <input onChange={e => setlastName(e.target.value)}
                                    value={lastName}
                                    required='required'
                                    type='text'
                                    placeholder='Last Name' />
                            </div>
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

                                <select className="box" onChange={e => setgender(e.target.value)}
                                    value={gender}
                                    required='required'
                                >
                                    <option>Select Gender</option>
                                    <option value='male'>Male</option>
                                    <option value='male'>Female</option>
                                </select>
                            <button>Register</button>
                        </form>
                        <p>already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Register;
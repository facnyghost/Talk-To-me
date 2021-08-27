import React,{Fragment, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { logout, updateProfile } from '../../../../store/actions/auth';
import Model from '../../../Model/Model';
require('../../../../assets/css/Navbar.css')
require('../../../../assets/css/Model.css')

const Navbar =() =>{
const dispatch= useDispatch()
const user = useSelector(state =>state.authReducer.user)
const [showProfileOptions,setShowProfileOptions] = useState(false)
const [showProfileModel, setShowProfileModel]= useState(false)
const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [gender, setgender] = useState('')
const [avatar,setAvatar] = useState('')

const submitForm = (e) =>{
    e.preventDefault()
    const form = {firstName,lastName,email,gender,avatar}
    if(password.length >0 ) form.password = password
    const formData = new FormData()
    for(const key in form){
        formData.append(key,form[key])
    }
    dispatch(updateProfile(formData)).then(() => setShowProfileModel(false))
}

return (
        <div className="navbar card-shadow">
        <h2>Talk To Me</h2>
        <div onClick={()=> setShowProfileOptions(!showProfileOptions)} className="profile-menu">
            <img width="40" height="40" src={user.avatar} alt='Avatar' />
            <p>{user.firstname} {user.lastname}</p>
            <FontAwesomeIcon icon='caret-down' className='fa-icon' />
            {
                    showProfileOptions &&
                    <div className="profile-options">
                    <p onClick={() => setShowProfileModel(true)}>Update Profile</p>
                    <p onClick={() => dispatch(logout())}>Logout</p>
                    </div>
            }
            {
                showProfileModel &&
                <Model click={()=> setShowProfileModel(false)} >
                    <Fragment key='header'>
                        <h3 className='m-0'>Update Profile</h3>
                    </Fragment>
                    <Fragment key='body'>
                        <form>
                            <div className='input-field mb-1'>
                                <input className="input" onChange={e => setfirstName(e.target.value)}
                                    value={user.firstname}
                                    required='required'
                                    type='text'
                                    placeholder='First Name' />
                            </div>
                            <div className='input-field mb-1'>
                                <input className="input" onChange={e => setlastName(e.target.value)}
                                    value={user.lastname}
                                    required='required'
                                    type='text'
                                    placeholder='Last Name' />
                            </div>
                            <div className='input-field mb-1'>
                                <input className="input" onChange={e => setEmail(e.target.value)}
                                    value={user.email}
                                    required='required'
                                    type='text'
                                    placeholder='E-mail' />
                            </div>
                            <div className='input-field mb-1'>
                                <input className="input" onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    required='required'
                                    type='password'
                                    placeholder='Password' />
                            </div>
                            <div className="input-field mb-1">
                                <select className="box" onChange={e => setgender(e.target.value)}
                                    value={user.gender}
                                    required='required'
                                >
                                    <option>Select Gender</option>
                                    <option value='male'>Male</option>
                                    <option value='male'>Female</option>
                                </select>
                                </div>
                                <div className='input-field mb-2'>
                                <input className="input" onChange={e => setAvatar(e.target.files[0])}
                                    type='file' />
                            </div>
                        </form>
                    </Fragment>

                    <Fragment key='footer'>
                        <button onClick={submitForm} className="btn-success button">Update</button>
                    </Fragment>
                </Model>
            }
            </div>
        </div> 
    )
}

export default Navbar;


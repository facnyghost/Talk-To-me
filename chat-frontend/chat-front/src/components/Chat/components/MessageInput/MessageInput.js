import React , {useState,useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ChatService from '../../../../services/chatService'
import {Picker} from 'emoji-mart'
import '../../../../assets/scss/MessageInput.scss'


const MessageInput = ({chat}) =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    const msgInput = useRef()

    const [message,setMessage] = useState('')
    const [ShowEmojiPicker,setShowEmojiPicker]=useState(false)
    
    const handleMessage =(e) =>{
        const value = e.target.value

    }
    const handleKeyDown = (e,imageUpload) =>{
        if(e.key === 'Enter') return 'ss'
    }
    return (
        <div id='input-container'>
            <div id='message-input'>
                <input 
                    ref={msgInput}
                    value={message}
                    type='text'
                    placeholder='Message...'
                    onChange={e => handleMessage(e)}
                    onKeyDown={e => handleKeyDown(e,false)}
                    />
                    <FontAwesomeIcon 
                        onClick={() => setShowEmojiPicker(!ShowEmojiPicker)}
                        icon={['far','smile']}
                        className='fa-icon' />
            </div>
        </div>
    )
}

export default MessageInput;
import React ,{useState,Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Friend from '../Friend/Friend'
import { setCurrentChat} from '../../../../store/actions/chat'
import Model from '../../../Model/Model'
import ChatService from '../../../../services/chatService'
import '../../../../assets/scss/FriendList.scss'

const FriendList = () =>{
    const [showFriendsModal,setShowFriendsModal]= useState(false)
    
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatReducer.chats)
    
    const openChat = (chat) =>{
        dispatch(setCurrentChat(chat))
    }
    return (
        <div id="friends" className='shadow-light'>
        <div id='title'>
            <h3 className='m-0' id="title_1">Friends</h3>
            <button id="btn_add" onClick={() => setShowFriendsModal(true)}>ADD</button>
        </div>
        <hr />
        
        <div id='friends-box'>
            {
                chats.length > 0 ?
                chats.map(chat => {
                    return <Friend click={() => openChat(chat)} chat={chat} key={chat.id} />
                 }) : <p id='no-chat'>No friends added</p>
            }
        </div>
        </div>
  
    )
}

export default FriendList;
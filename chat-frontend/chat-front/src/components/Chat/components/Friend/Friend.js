import React ,{useState,Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {userStatus} from '../../../../utils/helpers'
import '../../../../assets/scss/Friend.scss'

const Friend = ({chat,click}) =>{
    const currentChat = useSelector(state => state.chatReducer.currentChat)

    const isChatOpened = () =>{
        return currentChat.id === chat.id ? 'opened' : ''
    }
    const lastMessage = () =>{
        if(chat.Messages.length === 0 ) return ''
        const message = chat.Messages[chat.Messages.length - 1]
        return message.type === 'image' ? 'image upload' :message.message
    }

    return(
        <div onClick={click} className={`friend-list ${isChatOpened()}`}>
            <div>
            <img width='40' height='40' src={chat.Users[0].avatar} alt='User avatar' />
            <div className='friend-info'>
                <h4 className='m-0 name'>{chat.Users[0].firstname} {chat.Users[0].lastname}</h4>
                
            </div>
            </div>
                  <div className='friend-status'>
            <span className={`online-status ${userStatus(chat.Users[0])}`}></span>
        </div>
            </div>
    )
}

export default Friend;
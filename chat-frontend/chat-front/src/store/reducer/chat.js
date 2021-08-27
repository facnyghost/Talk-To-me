import {
    FETCH_CHATS, FRIENDS_ONLINE, FRIEND_ONLINE,FRIEND_OFFLINE, SET_CURRENT_CHAT,SET_SOCKET
} from '../actions/chat'

const initialState ={
    chats : [],
    currentChat:{},
    socket:{},
    newMessage:{chatId: null,seen: null},
    scrollBottom:0,
    senderTyping:{typing:false}
}

const chatReducer =(state = initialState,action) =>{
    const {type, payload} =action
    switch (type){
        case FETCH_CHATS:
            console.log(payload);
            return{
                ...state,
                chats:payload
            }
        case SET_CURRENT_CHAT:
            return{
                ...state,
                currentChat:payload,
                scrollBottom:state.scrollBottom +1,
                newMessage: {chatId : null, seen :null}
            }
            case FRIENDS_ONLINE: {
                const chatsCopy = state.chats.map(chat => {
                    return {
                        ...chat,
                        Users: chat.Users.map(user => {
                            if (payload.includes(user.id)) {
                                return {
                                    ...user,
                                    status: 'online'
                                }
                            }
                            return user
                        })
                    }
                })
    
                return {
                    ...state,
                    chats: chatsCopy
                }
            }
    
            case FRIEND_ONLINE: {
    
                let currentChatCopy = { ...state.currentChat }
    
                const chatsCopy = state.chats.map(chat => {
    
                    const Users = chat.Users.map(user => {
    
                        if (user.id === parseInt(payload.id)) {
                            return {
                                ...user,
                                status: 'online'
                            }
                        }
                        return user
                    })
    
                    if (chat.id === currentChatCopy.id) {
                        currentChatCopy = {
                            ...currentChatCopy,
                            Users
                        }
                    }
    
                    return {
                        ...chat,
                        Users
                    }
                })
    
                return {
                    ...state,
                    chats: chatsCopy,
                    currentChat: currentChatCopy
                }
    
            }
    
            case FRIEND_OFFLINE: {
    
                let currentChatCopy = { ...state.currentChat }
    
                const chatsCopy = state.chats.map(chat => {
    
                    const Users = chat.Users.map(user => {
    
                        if (user.id === parseInt(payload.id)) {
                            return {
                                ...user,
                                status: 'offline'
                            }
                        }
                        return user
                    })
    
                    if (chat.id === currentChatCopy.id) {
                        currentChatCopy = {
                            ...currentChatCopy,
                            Users
                        }
                    }
    
                    return {
                        ...chat,
                        Users
                    }
                })
    
                return {
                    ...state,
                    chats: chatsCopy,
                    currentChat: currentChatCopy
                }
    
            }
    
        case SET_SOCKET:{
            return{
                ...state,
                socket:payload
            }
        }
    default:{
        return state
    }
        }

}

export default chatReducer;
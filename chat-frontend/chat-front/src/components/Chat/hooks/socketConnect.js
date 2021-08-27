import {useEffect} from 'react'
import socketIOClient from 'socket.io-client'
import {fetchChats,setSocket,onlineFriend,onlineFriends,offlineFriend}  from '../../../store/actions/chat'

function useSocket(user,dispatch){
    useEffect(() =>{
        dispatch(fetchChats())
        .then(res => {
            const socket = socketIOClient.connect('http://127.0.0.1:8000')
            dispatch(setSocket(socket))
            socket.emit('join',user)

            console.log(res)

            socket.on('friends',(friends) =>{
                console.log("Friends",friends)
                dispatch(onlineFriends(friends))
            })
            socket.on('online',(user) =>{
                dispatch(onlineFriend(user))
                console.log("online",user)
            })
            socket.on('offline',(user) =>{
                dispatch(offlineFriend(user))
                console.log("Offline",user)
            })
        })
        .catch(err => console.log(err))
    },[dispatch])
}
export default useSocket
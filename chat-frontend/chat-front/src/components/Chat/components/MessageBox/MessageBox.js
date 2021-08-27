import React, { useRef , useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Message from '../Message/Message'
import '../../../../assets/scss/MessageBox.scss'

const MessageBox = ({chat}) =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    const scrollBottom = useSelector(state => state.chatReducer.scrollBottom)
    const senderTyping = useSelector(state => state.chatReducer.senderTyping)
    const [loading, setLoading] = useState(false) 
    const [scrollUp,setScorllUp] = useState(0)
    const msgBox =useRef()
    // const scrollManual =(value) =>{
    //     msgbox.current.scrollTop = value
    // }   
    // const handleInfiniteScroll = (e) => {
    //     if(e.target.scrollTop === 0){
    //         setLoading(true)
    //         const pagination = chat.pagination
    //         const page= typeof pagination === 'undefined' ? 1 : pagination.page
    //         dispatch(paginationMessages(chat.id,parseInt(page) +1 ))
    //         .then(
    //             res => {
    //                 if(res){
    //                     setScorllUp(scrollUp +1)
    //                 }
    //                 setLoading(false)
    //             }
    //         ).catch(err =>{
    //             setLoading(false)
    //         })
    //     }
    // }

    return(
        <div id='msg-box' ref={msgBox}>
            {
                chat.Messages.map((message, index) =>{
                    return <Message
                        user={user}
                        chat={chat}
                        message={message}
                        index={index}
                        key={message}
                        />
                    })
            }
        </div>

        )
}

export default MessageBox;
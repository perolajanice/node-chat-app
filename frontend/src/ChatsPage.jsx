import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => { 
    const chatProps = useMultiChatLogic(
        'fe6a450a-4cb5-4957-84d5-addee325eb27', 
        props.user.username, 
        props.user.secret
        );

    return (
        <div style={{ height: '100 hv'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage
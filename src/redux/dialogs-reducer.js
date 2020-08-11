const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            const newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break
        }
        case UPDATE_NEW_MESSAGE_TEXT : {
            state.newMessageText = action.newText;
            break
        }
        default: {
            return state
        }
    }

    return state
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})


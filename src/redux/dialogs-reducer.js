const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE : {
            const newMessage = {
                id: 6,
                message: action.text,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }

        }
        default: {
            return {...state}
        }
    }
}


export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, text})


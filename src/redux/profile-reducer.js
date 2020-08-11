const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'

const initialState = {
    posts: [
        {id: 1, message: 'Hi my name is Jack', likesCount: 999},
        {id: 2, message: 'lorem ipsum', likesCount: 123},
        {id: 3, message: 'It\'s my first post', likesCount: 1},
    ],
    newProfileText: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            const newPost = {
                id: 6,
                message: state.newProfileText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newProfileText = ''
            break
        }
        case UPDATE_NEW_POST_TEXT : {
            state.newProfileText = action.newText
            break
        }
        default: {
            return state
        }
    }

    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


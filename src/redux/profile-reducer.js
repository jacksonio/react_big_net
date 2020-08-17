const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE='SET_USER_PROFILE'

const initialState = {
    posts: [
        {id: 1, message: 'Hi my name is Jack', likesCount: 999},
        {id: 2, message: 'lorem ipsum', likesCount: 123},
        {id: 3, message: 'It\'s my first post', likesCount: 1},
    ],
    profile: null,
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
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newProfileText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT : {
            return  {...state, newProfileText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.userProfile}
        }
        default: {
            return {...state}
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})


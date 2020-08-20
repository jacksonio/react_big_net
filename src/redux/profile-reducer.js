import {profileAPI, usersAPI} from "../api/api";
import {toggleLoading} from "./users-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE='SET_USER_PROFILE'
const SET_STATUS='SET_STATUS'

const initialState = {
    posts: [
        {id: 1, message: 'Hi my name is Jack', likesCount: 999},
        {id: 2, message: 'lorem ipsum', likesCount: 123},
        {id: 3, message: 'It\'s my first post', likesCount: 1},
    ],
    profile: null,
    status: '',
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
        case SET_STATUS: {
            return {...state, status: action.status}
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
export const setUserStatus = (status) => ({ type: SET_STATUS, status})
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export const setUserProfileThunk = (userId) => dispatch => {
    dispatch(toggleLoading(true))
    usersAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data))
        dispatch(toggleLoading(false))
    });
}

export const getUserStatusThunk = userId => dispatch => {
    profileAPI.getUserStatus(userId).then((data) => {
        dispatch(setUserStatus(data))
    })
}
export const updateUserStatusThunk = status => dispatch => {
    profileAPI.updateUserStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}


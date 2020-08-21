import {profileAPI, usersAPI} from "../api/api";
import {toggleLoading} from "./users-reducer";

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
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            const newPost = {
                id: 6,
                message: action.postText,
                likesCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.userProfile}
        }
        default: {
            return {...state}
        }
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText })
export const setUserStatus = (status) => ({ type: SET_STATUS, status})
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


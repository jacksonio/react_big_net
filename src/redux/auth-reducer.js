import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            let {login, email, id} = action.data
            return {...state, userId: id, email, login, isAuth: true}
        }
        default: {
            return {...state}
        }
    }
}

export const setUserData = (data) => ({type: SET_USER_DATA, data})

export const setUserDataThunk = () => dispatch => {
        usersAPI.getUserData()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        });
}

import {usersAPI} from "../api/api";

const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'
const TOGGLE_LOADING='TOGGLE_LOADING'
const FOLLOWING_IN_PROGRESS='FOLLOWING_IN_PROGRESS'


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    isFollowingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: !u.isFollow}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users] }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {...state,
                isFollowingInProgress: action.following
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_LOADING: {
            return {...state, isLoading: action.isFetching}
        }

        default: {
            return {...state}
        }
    }
}


export const toggleFollowing = (userId) => ({type: TOGGLE_FOLLOWING, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount})
export const toggleLoading = (isFetching) => ({ type: TOGGLE_LOADING, isFetching })
export const followingInProgress = (following, userId) => ({ type: FOLLOWING_IN_PROGRESS, following, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleLoading(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleLoading(false))
        });

}

export const followingUser = (userId) => (dispatch) => {
    dispatch(followingInProgress(true, userId))
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleFollowing(userId))
        }
        dispatch(followingInProgress(false, userId))
    });
}
export const unfollowingUser = (userId) => (dispatch) => {
    dispatch(followingInProgress(true, userId))
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleFollowing(userId))
        }
        dispatch(followingInProgress(false, userId))
    });
}

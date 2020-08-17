const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'
const TOGGLE_LOADING='TOGGLE_LOADING'


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
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


const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users] }
        }

        default: {
            return {...state}
        }
    }
}


export const toggleFollowingAC = (userId) => ({type: TOGGLE_FOLLOWING, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})



import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "828b4e74-97fa-43b1-ac31-8a11dac7fc70"
    }
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`).then(response => response.data),
    followUser: (userId) => instance.post(`follow/${userId}`).then(response => response.data),
    getUserData: () => instance.get('auth/me').then(response => response.data),
    getUserProfile: (userId) => {
        console.warn("Use profileAPI.getUserProfile")
        return profileAPI.getUserProfile(userId)
    }
}

export const profileAPI = {
    getUserProfile: (userId) => instance.get(`profile/${userId}`).then(response => response.data),
    getUserStatus: (userId) => instance.get(`profile/status/${userId}`).then(response => response.data),
    updateUserStatus: (status) => instance.put('profile/status', {status}),
    loginInSystem: (data) => instance.post('/auth/login', {data})
}

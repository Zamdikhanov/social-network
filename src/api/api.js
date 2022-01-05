import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "cb7407a6-c179-4601-8a31-9616583b95c3" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(
                response => response.data
            )
        )
    },
    deleteFollow(userId = 2) {
        return (
            instance.delete(`follow/${userId}`, )
            .then(
                response => response.data
            )
        )
    },
    postFollow(userId = 2) {
        return (
            instance.post(`follow/${userId}`, {}, )
            .then(
                response => response.data
            )
        )
    },
    getProfile(userId = 2) {
        console.warn('устаревшая функция')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId = 2) {
        return (
            instance.get(`profile/${userId}`)
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, { status: status })
        )
    },
}

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
            .then(
                response => response.data
            )
        )
    }
}
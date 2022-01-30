import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': `${process.env.REACT_APP_API_KEY}` }
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
    savePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo)
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfile(profile) {
        return (
            instance.put(`profile`, profile)
            .then(
                response => response.data
            )
        )
    },
}

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
            .then(response => response.data)
        )
    },
    login(email, password, rememberMe = false, captcha = '') {
        return (
            instance.post(`auth/login`, { email, password, rememberMe, captcha }, )
            .then(response => response.data)
        )
    },
    logOut() {
        return (
            instance.delete(`auth/login`)
            .then(response => response.data)
        )
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return (
            instance.get(`security/get-captcha-url`)
            .then(response => response.data)
        )
    },
}
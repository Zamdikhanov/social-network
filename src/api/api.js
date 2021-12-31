import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "3ffc89b3-6eae-4f6c-8d58-93af5a15243e" }
}
);

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 12) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(
                    response => response.data
                )
        )
    },
    deleteFollow (userId = 2) {
        return (
            instance.delete(`follow/${userId}`, )
                .then(
                    response => response.data
                )
        )
    },
    postFollow (userId = 2) {
        return (
            instance.post(`follow/${userId}`, {}, )
                .then(
                    response => response.data
                )
        )
    },
}









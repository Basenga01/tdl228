import axios from "axios";
const BASE_URL = "http://188.120.231.198:4000";
const TOKEN = 'Token'

export const apiInstance = axios.create({
    baseURL: BASE_URL,
});

export const setToken = (token: string) => {
    if (token) {
        localStorage.setItem(TOKEN, token);
    }
}
export const delToken = () => {
        localStorage.removeItem(TOKEN);

}

export const getToken = () => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
        apiInstance.defaults.headers.Authorization = `Bearer ${token}`;
        return token
    }
}
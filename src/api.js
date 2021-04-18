import axios from "axios";

export function getURLS(id, data) {
    return axios.get(`https://guviurlshortener.herokuapp.com/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    });
};

export function postURL(id, url) {
    return axios.post(`https://guviurlshortener.herokuapp.com/${id}`, url, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    });
};

export function postUserRegister(user) {
    return axios.post("https://guviurlshortener.herokuapp.com/register", user);
};

export function postUserLogin(user) {
    return axios.post("https://guviurlshortener.herokuapp.com/login", user);
};


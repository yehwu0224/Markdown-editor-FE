import axios from "axios";

const API_URL = "http://localhost:3060/api/";

const user = JSON.parse(localStorage.getItem('user'))

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    }).then((res) => {
        console.log(res)
    });
};

const login = (username, password) => {
    return axios({
        method: 'post',
        url: API_URL + 'signin',
        data: {
            username: username,
            password: password,
        }
    }).then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
};

const logout = () => {
    localStorage.removeItem("user");
};

const checkExpired = () => {
    var isExpired = false;

    return isExpired;
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken }
    }
    else {
        return {}
    }
}

export default { register, login, logout, getCurrentUser, checkExpired, authHeader }
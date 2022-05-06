import axios from "axios";
import authService from "./authService";
const API_URL = "http://localhost:3060/api/";

const getArticles = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return axios({
        method: 'get',
        url: API_URL + "articles",
        headers: { 'x-access-token': user.accessToken },
    }).then((res) => {
        return res.data;
    });
};
const addArticle = (title, content) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return axios({
        method: 'post',
        url: API_URL + "articles",
        headers: { 'x-access-token': user.accessToken },
        data: {
            title: title,
            content: content,   
        }
    }).then((res) => {
        return res;
    });
};
const updateArticle = (id, title, content) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return axios({
        method: 'put',
        url: API_URL + "articles/" + id ,
        headers: { 'x-access-token': user.accessToken },
        data: {
            title: title,
            content: content,   
        }
    }).then((res) => {
        return res;
    });
};
const deleteArticle = (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return axios({
        method: 'delete',
        url: API_URL + "articles/" + id ,
        headers: { 'x-access-token': user.accessToken },
    }).then((res) => {
        return res;
    });
};

export default { getArticles, addArticle, updateArticle, deleteArticle,}
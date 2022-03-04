import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL === 'prod' ? 'link do deploy' : 'http://localhost:4000';

function newUser(user) {
    return axios.post(`${BASE_URL}/sign-up`, user);
}

function getGames() {
    return axios.get(`${BASE_URL}/games`);
}

function loginUser(user) {
    return axios.post(`${BASE_URL}/sign-in`, user);
}

export {
    newUser,
    getGames,
    loginUser,
}
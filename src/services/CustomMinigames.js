import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL === 'prod' ? 'link do deploy' : 'http://localhost:4000';

function newUser(user) {
    return axios.post(`${BASE_URL}/users/sign-up`, user);
}

function loginUser(user) {
    return axios.post(`${BASE_URL}/users/sign-in`, user);
}

function getGames() {
    return axios.get(`${BASE_URL}/games`);
}

export {
    newUser,
    getGames,
    loginUser,
}
import axios from 'axios';

export const api = () => {
    return axios.create({
        baseURL: 'https://api.adviceslip.com/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

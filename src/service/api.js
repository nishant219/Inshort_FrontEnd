import axios from 'axios';

const URL = 'http://localhost:8000';

export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`); // query , after ?
    } catch (error) {
        console.log('error while calling getNews API');
    }
}
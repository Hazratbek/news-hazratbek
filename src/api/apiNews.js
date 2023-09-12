import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async () => {
    try {
        const respons = await axios.get(`${BASE_URL}latest-news`,{
            params: {
                apiKey: API_KEY
            }
        })
        return respons.data
    } catch (error) {
        console.log(error);
    }
}
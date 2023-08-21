import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-t5v1.onrender.com'
})
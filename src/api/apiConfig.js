import axios from 'axios'

export const publicURL = 'https://sailajaconstruction.com/backend/'
const instance = axios.create({
    baseURL:'https://sailajaconstruction.com/backend/'
})

export default instance;
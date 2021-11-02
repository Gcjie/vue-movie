// axios
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.52kfw.cn'
})

export default instance
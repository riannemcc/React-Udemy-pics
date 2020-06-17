import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Rr44ht_BnCnzjOheQewV0XdrGhQmQdkVJXcsTlqALMk'
    }
})
import axios from "axios";

export default class PostService {
    static async getAll(limit, page) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return result
    }

    static async getById(id) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return result
    }

    static async getCommentsById(id) {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return result
    }
}
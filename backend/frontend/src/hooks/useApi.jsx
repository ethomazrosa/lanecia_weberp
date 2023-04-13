import Axios from 'axios'
import { useCookies } from 'react-cookie'
import { Constants } from '../utils/constants'

function useGet(url) {
    const [token] = useCookies([Constants.TOKEN_NAME_COOKIE])
    const config = { headers: { Authorization: `Token ${token[Constants.TOKEN_NAME_COOKIE]}` } }

    async function get() {
        try {
            const response = await Axios.get(url, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    return get
}

function usePost(url, isForm = false, isPublic = false) {
    const [token] = useCookies([Constants.TOKEN_NAME_COOKIE])
    const headers = {}
    if (!isPublic) {
        headers['Authorization'] = `Token ${token[Constants.TOKEN_NAME_COOKIE]}`
    }
    if (isForm) {
        headers['Content-Type'] = 'multipart/form-data'
    }
    const config = { headers }

    async function post(body) {
        try {
            const response = await Axios.post(url, body, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    return post
}

function usePut(url, isForm = false) {
    const [token] = useCookies([Constants.TOKEN_NAME_COOKIE])
    const headers = { Authorization: `Token ${token[Constants.TOKEN_NAME_COOKIE]}` }
    if (isForm) {
        headers['Content-Type'] = 'multipart/form-data'
    }
    const config = { headers }

    async function put(body) {
        try {
            const response = await Axios.put(url, body, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    return put
}

export { useGet, usePost, usePut }

import sendRequest from "./send-request";
const BASE_URL= '/api/contents'

export async function index() {
    return sendRequest(BASE_URL)
}

export async function getSearch(searchData) {
    const searchTitle = await sendRequest(`${BASE_URL}/search?searchItem=${searchData}`)
    return searchTitle
}

export async function getContentDetails(id) {
    const contentData = await sendRequest(`${BASE_URL}/${id}`)
    return contentData
}

export async function addToWatchList(contentId) {
    return sendRequest(`${BASE_URL}/${contentId}/watchlist`, 'POST')
}

export async function getWatchList() {
    return sendRequest(`${BASE_URL}/watchlist`)
}

export async function addToWatchedList(contentId) {
    return sendRequest(`${BASE_URL}/${contentId}/watchedlist`, 'POST')
}

export async function getWatchedList() {
    return sendRequest(`${BASE_URL}/watchedlist`)
}
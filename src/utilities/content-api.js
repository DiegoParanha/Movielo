import sendRequest from "./send-request";
const BASE_URL= '/api/contents'

export async function index() {
    return sendRequest(BASE_URL)
}

export async function getSearch(searchData) {
    const searchTitle = await sendRequest(`${BASE_URL}/s=${searchData}`)
    return searchTitle
    // return sendRequest(BASE_URL/search, 'GET', search)
}

export async function getContentDetails(id) {
    const contentData = await sendRequest(`${BASE_URL}/${id}`)
    return contentData
}
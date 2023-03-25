import sendRequest from "./send-request";
const BASE_URL= '/api/contents'

export async function index() {
    return sendRequest(BASE_URL)
}

export async function search() {
    return sendRequest(BASE_URL/search)
}

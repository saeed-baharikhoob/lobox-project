import Axios from "axios";
import {baseUrl, token} from "../baseUrl.ts";

export function getUsers() {
    return Axios({
        url: `${baseUrl()}/recommendation/suggest-person?page=0&pageSize=50`,
        method: "GET",
        headers: {
            Authorization: token(),
        },
    });
}

import Axios from "axios";
import {baseUrl, token} from "../baseUrl.ts";

export function getPosts(userId:string) {
    return Axios({
        url: `${baseUrl()}/feed/all-posts/${userId}`,
        method: "GET",
        headers: {
            Authorization: token(),
        },
    });
}

import { Params } from "./interfaces";

export default function(params : Params) {
    const queryString = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`)
            .join('&');
    console.log(queryString);
    return queryString;
}
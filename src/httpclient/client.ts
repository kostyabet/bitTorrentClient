import { Decoder } from "../beencoding/decoder";

export class httpClient {

    constructor () {

    }

    async get(url : string) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = new Decoder(new Int8Array(await response.arrayBuffer())).decode();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    async post() {
    
    }
}
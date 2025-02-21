import { Decoder } from "./beencoding/decoder"

import * as fs from 'fs';

const filePath = "./testFiles/aida.torrent"

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error while reading', err);
        return;
    }

    const binaryString = new Decoder(new Int8Array(data)).decode();//Array.from(new Uint8Array(data))

    console.log('Binary data:', binaryString);
})
import { Decoder } from "./beencoding/decoder"
import { Tracker } from "./tracker/tracker";
import * as fs from 'fs';

const filePath = "./testFiles/aida.torrent"

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error while reading', err);
        return;
    }

    const binaryString = new Decoder(new Int8Array(data)).decode();
    const tracker = binaryString instanceof Map ? new Tracker(binaryString).connect() : null;
})
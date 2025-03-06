import { Decoder } from "./beencoding/decoder"
import { Tracker } from "./tracker/tracker";
import * as fs from 'fs';

const encoder = new TextEncoder();

const filePath = "./testFiles/aida.torrent"

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error while reading', err);
        return;
    }

    const binaryString = new Decoder(new Int8Array(data)).decode();
    console.log(binaryString)
    const tracker = binaryString instanceof Map ? new Tracker(binaryString).connect() : null;
})

// const number = new Decoder(new Int8Array(encoder.encode('d3:cow3:moo4:spam4:eggse'))).decode()
// console.log(number)//'Middle Earth')
import { Params } from "../src/tracker/interfaces";
import urlencode from "../src/tracker/urlencode";
import { Decoder } from "./../src/beencoding/decoder"
import { Tracker } from "./../src/tracker/tracker";
import * as fs from 'fs';
import getBytesLen from "../src/tracker/getBytesLen";

describe('Tracker urlencode check', () => {
    const filePath = "./testFiles/aida.torrent"
    let binaryString : Decoder;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error while reading', err);
            return;
        }

        binaryString = new Decoder(new Int8Array(data)).decode();
    })
    
    // test('Try get length integer.', () => {
    //     expect(getBytesLen(binaryString.get('info'))).toBe(123);
    // });

    // test('Try to parse string.', () => {
    //     expect(new Decoder(new Int8Array(encoder.encode('12:Middle Earth'))).decode()).toStrictEqual('Middle Earth');
    // });

    // test('Try to parse list.', () => {
    //     expect(new Decoder(new Int8Array(encoder.encode('l4:spam4:eggsi123ee'))).decode()).toStrictEqual(['spam', 'eggs', 123]);
    // });

    // test('Try to parse dictionary.', () => {
    //     expect(new Decoder(new Int8Array(encoder.encode('d3:cow3:moo4:spam4:eggse'))).decode()).toStrictEqual(new Map<any, any>([
    //         ['cow', 'moo'],
    //         ['spam', 'eggs']
    //     ]));
    // });
});
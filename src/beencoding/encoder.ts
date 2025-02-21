import { Tokens } from "./tokens";
const encoder = new TextEncoder();

/**
 * Encodes an object to a bencoded sequence of bytes.
 *
 * Supported python types is:
 *  - str
 *  - int
 *  - list
 *  - dict
 *  - bytes
 *
 * Any other type will simply be ignored.
 */
export class Encoder {
    
    private _data;

    /**
     * @data file info Int8Array data
    */
    constructor(data : any) {
        this._data = data;
    }
    
    /**
     * Encode an object to a bencoded binary string
     *
     * @return The bencoded binary data
     */
    public encode() {
        return this.encodeNext(this._data)
    }

    private encodeNext(data : any) {
        console.log(typeof data)
    }
}

/**
 * Decodes a bencoded sequence of bytes.
*/
class Decoder {

    private _index: number;
    private _data: string;

    /**
     * @data file info string data
    */
    constructor(data: string) {
        this._index = 0;
        this._data = data;
    }

    /**
     * Decodes the bencoded data and return the matching python object.
     * 
     * @returns A python object representing the bencoded data.
    */
    decode() {

    }

    /**
     * Return the next character from the bencoded data or None.
    */
    peek() : number {
        return new Int8Array([1])[0];
    }

    /**
     * Read (and therefore consume) the next character from the data.
    */
    consume() : Int8Array {
        return new Int8Array([1]);
    }

    /**
     * Read the `length` number of bytes from data and return the result.
     * 
     * @length number of bytes.
    */
    read(length: number) {

    }

    /**
     * Read from the bencoded data until the given token is found and return the characters read. 
     * 
     * @tokens stop token.
    */
    readUntil(token: Int8Array) {

    }
    
    decodeInt() {

    }

    decodeList() {

    }

    decodeDict() {

    }

    decodeString() {

    }
}
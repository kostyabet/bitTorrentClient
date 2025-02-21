const encoder = new TextEncoder();
const decoder = new TextDecoder();

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

    private encodeNext(data : any) : Uint8Array {
        switch(typeof data) {
            case ("string"):
                return this.encodeStr(data);
            case ("number"):
                return this.encodeInt(data);
            case ("object"):
                return this.encodeObject(data);
            default: 
                throw new Error("Unknown letter expected!")
        }
    }

    private encodeStr(data : any) : Uint8Array {
        const res = `${data.length}:${data}`;
        return encoder.encode(res);
    }

    private encodeInt(data : any) : Uint8Array {
        return encoder.encode('i' + data + 'e')
    }

    private encodeObject(data : any) : Uint8Array {
        if (data instanceof Map)
            return this.encodeMap(data);
        return this.encodeArray(data);
    }

    private encodeMap(data : Map<any, any>) : Uint8Array {
        let res = 'd';
        data.forEach((key) => {
            const encodeKey = this.encodeNext(key)
            const encodeObj = this.encodeNext(data.get(key))
            res += `${decoder.decode(encodeKey)}${decoder.decode(encodeObj)}`
        });
        res += 'e';
        return encoder.encode(res);
    }

    private encodeArray(data : Int8Array) : Uint8Array {
        let res = 'l';
        data.forEach((el) => {
            const arr : Uint8Array = this.encodeNext(el);
            res += decoder.decode(arr)
        });
        res += 'e';
        return encoder.encode(res);
    }
}
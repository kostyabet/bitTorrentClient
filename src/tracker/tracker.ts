import calculatePeerId from './calcPir'
import getHash from "./getHash";
import getBytesLen from './getBytesLen';
import { Params } from './interfaces';
import urlencode from './urlencode';
import { httpClient } from '../httpclient/client';

/**
 * Represents the connection to a tracker for a given Torrent that is either under download or seeding state.
 */
export class Tracker {

    private _torrent : Map<any,any>;
    private _peerID : string;
    private _httpClient : any;

    public constructor (torrent : Map<any, any>) {
        this._torrent = torrent;
        this._peerID = calculatePeerId();
        this._httpClient = new httpClient();
    }

    /**
     * Makes the announce call to the tracker to update with our statistics as well as get a list of available peers to connect to.
     *
     * If the call was successful, the list of peers will be updated as a result of calling this function.
     *
     * @param first: Whether or not this is the first announce call.
     * @param uploaded: The total number of bytes uploaded.
     * @param downloaded: The total number of bytes downloaded.
     */
    public async connect(first : boolean = true, uploaded : number = 0, downloaded : number = 0) {
        let params : Params = {
            'info_hash': getHash(this._torrent.get('info')),
            'peer_id': this._peerID,
            'port': 6889,
            'uploaded': uploaded,
            'downloaded': downloaded,
            'left': getBytesLen(this._torrent.get('info')) - downloaded,
            'compact': 1, 
        }
        if (first)
            params['event'] = 'started';
        const url = this._torrent.get('announce') + '?' + urlencode(params)

        console.log(await this._httpClient.get(url))
    }
}
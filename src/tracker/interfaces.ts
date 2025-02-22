export interface Params {
    info_hash: string;
    peer_id: string;
    port: number;
    uploaded: number;
    downloaded: number;
    left: number;
    compact: number;
    event?: string;
    [key: string]: string | number | undefined;
}

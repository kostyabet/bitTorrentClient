const encoder = new TextEncoder();
import { createHash } from 'crypto';

export default function(data : any) {
    const info = encoder.encode(data);
    const info_hash = createHash('sha1').update(info).digest('hex');
    return info_hash;
}
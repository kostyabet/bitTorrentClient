/**
 * Calculate and return a unique Peer ID.
 * 
 * @returns '-PC0001-' + ''.join([str(random.randint(0, 9)) for _ in range(12)])
 */
export default function calculatePeerId() {
    const prefix = '-PC0001-';
    const randomDigits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10))
                              .join('');
    return prefix + randomDigits;
}
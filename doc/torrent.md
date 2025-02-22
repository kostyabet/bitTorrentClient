# Torrent file

In torrent file we can see next fields:
 - `announce` - HTTP tracker url.
 - `info_hash` - SHA-1 hash map with info in torrent file.
 - `peer_id` - unic ID, generated for current user.
    + __size == 20 bytes__
    + <a href="https://wiki.theory.org/BitTorrentSpecification#peer_id" alt="read more">Exist two types of generating peer_id:</a>
        - `Azureus` style:
            ``` py
            >>> '-PC0001-' + ''.join([str(random.randint(0, 9)) for _ in range(12)])
            '-PC0001-478269329936'
            ```
 - `uploader` - count of sending bytes.
 - `downloaded` - count of receiving bytes.
 - `left` - count of bytes which we need yet.
 - `port` - TCP port on which user are listining.
 - `compact` - does the client accept a compact list of peers.


# Request
First get request:
```py
http GET "http://torrent.ubuntu.com:6969/announce?info_hash=%90%28%9F%D3M%FC%1C%F8%F3%16%A2h%AD%D85L%853DX&peer_id=-PC0001-706887310628&uploaded=0&downloaded=0&left=699400192&port=6889&compact=1"
```
and return:
 - `interval` - the interval in seconds before the client should make a new request to the tracker;
 - `peers` - a list of peers represented by a binary string consisting of parts of 6 bytes each:
  + 4 bytes are responsible for the IP address of the peer;
  + 2 — for the port number (since we use a compact format).
# Torrent file

In torrent file we can see next fields:
 - `announce` - HTTP tracker url.
 - `info_hash` - SHA-1 hash map with info in torrent file.
 - `peer_id` - unic ID, generated for current user.
    + __size == 20 bytes__
    + Exist two types of generating peer_id:
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
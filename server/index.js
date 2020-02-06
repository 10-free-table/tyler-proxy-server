const express = require('express');
const path = require('path');

const PORT = 3000;

const server = express();

server.use(express.static(path.join(__dirname, '..', 'client', 'public')));
server.use('/:pageId', express.static(path.join(__dirname, '..', 'client', 'public')));

server.listen(PORT, () => {
  console.log(`proxy server running on port: ${PORT}`);
});

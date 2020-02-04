const express = require('express');
const path = require('path');

const PORT = 3001;

const server = express();

server.use(express.static(path.join(__dirname, '..', 'client', 'public')));

// server.get('/', (req, res) => {
//   res.send('hello warld');
// });

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

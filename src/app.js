'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  const parts = url.pathname.split('/').slice(1);
  const query = Object.fromEntries(url.searchParams.entries());
  const resultJson = JSON.stringify({
    parts,
    query,
  });

  res.end(resultJson);
});

server.listen(PORT);

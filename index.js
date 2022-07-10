const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 80;

const app = express();

app.use(express.static(path.resolve(__dirname, './build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './build', 'index.html'));
// });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`); // eslint-disable-line
});

// hello

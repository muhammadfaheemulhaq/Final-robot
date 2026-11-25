const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Final Robot is Online 🤖');
});

app.listen(PORT, () => {
  console.log('Robot chal raha hai on port ' + PORT);
});

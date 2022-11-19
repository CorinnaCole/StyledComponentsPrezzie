const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3005;



app.use('/:userId', express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: false }));



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



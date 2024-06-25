let express = require('express');
let app = express();
let ejs = require('ejs');
const base = require('./haikus.json');
const base = process.emv.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(portal);

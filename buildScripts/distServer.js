import express from 'express';
import { join } from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    { "id": 1, "firstName": "Noel", "lastName": "King", "email": "Delbert_Murazik@hotmail.com" },
    { "id": 2, "firstName": "Jamaal", "lastName": "Gislason", "email": "Lenny26@yahoo.com" },
    { "id": 3, "firstName": "Warren", "lastName": "Prosacco", "email": "Mitchel57@yahoo.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

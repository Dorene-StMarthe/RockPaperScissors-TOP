const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs')

const router = express.Router()


//
app.get('/', (req, res) => {
  console.log('working')
  res.render('index', {

  });

  });


app.get('/about', (req, res) => {
  res.render('about',{

  })
});

app.get('/contact-me', (req, res) => {
  res.render('contact-me',{

  })
});


app.listen(port, function() {
  console.log(`Listening on port 8080 ${port}!`)
});

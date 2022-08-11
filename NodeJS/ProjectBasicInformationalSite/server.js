const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs')


//main index page
app.get('/', (req, res) => {
  console.log('working')
  res.render('index', {
    });
});


//about page
app.get('/about', (req, res) => {
  res.render('about',{

  })
});

//contact page
app.get('/contact-me', (req, res) => {
  res.render('contact-me',{

  })
});

// 404 error page
app.get('/:id', (req, res) => {
  req.params.id
  res.render('error')
})


app.listen(port, function() {
  console.log(`Listening on port ${port}!`)
});

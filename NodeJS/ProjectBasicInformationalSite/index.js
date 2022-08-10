const http = require('http')

const app = http()
const port = 8080






app.get("/" ,(req, res) => {
    res.render('index.html', {
        })})
   



app.listen(port, ()=> {
    console.log('Server running on port ' + port )
})
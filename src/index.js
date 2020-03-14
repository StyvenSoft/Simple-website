const express = require('express');
const app = express();
const path = require('path')

// settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
// Template Engine
app.set('view engine', 'ejs');

// routers
app.get('/', (req, res) => {
    //res.send('Hello World')
    //res.sendFile(path.join(__dirname, 'views/index.html'))
    res.render('index');
});

// listener the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


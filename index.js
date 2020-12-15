const express = require('express');
const app = express();
const path = require('path')

// settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'src/views'));
// Template Engine
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

// routers
app.use(require('./src/routers/index'));

// static file
app.use(express.static(path.join(__dirname, 'src/public')))

// listener the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


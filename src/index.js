const express = require('express');
const app = express();
const path = require('path')

// settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
// Template Engine
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

// routers
app.use(require('./routers/'));

// listener the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


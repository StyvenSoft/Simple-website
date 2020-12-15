const express = require('express');
const app = express();
const path = require('path')

// settings
const PORT = process.env.PORT || 4000;
app.set('views', path.join(__dirname, 'src/views'));
// Template Engine
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

// routers
app.use(require('./src/routers/index'));

// static file
app.use(express.static(path.join(__dirname, 'src/public')))

// listener the server
app.listen(PORT, () => {
    console.log(`Server in listen on http://localhost:${PORT}`);
});


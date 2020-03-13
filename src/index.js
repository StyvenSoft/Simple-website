const express = require('express');
const app = express();


// settings
app.set('port', 4000);

app.listen(app.get, () => {
    console.log('Server on port', app.get);
});


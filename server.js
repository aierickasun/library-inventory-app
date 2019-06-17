//Install express server
const express = require('express');
const path = require('path');

const app = express();

const app_name = "library-inventory-app";

// Serve only the static files form the dist directory
app.use(express.static(`./dist/${app_name}`));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,`/dist/${app_name}/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
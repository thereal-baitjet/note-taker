const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})

// created an express server that listens on port 3000
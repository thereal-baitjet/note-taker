const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})

// created an express server that listens on port 3000
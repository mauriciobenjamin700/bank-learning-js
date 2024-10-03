// express import
const express = require('express');
const app = express(); // express aplication instance

const cors = require('cors'); // cors can be used to accept requests from another server
app.use(cors());


app.get('/', (req, res) => {

    res.send("Hello, world!"); // send hello world to the client

    }    
);

app.listen(3000, () => {
    console.log("Server is running on port 3000"); // log when server is running
    }
)
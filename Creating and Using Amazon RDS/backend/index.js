const express = require('express');
const {
    Pool,
    Client
} = require('pg');
const app = express();
const port = 3001;

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
});
const pool2 = new Pool({
    connectionString2: process.env.CONNECTION_STRING2
});
const pool3 = new Pool({
    connectionString3: process.env.CONNECTION_STRING3
});
const pool4 = new Pool({
    connectionString4: process.env.CONNECTION_STRING4
});
const pool5 = new Pool({
    connectionString5: process.env.CONNECTION_STRING5
});


app.get('/data', function(req, res) {
    pool.query('SELECT id, product from shop', [], (err, result) => {
        if (err) {
            return res.status(405).jsonp({
                error: err
            });
        }
        return res.status(200).jsonp({
            data: result.rows
        });  
    });
});

app.get('/data2', function(req, res) {
    pool2.query('SELECT id, product from shop', [], (err, result) => {
        if (err) {
            return res.status(405).jsonp({
                error2: err
            });
        }
        return res.status(200).jsonp({
            data2: result.rows
        });
    });
});
app.get('/data3', function(req, res) {
    pool3.query('SELECT id, product from shop', [], (err, result) => {
        if (err) {
            return res.status(405).jsonp({
                error3: err
            });
        }
        return res.status(200).jsonp({
            data3: result.rows
        });
    });
});

app.get('/data4', function(req, res) {
    pool4.query('SELECT id, product from shop', [], (err, result) => {
        if (err) {
            return res.status(405).jsonp({
                error4: err
            });
        }
        return res.status(200).jsonp({
            data4: result.rows
        });
    });
});
app.get('/data5', function(req, res) {
    pool3.query('SELECT id, product from shop', [], (err, result) => {
        if (err) {
            return res.status(405).jsonp({
                error5: err
            });
        }
        return res.status(200).jsonp({
            data5: result.rows
        });
    });
});

app.listen(port, () => console.log(`Backend rest api listening on port ${port}!`))  
const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

const restApiUrl = process.env.API_URL;
const restApiUrl2 = process.env.API_URL2;
const restApiUrl3 = process.env.API_URL3;
const restApiUrl4 = process.env.API_URL4;
const restApiUrl5 = process.env.API_URL5;


app.get('/postgreSQL', function (req, res) {
    request(
        restApiUrl, {
        method: "GET",
    },
        function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                var objData = JSON.parse(body);
                var c_cap = objData.data;
                var responseString = `<table border="1"><tr><td>ID</td><td>PRODUCT</td></tr>`;

                for (var i = 0; i < c_cap.length; i++)
                    responseString = responseString +
                        `<tr><td>${c_cap[i].id}</td><td>${c_cap[i].product}</td></tr>`;

                responseString = responseString + `</table>`;
                res.send(responseString);
            } else {
                console.log(err);
            }
        });
});

app.get('/mySQL', function (req, res) {
    request(
        restApiUrl2, {
        method: "GET",
    },
        function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                var objData2 = JSON.parse(body);
                var c_cap2 = objData2.data;
                var responseString2 = `<table border="1"><tr><td>ID</td><td>PRODUCT</td></tr>`;

                for (var i = 0; i < c_cap2.length; i++)
                    responseString2 = responseString2 +
                        `<tr><td>${c_cap2[i].id}</td><td>${c_cap2[i].product}</td></tr>`;

                responseString2 = responseString2 + `</table>`;
                res.send(responseString2);
            } else {
                console.log(err);
            }
        });
});

app.get('/mariaDB', function (req, res) {
    request(
        restApiUrl3, {
        method: "GET",
    },
        function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                var objData3 = JSON.parse(body);
                var c_cap3 = objData3.data;
                var responseString3 = `<table border="1"><tr><td>ID</td><td>PRODUCT</td></tr>`;

                for (var i = 0; i < c_cap3.length; i++)
                    responseString3 = responseString3 +
                        `<tr><td>${c_cap3[i].id}</td><td>${c_cap3[i].product}</td></tr>`;

                responseString3 = responseString3 + `</table>`;
                res.send(responseString3);
            } else {
                console.log(err);
            }
        });
});

app.get('/MSSQLServer', function (req, res) {
    request(
        restApiUrl4, {
        method: "GET",
    },
        function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                var objData4 = JSON.parse(body);
                var c_cap4 = objData4.data;
                var responseString4 = `<table border="1"><tr><td>ID</td><td>PRODUCT</td></tr>`;

                for (var i = 0; i < c_cap4.length; i++)
                    responseString4 = responseString4 +
                        `<tr><td>${c_cap4[i].id}</td><td>${c_cap4[i].product}</td></tr>`;

                responseString4 = responseString4 + `</table>`;
                res.send(responseString4);
            } else {
                console.log(err);
            }
        });
});


app.get('/oracle', function (req, res) {
    request(
        restApiUrl5, {
        method: "GET",
    },
        function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                var objData5 = JSON.parse(body);
                var c_cap5 = objData5.data;
                var responseString5 = `<table border="1"><tr><td>ID</td><td>PRODUCT</td></tr>`;

                for (var i = 0; i < c_cap5.length; i++)
                    responseString5 = responseString5 +
                        `<tr><td>${c_cap5[i].id}</td><td>${c_cap4[i].product}</td></tr>`;

                responseString5 = responseString5 + `</table>`;
                res.send(responseString5);
            } else {
                console.log(err);
            }
        });
});

app.listen(port, () => console.log(`Frontend app listening on port ${port}!`))
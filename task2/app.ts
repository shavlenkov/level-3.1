import express from 'express';
const bodyParser = require("body-parser");

const app = express();

const host:string = '127.0.0.1';
const port:number  = 3005;

app.use(bodyParser.json());

app.use(
    express.static("public")
);

enum Znak {
    minus = 'minus',
    plus = 'plus'
}

app.post("/click", function(req, res) {
    let znak: Znak = req.body.znak;

    if(znak == "plus") {
        res.send({"plus": true})
    } else if(znak == "minus") {
        res.send({"minus": true})
    }

})

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});
var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var apiServer = express();

var port = 3000;

apiServer.use(cors());
apiServer.use(bodyParser.urlencoded({ extended: true }));

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) => {
    console.log("ho ricevuto una get su nome");
    res.send("ciao, il nome del server è: NODEPOGLIANI");
});

apiServer.get("/somma", (req, res) => {
    console.log("richiesta: ", req.query);
    if (req.query.a && req.query.b) {
        var ris = req.query.a - (- req.query.b); // -> il + concatena, quindi sottraggo l'inverso
        console.log("ris = ", ris);
        var resObj = { "risultato": ris };

        res.status(200);
        res.send(resObj);
    } else {
        res.status(500);
        res.send("parametri non corretti");
    }

});

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
apiServer.get("/loginGET" , (req, res) => {
    var obj = req.query.user;
    console.log("Richiesta: ", req.query);
    res.send({
        user : req.query.user
    });
}); 

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
apiServer.post("/loginPOST" , (req, res) => {
    const {user, pwd} = req.body;
    console.log("Richiesta: ", req.body);
    res.send({
        user : req.body.user
    });
}); 

apiServer.get("/voti" , (req, res) => {
    var arr = [req.query.voto1, req.query.voto2, req.query.voto3, req.query.voto4];
    var obj = req.query.user;
    console.log("Richiesta: ", req.query);
    res.send({
        arrV : arr
    });
}); 
/*
sviluppare una pagina html con un div e duie pulsanti.
Premendo sul pulsante "post" invierete una post con username e password e visualizzerete nella div il messaggio inviato dal server
Premendo il pulsante "get" stessa cosa ma inviando una richiesta get
*/

apiServer.get("/", function (req, res) {
    res.send("sei in home");
});
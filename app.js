var http = require("http");

var express = require("express");
var apiServer = express();

var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send("ciao, il nome del server è: NODEPOGLIANI");
});

apiServer.get("/somma",function(req, res){
    console.log("Richiesta: ", req.query);
    if(req.query.a && req.query.b){
        var ris = req.query.a*1 + req.query.b*1;
        console.log("Risultato: ", ris);
        res.send("{ \"risultato\" : " + ris + "}");
    }else{
        res.send("Parametri non corretti");
    }
});

apiServer.get("/", function(req, res){
    res.send("sei in home");
});
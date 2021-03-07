var http = require("http");
var express = require("express");
var apiServer = express();

var port = 3000;
var nome = "NODEVERITA";


apiServer.listen(port, () => {
    console.log("server running on port", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ricevuto get su mioNome", req.query);
    res.send("Il nome del server è: " + nome);
});

apiServer.get("/somma", (req, res) =>{
    console.log();
});

apiServer.get("/nomeServer",(req, res) =>{
    console.log("ricevuto get su nome", req);
    res.send("Il nome del server è: " + nome);
});

apiServer.get("/", (req, res) =>{
    res.send("Sei in home");
});
apiServer.get("/index",(req, res) =>{
    res.sendFile("C:\\Users\\verita.michele\\Desktop\\juve merda\\provaNode\\provaNode\\index.html");
});
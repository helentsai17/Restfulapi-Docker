//jshint esversion:6

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');



app.set("view engine", "ejs");
app.use(express.static("public"));


var applied = fs.readFileSync("companyList.json");
var job = fs.readFileSync("jobDescription.json");
var appliedJSON = JSON.parse(applied);
var jobDescription = JSON.parse(job);

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/listApplied', function(req, res) {

  appliedList = [];

  appliedJSON.forEach(company => {
    appliedList.push(company);
  });

  res.render("list", {
    title: appliedList
  });

  // fs.readFile( __dirname + "/" + "companyList.json", 'utf8', function (err, data) {
  //    console.log( data );
  //    res.render("list", {title: data});
  //    // res.end( data );
  // });
});

app.get('/listApplied/:id', function(req, res) {
  var id = req.params.id;
  appliedList = [];
  appliedJSON.forEach(company => {
    console.log(company.id);
    if (company.id == req.params.id) {
      appliedList.push(company);
    }
  });
  if (appliedList[0] == undefined) {
    res.render("error", {
      msg: "the company does not found"
    });
  } else {
    // console.log(company);
    res.render("position", {
      company: appliedList
    });
  }
});


app.get('/listApplied/:id/otherpostions', function(req, res) {
  var id = req.params.id;
  appliList = [];
  positions = [];
  positionName = [];
  appliedJSON.forEach(company => {
    if (company.id == id) {
      appliList.push(company.otherposition);
    }
  });
  console.log(appliList);
  positions = appliList[0];
  positions.forEach(position =>{
      positionName.push(jobDescription[position-1]);

  });
  console.log(positionName);
  res.render("otherposition", {
    otherposition: positionName
  });

});

app.get('/listApplied/:id/otherpostions/:jid', function(req, res) {
  var id = req.params.id;
  appliList = [];
  positions = [];
  positionName = [];
  appliedJSON.forEach(company => {
    if (company.id == id) {
      appliList.push(company.otherposition);
    }
  });
  // console.log(appliList);
  positions = appliList[0];
  positions.forEach(position =>{
    // console.log(position);
      if(position == req.params.jid){
        // console.log(position);
        positionName.push(jobDescription[position-1]);
      }



  });
  console.log(positionName);
  if (positionName[0] == undefined) {
    res.render("error", {
      msg: "the company dose not have this position"
    });
  } else {
    res.render("jobDiscription", {
      job: positionName
    });
  }
});

// app.post('/newApply', function (req, res) {
//
//     var today = new Date();
//     var currentday = today.getDate();
//     res.write(currentday);
//     res.send();
//
//     fs.readFile(__dirname + "/" + "companyList.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        data["company4"] = Company["company4"];
//        console.log( data );
//        res.end( JSON.stringify(data));
//     });
//  });
//
//  app.delete('/deleteCompany', function (req, res) {
//     // First read existing users.
//     fs.readFile( __dirname + "/" + "companyList.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        delete data["company" + 2];
//
//        console.log( data );
//        res.end( JSON.stringify(data));
//     });
//  });

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

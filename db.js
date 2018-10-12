
const ipcRenderer = require('electron').ipcRenderer;
const remote = require('electron').remote;
const test = require('electron')
require('main.js');
function logi(event) {
    event.preventDefault() // stop the form from submitting
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    login(username,password);
}
function regi(event) {
    event.preventDefault() // stop the form from submitting
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    register(username,password);
}
function returnlogin()
{
    remote.getCurrentWindow().loadURL(`file://${__dirname}/index.html`)
}
function returnmain()
{
    remote.getCurrentWindow().loadURL(`file://${__dirname}/main.html`)
}
function returnsettings()
{
    remote.getCurrentWindow().loadURL(`file://${__dirname}/settings.html`)
}
function returncategorys()
{
    remote.getCurrentWindow().loadURL(`file://${__dirname}/categorys.html`)
}
function returneula()
{
 
    remote.getCurrentWindow().loadURL(`file://${__dirname}/eula.html`)
}
function returnachievements()
{
    remote.getCurrentWindow().loadURL(`file://${__dirname}/achievements.html`)
}
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
function login(username,password)
{
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'secret', // or the original password : 'apaswword'
        database : 'electronjs'
    });
    
    connection.connect(function(err) {
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    $select = "SELECT * FROM users  WHERE username = '" + username + "' AND password = '" + password + "'";
    
    connection.query($select, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        if(rows.length != 0)
        {
          
            
            const { remote } = require('electron')
            remote.getCurrentWindow().loadURL(`file://${__dirname}/main.html`)
            document.getElementById("error").innerText = "succes";
        }
        else
        {
            document.getElementById("error").innerText = "username or password was wrong";
        }
        connection.end(function(){
        });
    });
    
}

function register(username,password){
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'secret', 
    database : 'electronjs'
});

connection.connect(function(err) {
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});
$select = "SELECT * FROM users WHERE username='" + username + "'";
connection.query($select, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        console.log(err);
        return;
    }
    if(rows.length != 0)
    {
        document.getElementById("error").innerText = "user already exists";
   
    }
    else
    {
        $query = "INSERT INTO users (username, password) VALUES ('" + username + "', '" + password + "')";;

        connection.query($query, function(err, rows, fields) {
            if(err){
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }

           
            const { remote } = require('electron')
            remote.getCurrentWindow().loadURL(`file://${__dirname}/main.html`)
            document.getElementById("error").innerText = "succes";
        });
    }
    connection.end(function(){
    });
    console.log("Query succesfully executed", rows);
});
}

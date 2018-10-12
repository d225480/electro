function getachievements()
{
    var mysql = require('mysql');
    // Add the credentials to access your database
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
    $select = "SELECT * FROM achievements ";
    
    connection.query($select, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        if(rows.length != 0)
        {
            console.log(rows);
          foreach(rows = item)
          {
            console.log(item)
          }
        }
        else
        {
            
        }
        connection.end(function(){
        });
    });
    
}
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
host: 'by32xgbs3hus4jfgwcl0-mysql.services.clever-cloud.com',
user:'ur9ykrsxqu0ual1c',
password:'RLy5b2AAnU3LBgPlNch1',
database: 'by32xgbs3hus4jfgwcl0',
multiStatements: true
});

mysqlConnection.connect(function (err){
  if(err){
    console.log(err);
  }else{
    console.log('La base de datos está conectada')
  }
});

module.exports =  mysqlConnection;
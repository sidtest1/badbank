// setup server
var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
db.defaults({
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: [
           {action  : '',
            amount  : 0,
            timestamp:  ''
          }
         ]}
    ]
}).write();

// required data store structure
// YOUR CODE
/*
{
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ]
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    var accountExists = db.get('accounts').
       find({email: req.params.email}).value();

    if (accountExists == null) {
      var account = {
          "name" : req.params.name,
          "email"    : req.params.email,
          "balance"  : 0,
          "password" : req.params.password,
          "transactions": [{
            "action"  : "create",
            "amount"  : 0,
            "timestamp": new Date()
          }]
      };
      db.get('accounts').push(account).write();
      console.log(db.get('accounts').find({email:req.params.email}).value());
      // Create account route
      res.send("Success");
  }
  else {
      console.log("Account already exists!!");
      res.send("Account already exists!!");
    }
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object
    // If fail, return null
    var transaction = {
        "action" : "login",
        "amount"    : 0,
        "timestamp" : new Date()
    };
   db.get('accounts').
      find({email: req.params.email, password: req.params.password}).
      get('transactions').push(transaction).write();

    var account = db.get('accounts').
         find({email: req.params.email, password: req.params.password}).value();

    if (account == null) {
      console.log("Invalid Login");
      res.send("Invalid Login");
    }
    else {
      console.log(account);
      res.send(account);
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    var transaction = {
        "action" : "deposit",
        "amount"    : parseFloat(req.params.amount),
        "timestamp" : new Date()
    };

    var account = db.get('accounts').find({email: req.params.email}).value();
    if (account != null) {
      //Push the current deposit transaction
      db.get('accounts').
         find({email: req.params.email}).
         get('transactions').push(transaction).write();
         //Get current balance
         var balance = parseFloat(db.get('accounts').
            find({email: req.params.email}).
            get('balance').value());
            //update the balance to new amount
          balance += parseFloat(req.params.amount);
          db.get('accounts').
             find({email: req.params.email}).assign({'balance':balance}).write();
         //Get the updated account
         account = db.get('accounts').find({email: req.params.email}).value();
         console.log(account);
         res.send(account);

    }else {
      console.log("Invalid Login");
      res.send("Invalid Login");
    }

});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000');
});

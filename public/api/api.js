const emailExpression = /\S+@\S+/;

function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------
    var requestStatus  = document.getElementById('requestStatus');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log("Name = "+name+", Email = "+email+", Password = "+password);
    var url = '/account/create/' + name + '/' + email + '/' + password;

    if (!emailExpression.test(email.toLowerCase())) {
      requestStatus.innerHTML = "Invalid Email";
    }
    else {
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                requestStatus.innerHTML = res.text;
            }

        });
      }
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var requestStatus  = document.getElementById('requestStatus');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log("Email = "+email+", Password = "+password);
    var url = '/account/login/' + email + '/' + password;

    if (!emailExpression.test(email.toLowerCase())) {
      requestStatus.innerHTML = "Invalid Email";
    }
    else {
      superagent
          .get(url)
          .end(function(err, res){
              if(err){
                  console.log(err);
              }
              else{
                  console.log(res);
                  requestStatus.innerHTML = res.text;
              }

          });
      }
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    var requestStatus  = document.getElementById('requestStatus');
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    console.log("Email = "+email+", Amount = "+amount);
    var url = '/account/deposit/' + email + '/' + amount;

    if (!emailExpression.test(email.toLowerCase())) {
      requestStatus.innerHTML = "Invalid Email";
    }
    else {
      superagent
          .get(url)
          .end(function(err, res){
              if(err){
                  console.log(err);
              }
              else{
                  console.log(res);
                  requestStatus.innerHTML = res.text;
              }

          });
      }
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
}

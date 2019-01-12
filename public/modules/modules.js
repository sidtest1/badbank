var ui = {};

ui.navigation =
`<nav class="nav nav-pills" id="navigationlinks">
    <a class="nav-item nav-link active" href="#badbank" onclick='defaultModule()'>BadBank</a>
    <a class="nav-item nav-link" href="#create-account" onclick='loadCreateAccount()'>Create Account</a>
    <a class="nav-item nav-link" href="#login" onclick='loadLogin()'>Login</a>
    <a class="nav-item nav-link" href="#deposit" onclick='loadDeposit()'>Deposit</a>
    <a class="nav-item nav-link" href="#withdraw" onclick='loadWithdraw()'>Withdraw</a>
    <a class="nav-item nav-link" href="#transactions" onclick='loadTransactions()'>Transactions</a>
    <a class="nav-item nav-link" href="#balance" onclick='loadBalance()'>Balance</a>
    <a class="nav-item nav-link" href="#alldata" onclick='loadAllData()'>AllData</a>
</nav>
`;

ui.createAccount = `
<div class="tab-pane" id="create-account">
     <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
       <div class="card-header">Create Account</div>
       <div class="card-body">
        <p class="card-text"> Name </p>
        <input type="text" Id="name" placeholder="Name"/><br><br>
        <p class="card-text"> Email Address</p>
        <input type="email" Id="email" placeholder="Email"/><br><br>
        <p class="card-text"> Password</p>
        <input type="password" Id="password" placeholder="Password"/><br><br>
         <button type="button" class="btn btn_create" onclick='create()'>Create Account</button>
       </div>
</div>
`;

ui.login = `
<div class="tab-pane" id="login">
     <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
       <div class="card-header">Login</div>
       <div class="card-body">
        <p class="card-text"> Email </p>
        <input type="email" Id="email" placeholder="Email"/><br><br>
        <p class="card-text"> Password</p>
        <input type="password" Id="password" placeholder="Password"/><br><br>
        <button type="button" class="btn btn_login" onclick='login()'>Login</button>
       </div>
     </div>
</div>
`;

ui.deposit = `
<div class="tab-pane" id="deposit">
  <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body">
    <p class="card-text"> Email </p>
    <input type="email" Id="email" placeholder="Email"/><br><br>
    <p class="card-text"> Amount</p>
    <input type="number" Id="amount" min="0" step="0.01" value="0.00" />
    <br><br>
    <button type="button" class="btn btn_deposit" onclick='deposit()'>Deposit</button>
    </div>
  </div>
</div>
`;

ui.withdraw = `
<div class="tab-pane" id="withdraw">
  <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
    <p class="card-text"> Email </p>
    <input type="email" Id="email" placeholder="Email"/><br><br>
    <p class="card-text"> Amount</p>
    <input type="number" Id="amount" min="0" step="0.01" value="0.00" />
    <br><br>
    <button type="button" class="btn btn_withdraw" onclick='withdraw()'>Submit</button>
    </div>
  </div>
</div>
`;

ui.transactions = `
<div class="tab-pane" id="transactions">
  <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
    <div class="card-body">
    <p class="card-text"> Email </p>
    <input type="email" Id="email" placeholder="Email"/><br><br>
    <button type="button" class="btn btn_transactions" onclick='transactions()'>Show Transactions</button>
    </div>
  </div>
</div>
`;

ui.balance = `
<div class="tab-pane" id="balance">
  <div class="card bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Balance</div>
    <div class="card-body">
    <p class="card-text"> Email </p>
    <input type="email" Id="email" placeholder="Email"/><br><br>
    <button type="button" class="btn btn_balance" onclick='balance()'>Balance</button>
    </div>
  </div>
</div>
`;

ui.default = `<div class="tab-pane active" id="badbank">
     <h4>Bad Bank</h4>
        <div class="card text-white bg-primary mb-3" style="max-width: 30rem;">
          <div class="card-header">Bad Bank Landing Module</div>
          <div class="card-body">
            <h5 class="card-title">Welcome to the Bank!</h5>
            <p class="card-text">Please use the top navigation bar to access features</p>
            <img class="fit-picture" width="250px" src="bank.png"></img>
          </div>
        </div>
</div>`;

ui.allData = `
<div class="tab-pane" id="alldata">
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">All Data</div>
    <div class="card-body">
    <button type="button" class="btn btn_alldata" onclick='allData()'>Show All Data</button>
    </div>
  </div>
</div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
var requestStatus = document.getElementById('requestStatus');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
    requestStatus.innerHTML = '';
};

var loadLogin = function(){
    target.innerHTML = ui.login;
    requestStatus.innerHTML = '';
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
    requestStatus.innerHTML = '';
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
    requestStatus.innerHTML = '';
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
    requestStatus.innerHTML = '';
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
    requestStatus.innerHTML = '';
};

var defaultModule = function(){
    target.innerHTML = ui.default;
    requestStatus.innerHTML = '';
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
    requestStatus.innerHTML = '';
};

defaultModule();

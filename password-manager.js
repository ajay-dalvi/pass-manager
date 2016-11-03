var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[
  {
    username: 'ajay',
    balance: 100
  },{
    username: 'ajay2',
    balance: 1000
  },
]);
var accounts = storage.getItemSync('accounts');
accounts.push({
  username: 'ajay3',
  balance: 2000
});
storage.setItemSync('accounts',accounts);
console.log(accounts);

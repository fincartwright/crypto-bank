
 let state = {
  inTheBank: 100000, 
   cryptoCurrencies: [
     {
       name: 'bitcoin',
      price: 20000,
       holding: 0,
     },
     {
       name: 'doge',
       price: 1,
       holding: 0,
     },
     {
       name: 'ethereum',
       price: 200,
       holding: 0,
     }
   ]
  
 }
 function buyCrypto(name) {
  switch(name) {
    case 'bitcoin':{
      const amount = prompt('How much Bitcoin would you like to purchase?')
      this.makePayment(amount, name);
      break;
    }
  
  case 'doge':{
    const amount = prompt('How much Doge would you like to purchase?')
    prompt('doge button pressed')
    this.makePayment
    break;
  }

case 'ethereum':{
  const amount = prompt('How much Ethereum would you like to purchase?')
  prompt('ethereum button pressed')
  this.makePayment
  break;
}
}}

 function makePayment (amount, name) {
 const cryptoCurrencyDetails = state.cryptoCurrencies.find(function (crypto){
   return crypto.name === name;
 });
 console.log(cryptoCurrencyDetails);
 }


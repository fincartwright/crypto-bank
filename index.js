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
      this.makePayment(amount, name);
    prompt('doge button pressed')
    break;
  }
case 'ethereum':{
  const amount = prompt('How much Ethereum would you like to purchase?')
      this.makePayment(amount, name);
  prompt('ethereum button pressed')
  break;
  }
 }
}

function makePayment (amount, name) {
  const cryptoCurrencyDetails = state.cryptoCurrencies.find(function (crypto){
    return crypto.name === name;
  });

 const coinsICanBuy = amount / cryptoCurrencyDetails.price; 
 if( amount > state.inTheBank) {
  alert('you cannot afford that')
 }
 else{
 console.log(coinsICanBuy)
 state.inTheBank = state.inTheBank - amount,
 console.log(state.inTheBank)
 const inMyBank = document.querySelector('p');
 inMyBankHTML.innerHTML = ""
 }
}


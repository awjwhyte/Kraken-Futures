const Futures = require('./main.js');

const bot = new Futures();
//
// methods.privateMethod('accounts')

let params = {
  orderType: 'lmt',
  symbol: 'pi_xbtusd',
  side: 'sell',
  size: 50,
  limitPrice: 30000
}


// publicMethod('tickers')

// methods.privateMethod('accounts')
// methods.privateMethod('recentorders', {symbol: 'PI_ETHUSD'})
// methods.publicMethod('history', {symbol: 'PI_ETHUSD', lastTime: '2019-07-24T19:07:04.591Z'})
// methods.privateMethod('sendorder', params)
// methods.privateMethod('cancelorder', {order_id: 'b4cc6501-db03-45c4-b86b-a3162ff277e8'})
// methods.privateMethod('openorders')

// console.log(params[0])

// const clientPrivate = async () => {

//   const x = await bot.privateMethod('accounts');
//   console.log(x.data);
// };

const clientPublic = async () => {
  const x = await bot.publicMethod('tickers');
  console.log(x);
};

clientPublic();
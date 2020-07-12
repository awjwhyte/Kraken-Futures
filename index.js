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



const client = async () => {
  // const x = await bot.publicMethod('tickers');
  const x = await bot.privateMethod('recentorders');
  console.log(x);
};

client();
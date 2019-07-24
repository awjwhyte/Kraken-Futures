const Futures = require('./main.js')

const methods = new Futures()
//
// methods.privateMethod('accounts')

params = {
  orderType: 'lmt',
  symbol: 'pi_ethusd',
  side: 'sell',
  size: 200.0,
  limitPrice: 1000.00,
}
// publicMethod('tickers')
// methods.privateMethod('accounts')
// methods.privateMethod('recentorders', {symbol: 'PI_ETHUSD'})
// methods.publicMethod('history', {symbol: 'PI_ETHUSD', lastTime: '2019-07-24T19:07:04.591Z'})
methods.privateMethod('sendorder', params)
// methods.privateMethod('cancelorder', {order_id: 'b8d31f89-bef7-4314-b9a9-62a8becb97eb'})
// methods.privateMethod('openorders')

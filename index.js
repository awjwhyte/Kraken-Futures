const {publicMethod, privateMethod} = require('./futures')

// publicMethod('tickers')
// privateMethod('accounts')
privateMethod('recentorders', {symbol: 'PI_ETHUSD'})

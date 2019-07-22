This library allows you to access the Kraken futures API

There are two main methods, publicMethod and privateMethod. The publicMethod is for making public calls

whiles the privateMethod is for making private calls

The client is used as follows;

in the index.js file of this project, you can place a method call with the proper arguments e.g.

publicMethod('tickers') // This will return all the tickers and their prices

privateMethod('accounts') // This will give you a snapshot of your accounts

privateMethod('recentorders', {symbol: 'PI_ETHUSD'}) // this will return your recent PI_ETHUSD orders

for more information or to suggest upgrades, kindly contact me at whyte.jnr@gmail.com

If you liked this library, kindly consider making a donation to support my work

BTC:
ETH:
LTC:

Thank you for your support!

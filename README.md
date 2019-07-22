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

BTC: bc1q2pmvxmlys2jv9jn0tlh24zge9wydvd4sx8z9ej

ETH: 0x04D4E07dbf3ddcd5f628CE43fa6b14e1d1BfFaC7

XRP: rnD1frcKj4r1yBA7ZPSMdBi9iM816qn9Km

Thank you for your support!

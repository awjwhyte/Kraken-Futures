This library allows you to access the Kraken futures API

There is a Futures class in the main.js file which contains two main methods,

publicMethod and privateMethod. The publicMethod is for making public calls

while the privateMethod is for making private calls

The client is used as follows;

in the index.js file of this project, there are two functions; clientPublic and clientPrivate
they make public and private calls respectively. If you're very comfortable with Node JS, you can understand the code and make modifications easily but if not, use the functions in the index file to make either public or private calls respectively.


// make a public call
const clientPublic = async () => {
  const x = await bot.privateMethod('tickers');
  console.log(x);
};

clientPublic(); // place a call to retrieve ticker prices

//make a private call
const clientPrivate = async () => {

  const x = await bot.privateMethod('accounts');
  console.log(x.data);
};

clientPrivate(); // place a call to retrieve account snapshot 

// replace 'accounts' with other private methods and include other parameters as needed.

******************************************************************************
Please note that before you can start using this library, you will have to create a file in the root of the project and save it as .env. In this .env file you will place the API PUBLIC_KEY, API PRIVATE_KEY and the base URL.

Please place the following in your .env file.

API_KEY= *** your API KEY ***

API_SECRET= *** your API secret ***

URL=https://futures.kraken.com/derivatives/api/v3/
****************************************************************************
For more information or to suggest upgrades, kindly contact me at whyte.jnr@gmail.com

If you liked this library, kindly consider making a donation to support my work

BTC: bc1q2pmvxmlys2jv9jn0tlh24zge9wydvd4sx8z9ej

ETH: 0x04D4E07dbf3ddcd5f628CE43fa6b14e1d1BfFaC7

XRP: rnD1frcKj4r1yBA7ZPSMdBi9iM816qn9Km

Thank you for your support!

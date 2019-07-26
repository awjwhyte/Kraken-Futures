const axios = require('axios')
const crypto = require('crypto')
require('dotenv').config()

const serialize = (obj)=> {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}


class Futures {
  constructor() {
    this.API_KEY = process.env.PUBLIC_KEY
    this.API_SECRET = process.env.PRIVATE_KEY
    this.URL = process.env.URL
    this.nonce = new Date().getTime() * 1000
  }
   // create authentication
    messageSignature (endpoint, postData=undefined) {
      let endpointPath = `/api/v3/${endpoint}`
      let message = postData == undefined ? `${this.nonce}${endpointPath}` : `${serialize(postData)}${this.nonce}${endpointPath}`
      let firstHash = crypto.createHash('sha256').update(message).digest()
      let base64decode = Buffer.from(this.API_SECRET, 'base64')
      let hash = crypto.createHmac('sha512', base64decode).update(firstHash).digest()
      let finalHash = Buffer.from(hash).toString('base64');

      return finalHash
      // console.log(message)
  }
  // make a public call
   async publicMethod (endpoint, params=undefined) {
    let action = endpoint === 'tickers' ? axios.get(this.URL + endpoint) : axios.get(this.URL + endpoint + '?' + serialize(params))
      try {
        let call = await action
        let results = endpoint === 'orderbook' ? call.data['orderBook'] : call.data[endpoint]
        console.log(results)
      } catch (e) {
        console.log(e)
      }
  }

  // make a private call
   async privateMethod (endpoint, params=undefined) {
    let headers = {
      'APIKey': this.API_KEY,
      'Nonce': this.nonce,
      'Authent': this.messageSignature(endpoint, params)
    }
    let data = params != undefined ? `${this.URL}${endpoint}?${serialize(params)}` : `${this.URL}${endpoint}${serialize(params)}`
    let method = endpoint === 'account' || 'openorders' || 'recentorders' || 'historicorders' ? await axios.get(data, {headers}) : await axios.post(data, {headers})
    try {
      method
      console.log(method.data)
    } catch (e) {
      console.log(e)
    }
  }
}
module.exports = Futures
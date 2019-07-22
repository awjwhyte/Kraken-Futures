const axios = require('axios')
const crypto = require('crypto')
const queryString = require('query-string')
const utf8 = require('utf8')
require('dotenv').config()
const nonce = new Date().getTime() * 1000


const messageSignature = (endpoint, postData=undefined) => {
  let endpointPath = `/api/v3/${endpoint}`
  let message = postData == undefined ? `${nonce}${endpointPath}` : `${queryString.stringify(postData)}${nonce}${ endpointPath}`
  let firstHash = crypto.createHash('sha256').update(message).digest()
  let base64decode = Buffer.from(process.env.PRIVATE_KEY, 'base64')
  let hash = crypto.createHmac('sha512', base64decode).update(firstHash).digest()
  let finalHash = Buffer.from(hash).toString('base64');

  return finalHash
}


const publicMethod = async (endpoint, params=undefined) => {
let action = endpoint === 'tickers' ? axios.get(process.env.URL + endpoint) : axios.get(process.env.URL + endpoint + '?' + queryString.stringify(params))
  try {
    let call = await action
    let results = endpoint === 'orderbook' ? call.data['orderBook'] : call.data[endpoint]
    console.log(results)
  } catch (e) {
    console.log(e)
  }
}

// const method = (endpoint) => {
//   let array = ['accounts', 'openorders', 'recentorders', 'historicorders']
//   for (let data of array) {
//     if (endpoint === data) {
//       return 'axios.get'
//     } else {
//       return 'axios.post'
//     }
//   }
// }

const privateMethod = async (endpoint, params=undefined) => {
  let headers = {
    'APIKey': process.env.PUBLIC_KEY,
    'Nonce': nonce,
    'Authent': messageSignature(endpoint, params)
  }
  let data = params != undefined ? `${process.env.URL}${endpoint}?${queryString.stringify(params)}` : `${process.env.URL}${endpoint}${queryString.stringify(params)}`
  let method = endpoint === 'account' || 'openorders' || 'recentorders' || 'historicorders' ? await axios.get(data, {headers}) : await axios.post(data, {headers})
  try {
    method
    console.log(method.data.accounts)
  } catch (e) {
    console.log(e)
  }
}




module.exports = {
  publicMethod,
  privateMethod
}

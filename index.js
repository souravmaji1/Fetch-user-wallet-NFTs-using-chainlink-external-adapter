const { Requester, Validator } = require('@chainlink/external-adapter')

const customError = (data) => {
  if (data.status === 'error') return true
  return false
}

const customParams = {
  walletAddress: ['walletAddress']
}

const createRequest = (input, callback) => {
  const validator = new Validator(callback, input, customParams)
  const jobRunID = validator.validated.id
  const walletAddress = validator.validated.data.walletAddress

  const url = `https://api.covalenthq.com/v1/137/address/${walletAddress}/balances_nft/?nft=true&key=ckey_e153e5e4c4c84a6e952583ebac3`

  const config = {
    url,
    timeout: 10000 
  }

  Requester.request(config, customError)
    .then(response => {
      const nfts = response.data.data.items // Extract the NFT data from the response
      
      // Loop through each NFT item and display the name and balance
      nfts.forEach(nft => {
        console.log(`NFT Name: ${nft.contract_name}`)
        console.log(`Name: ${nft.balance}`)
        console.log('---')
      })

      callback(response.status, Requester.success(jobRunID, response))
    })
    .catch(error => {
      callback(500, Requester.errored(jobRunID, error))
    })
}

module.exports.createRequest = createRequest

Description about this NFT CHAINLINK EXTERNAL ADAPTER Made By me : SOURAV MAJI

This external adapter takes wallet address of any user as input and fetches all nfts present in his wallet and the reason I made this external adapter is I have made a marketplace where users is minting nfts and they can stake that minted nfts to earn erc20 tokens as rewards but they can't use their nfts present inside their wallet 

so i want to integrate this adapter with my nft marketplace smart contract so that users can choose any nfts present inside their wallet and stake it to earn erc20 tokens 





How to run this NFT Chainlink External Adapter :

First > Clone this repository


You can remove the existing git history by running:

```bash
rm -rf .git
```



Second > Install dependencies:

```bash
yarn
```

### Test

Run the local tests:

```bash
yarn test
```

Natively run the application (defaults to port 8080):

### Run

```bash
yarn start
```

## Call the external adapter/API server

```bash

curl -X POST -H "Content-Type: application/json" -d '{"id":"1","data":{"walletAddress":"0x123a434aa5678dfdfd9abcdef"},"type":"external"}' "http://localhost:8080"

```


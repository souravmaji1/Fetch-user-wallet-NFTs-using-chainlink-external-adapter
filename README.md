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


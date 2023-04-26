# Amazon Advertising API SDK

## Dead simple SDK for Amazon Advertising API

### How to install?

```bash
npm i amazon-ads-api
```
or

```bash
yarn add amazon-ads-api
```

### How to use it?

```js
const { AmzAdvertising } = require('amazon-ads-api')
const tokens = { accessToken, refreshToken, clientId, clientSecret }
const adsClient = new AmzAdvertising(tokens)
```

Or pass tokens using environment variables

```js
process.env.AMAZON_ADVERTISING_ACCESS_TOKEN = accessToken
process.env.AMAZON_ADVERTISING_REFRESH_TOKEN = refreshToken
process.env.AMAZON_ADVERTISING_DEV_CLIENT_ID = clientId
process.env.AMAZON_ADVERTISING_DEV_CLIENT_SECRET = clientSecret
  ```

# Sparkwall API TypeScript SDK

This library helps using the sparkwall-api component of Sparkwall programmatically, enabling you to
create and manage your plans, wallets and other things without using the dashboard.

## Usage

To use the library, simple import it from your code, and specify your API key, for example:

```typescript
import { SparkwallApi } from '@sulu/sparkwall-sdk-ts';

const apiKey = '[YOUR API KEY]';

const sparkwallApiClient = new SparkwallApi({
  BASE: 'https://sparkwall-api.sulu.sh/api',
  TOKEN: apiKey,
});

const getRequests = async () => await sparkwallApiClient.requests.getRequests({
  page: 0,
  pageSize: 10,
});
```

## Build and Publish

To build a new version of the library, follow these steps:

- `npm run generate` to re-generate the client code
- bump the version number
- publish to npm the new version

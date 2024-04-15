import { SparkwallApi } from './generated';

(async () => {
  try {
    const apiKey = '';

    const sparkwallApiClient = new SparkwallApi({
      BASE: 'https://sparkwall-api.sulu.sh/api',
      TOKEN: apiKey,
    });
    const result = await sparkwallApiClient.requests.getRequests({
      page: 0,
      pageSize: 10,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

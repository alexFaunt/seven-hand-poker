import { InMemoryCache } from 'apollo-cache-inmemory';
import { toIdValue } from 'apollo-utilities';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      user: (_, args) => toIdValue(cache.config.dataIdFromObject({ __typename: 'Users', id: args.id })),
    },
  },
});

export default cache;

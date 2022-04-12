import axios from 'axios';
import { useQuery } from 'react-query';

export enum QueryLoremIpsumKeys {
  LoremIpsum = 'lorem_ipsum',
}

export const useLoremIpsum = () => useQuery(
  QueryLoremIpsumKeys.LoremIpsum,
  async () => ({ text: (await axios.get('https://loripsum.net/api/1/short/plaintext', { responseType: 'text' })).data }),
);

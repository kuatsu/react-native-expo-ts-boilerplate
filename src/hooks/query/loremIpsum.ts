import axios from 'axios';
import { useQuery } from 'react-query';

export enum LoremIpsumQiueryKeys {
  GetLoremIpsum = 'lorem_ipsum_get_lorem_ipsum',
}

export const useGetLoremIpsum = () => useQuery(
  LoremIpsumQiueryKeys.GetLoremIpsum,
  async () => ({ text: (await axios.get('https://loripsum.net/api/1/short/plaintext', { responseType: 'text' })).data }),
);

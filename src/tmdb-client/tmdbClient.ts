import { httpClient } from '@/http-client/httpClient';
import queryString from 'query-string';

export const tmdbClient = {
  get: async <T>(
    endpoint: string,
    params?: queryString.StringifiableRecord,
  ): Promise<T> => {
    console.log('httpClient is: '+ JSON.stringify(params))

    const response = await httpClient.get<T>(
      `${process.env.API_URL}${endpoint}`,
      { ...params, api_key: process.env.API_KEY },
      
    );
    // console.log("RESPONSE: "+JSON.stringify (`${process.env.API_URL}${endpoint}?language=fa-IR`))
    return response;
  },
};

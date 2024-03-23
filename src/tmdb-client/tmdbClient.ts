// import React from 'react';
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
     console.log("RESPONSE: "+JSON.stringify (`${process.env.GTRANS}$?sl=fa&tl=ar&text=%D8%B3%D9%84%D8%A7%D9%85&op=translate`))
    return response;
  },
};





// const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': '6173731459msh19f945169e7a4dcp11c67ejsn270826bcc534',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		q: 'Hello my friends!',
// 		target: 'ar',
// 		source: 'en'
// 	})
// };

// export const transClient = {
  
  
//   get: async <T>(
//     endpoint: string,
//     params?: queryString.StringifiableRecord,
//   ): Promise<T> => {
//     console.log('httpClient is: '+ JSON.stringify(params))
//     // options.body.set("q",{prop})
//     const response = await fetch(url, options);
//     const result = await response.text();
    
      
    
//      console.log("RESPONSE: "+JSON.stringify (`${process.env.GTRANS}$?sl=fa&tl=ar&text=%D8%B3%D9%84%D8%A7%D9%85&op=translate`))
   
//   }, return result;
// };

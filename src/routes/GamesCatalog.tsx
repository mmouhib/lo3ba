import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function GamesCatalog(): any {
   const [data, setData] = useState<any>({});

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setData(response.data.results);
         });
   }, []);

   return (
      <p
         onClick={() => {
            console.log(data);
         }}>
         {data[2].slug}
      </p>
   );
}

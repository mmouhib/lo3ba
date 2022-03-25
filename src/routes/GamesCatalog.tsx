import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function GamesCatalog(): JSX.Element {
   const [data, setData] = useState<any>(null);

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setData(response.data.results);
         });
   }, []);

   return (
      <button
         onClick={() => {
            console.log(data);
         }}>
         click
      </button>
   );
}

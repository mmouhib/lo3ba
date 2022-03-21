import { AxiosResponse } from 'axios';
import axios from 'axios';

export default function DataRequest() {
   axios
      .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=crash`)
      .then(function (response: AxiosResponse): void {
         console.log(response.data);
      });
}

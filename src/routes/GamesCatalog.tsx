import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../styles/Routes/games-catalog.css';
import LoadingScreen from '../components/LoadingScreen';
import GamesList from '../components/GamesCatalog/GamesList';
import SearchBar from '../components/GamesCatalog/SearchBar';
import SortingSection from '../components/GamesCatalog/SortingSection';

export default function GamesCatalog(): any {
   const [loaded, setLoaded] = useState<boolean>(false);
   const [data, setData] = useState<any>(null);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [gamesPerPage, setGamesPerPage] = useState<number>(20);
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [ordering, setOrdering] = useState<string>('metacritic');

   const [url, setUrl] = useState<string>(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${currentPage}&&search=${searchQuery}&page_size=${gamesPerPage}&search_precise=true&search_exact=true&metacritic=10,100&ordering=${ordering}`
   );

   useEffect(() => {
      setLoaded(false);
      axios.get(url).then((response: AxiosResponse): void => {
         setData(response.data.results);
         setLoaded(true);
      });
   }, [url]);

   useEffect(() => {
      setUrl(
         `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${currentPage}&&search=${searchQuery}&page_size=${gamesPerPage}&search_precise=true&search_exact=true&metacritic=10,100&ordering=${ordering}`
      );
   }, [currentPage, gamesPerPage, ordering, searchQuery]);

   return (
      <div className="games-catalog-component">
         <LoadingScreen loading={!loaded} />
         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
         <SortingSection
            setOrdering={setOrdering}
            gamesPerPage={gamesPerPage}
            setGamesPerPage={setGamesPerPage}
         />
         {data && loaded && <GamesList data={data} />}
      </div>
   );
}

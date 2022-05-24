import { Box, Select } from '@chakra-ui/react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import '../../styles/GamesCatalog/sorting-section.css';
import { useEffect, useState } from 'react';

interface SortingSelectionProps {
   setOrdering: (arg: string) => void;
   gamesPerPage: number;
   setGamesPerPage: (arg: number) => void;
}

export default function SortingSection({
   setOrdering,
   setGamesPerPage,
   gamesPerPage,
}: SortingSelectionProps) {
   const [sortingType, setSortingType] = useState<string>('');
   const [sortingMethod, setSortingMethod] = useState<string>('');

   useEffect(() => {
      setOrdering(sortingType + sortingMethod);
   }, [setOrdering, sortingMethod, sortingType]);

   return (
      <div className="sorting-section-component">
         <div className="sorting-section-component-content">
            <div className="sorting-method-select-section">
               <Select
                  placeholder="Select option"
                  variant="filled"
                  className="sorting-method-select"
                  onChange={(e) => {
                     setSortingType(e.target.value);
                  }}>
                  <option value="">Increasing</option>
                  <option value="-">Decreasing</option>
               </Select>
            </div>
            <div className="sorting-method-select-section">
               <Select
                  placeholder="Sort by"
                  variant="filled"
                  className="sorting-method-select"
                  onChange={(e) => {
                     setSortingMethod(e.target.value);
                  }}>
                  <option value="name">name</option>
                  <option value="released">released</option>
                  <option value="added">added</option>
                  <option value="created">created</option>
                  <option value="updated">updated</option>
                  <option value="rating">rating</option>
                  <option value="metacritic">metacritic</option>
               </Select>
            </div>
            <div className="games-number-slider">
               <Slider
                  defaultValue={20}
                  min={10}
                  max={40}
                  step={10}
                  onChange={(value: number) => {
                     setGamesPerPage(value);
                  }}>
                  <SliderTrack bg="whiteAlpha.500">
                     <Box position="relative" right={10} />
                     <SliderFilledTrack bg="tomato" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
               </Slider>
               <p>Games per page: {gamesPerPage}</p>
            </div>
         </div>
      </div>
   );
}

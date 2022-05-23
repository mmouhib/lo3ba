import '../../styles/GamesCatalog/search-bar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input, InputGroup, InputRightElement, InputLeftAddon, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import navLogo from '../../assets/navLogo.png';

interface SearchBarProps {
   searchQuery: string;
   setSearchQuery: (arg: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
   const [searchInputIsFocused, setSearchInputIsFocused] = useState<boolean>(false);
   const searchInput = useRef<HTMLInputElement>(null);
   const [searchBarValue, setSearchBarValue] = useState<string>('');

   return (
      <div className="search-bar-component">
         <div className="search-logo-section">
            <img className="search-image-logo" src={navLogo} alt="logo" />
         </div>
         <div className="search-group">
            <div className="search-input-group">
               <InputGroup>
                  <InputLeftAddon
                     children="search for games"
                     style={{ cursor: 'pointer', userSelect: 'none' }}
                     onClick={() => {
                        searchInput.current?.focus();
                     }}
                  />
                  <Input
                     ref={searchInput}
                     type="tel"
                     placeholder="Search for 700,000+ video games and DLCs"
                     variant="filled"
                     className="search-input"
                     onFocus={() => {
                        setSearchInputIsFocused(true);
                     }}
                     onBlur={() => {
                        setSearchInputIsFocused(false);
                     }}
                     value={searchBarValue}
                     onChange={(e) => {
                        setSearchBarValue(e.target.value);
                     }}
                  />
                  <InputRightElement
                     children={<AiOutlineSearch color={searchInputIsFocused ? 'white' : 'black'} />}
                  />
               </InputGroup>
               <Button
                  colorScheme="purple"
                  onClick={() => {
                     setSearchQuery(searchBarValue.replaceAll(' ', '+'));
                  }}>
                  Search
               </Button>
            </div>
         </div>
      </div>
   );
}

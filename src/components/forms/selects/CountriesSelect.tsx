import { Select } from '@chakra-ui/react';
import Countries from '../../../Countries';

interface CountriesSelectProps {
   setValue: (arg: string) => void;
}

export default function CountrySelect(props: CountriesSelectProps) {
   return (
      <Select
         placeholder="Country"
         variant="filled"
         onChange={(e) => {
            props.setValue(e.target.value);
         }}>
         {Countries.map((element, index) => (
            <option key={index} value={element.name}>
               {element.emoji} - {element.name}
            </option>
         ))}
      </Select>
   );
}

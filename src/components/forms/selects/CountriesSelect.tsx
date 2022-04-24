import { Select } from '@chakra-ui/react';
import Countries from '../../../Countries';

export default function CountrySelect() {
   return (
      <Select placeholder="Country" variant="filled">
         {Countries.map((element, index) => (
            <option key={index} value={element.name}>
               {element.emoji} - {element.name}
            </option>
         ))}
      </Select>
   );
}

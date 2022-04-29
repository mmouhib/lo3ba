import { Select } from '@chakra-ui/react';

export default function GenderSelect() {
   return (
      <Select placeholder="Gender">
         <option value="m">Male</option>
         <option value="f">Female</option>
         <option value="o">Other</option>
      </Select>
   );
}

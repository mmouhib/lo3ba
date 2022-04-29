import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface NumberSelectProps {
   start: number;
   end: number;
   type: string;
   setValue?: (arg: string) => void;
}

export default function NumberSelect(props: NumberSelectProps) {
   const [intervalArray, setIntervalArray] = useState<number[]>([]);
   useEffect(() => {
      for (let i: number = props.start; i < props.end + 2; i++) {
         setIntervalArray((prev) => [...prev, i]);
      }
   }, []);

   return (
      <Select placeholder={props.type}>
         {intervalArray.map((element, index) => (
            <option key={element} value={element + 1}>
               {element + 1}
            </option>
         ))}
      </Select>
   );
}

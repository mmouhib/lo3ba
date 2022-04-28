import { Select } from '@chakra-ui/react';

interface CountrySelectProps {
   setValue: (arg: string) => void;
}

export default function MonthSelect(props: CountrySelectProps) {
   const longMonths: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   const shortMonths: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
   ];

   return (
      <Select
         placeholder="Month"
         variant="filled"
         onChange={(e) => {
            props.setValue(e.target.value);
         }}>
         {longMonths.map((element, index) => (
            <option key={index} value={index + 1}>
               {element}
            </option>
         ))}
      </Select>
   );
}

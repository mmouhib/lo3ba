import { Select } from '@chakra-ui/react';

export default function MonthSelect() {
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
      <Select placeholder="Month" variant="filled">
         {shortMonths.map((element, index) => (
            <option key={index} value={index + 1}>
               {element}
            </option>
         ))}
      </Select>
   );
}

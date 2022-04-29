import CountrySelect from '../selects/CountriesSelect';
import MonthSelect from '../selects/MonthSelect';
import NumberSelect from '../selects/NumberSelect';
import GenderSelect from '../selects/GenderSelect';
import '../../../styles/selects.css';

export default function Selects() {
   return (
      <>
         <div className="same-line-selects">
            <NumberSelect start={1} end={31} type="day" />
            <MonthSelect />
            <NumberSelect start={1950} end={2020} type="Year" />
         </div>

         <CountrySelect />
         <GenderSelect />
      </>
   );
}

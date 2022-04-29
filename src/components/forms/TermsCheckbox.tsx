import { Checkbox } from '@chakra-ui/react';

export default function TermsCheckbox() {
   return (
      <Checkbox style={{ margin: 'auto' }}>
         I accept{' '}
         <span
            className="sign-up-form-spans"
            onClick={(e) => {
               e.preventDefault();
            }}>
            Cookies & other Storage
         </span>{' '}
         Policy
      </Checkbox>
   );
}

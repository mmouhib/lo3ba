import '../../styles/Forms/username-suggestion.css';

interface UsernameSuggestionProps {
   firstName: string;
   lastName: string;
   setValue: (arg: string) => void;
}

function userNameGenerator(firstName: string, lastName: string): string[] {
   return [
      `${firstName}_${lastName}_${Math.floor(Math.random() * 100) + 1}`,
      `${firstName}${lastName}${Math.floor(Math.random() * 100) + 1}`,
      `${firstName}${Math.floor(Math.random() * 100) + 1}`,
   ];
}

export default function UsernameSuggestion(props: UsernameSuggestionProps) {
   return (
      <div className="username-suggestion">
         {userNameGenerator(props.firstName, props.lastName).map((element, index) => {
            return (
               <p
                  className="username-suggestion-words"
                  style={{ cursor: 'pointer' }}
                  key={index}
                  onClick={() => {
                     props.setValue(element);
                  }}>
                  {element}
               </p>
            );
         })}
      </div>
   );
}

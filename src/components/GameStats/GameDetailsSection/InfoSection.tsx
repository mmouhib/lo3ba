import '../../../styles/GameStats/game-developers.css';

interface GamePlatformsProps {
   data: any;
   title: string;
}

export default function InfoSection({ data, title }: GamePlatformsProps) {
   return (
      <div className="game-developers-component">
         {data.length > 0 && (
            <>
               <h1 className="game-description-headers">{title}</h1>
               {data.map((element: any, index: any) => {
                  return (
                     <span key={index} className="game-developers-platform-name">
                        {index < data.length - 1 ? element.name + ', ' : element.name}
                     </span>
                  );
               })}
            </>
         )}
      </div>
   );
}

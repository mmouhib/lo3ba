import '../../../styles/GameStats/resizable-paragraph.css';
import { useState } from 'react';

interface ResizableParagraphProps {
   desc: string;
}

export default function ResizableParagraph(props: ResizableParagraphProps) {
   const [paragraph, setParagraph] = useState<string>(
      props.desc.length > 500 ? props.desc.substring(0, 490) : props.desc
   );
   const [long, setLong] = useState<boolean>(false);

   return (
      <div className="resizable-paragraph-component">
         <p className="resizable-paragraph-content">
            {paragraph}
            {!long && <>...</>}
            {props.desc.length > 500 && (
               <span
                  className="resizable-paragraph-resize-text"
                  onClick={() => {
                     if (!long) {
                        setParagraph(props.desc);
                        setLong(true);
                     } else {
                        setLong(false);
                        setParagraph(props.desc.substr(0, 490));
                     }
                  }}>
                  See {long ? 'less' : 'more'}
               </span>
            )}
         </p>
      </div>
   );
}

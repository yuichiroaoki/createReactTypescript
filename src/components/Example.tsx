// type rh
import React, { useRef } from 'react'

// interface ExampleProps {

// }

// export const Example: React.FC<ExampleProps> = ({}) => {
//         return (
//                 <div>{}</div>
//         );
// }

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const TextField: React.FC<Props> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
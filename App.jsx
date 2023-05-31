import React, { useCallback, useState } from 'react';
import {Hello} from "./Hello";
import { Square } from './Square';

export default function App() {
  const[count,setCount]=useState(0);
  const favNumbers=[7,4,9];
  const increment=useCallback(n=>{
    setCount(c=>c+n);
  }, 
  [setCount]
  );
  return (
    <div>
      <div > 
        <Hello increment={increment}/> 
        </div>
        <div>count:{count}</div>
        {
          favNumbers.map(n=>{
            return <Square  increment={increment} n={n} key={n} />
          })
        }
    </div>
  )
}

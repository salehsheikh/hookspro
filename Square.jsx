import React from 'react'
import { useCounterRenders } from './useCounterrenders'

export const Square=React.memo(({n,increment})=>{
useCounterRenders();
return <button onClick={()=>increment(n)}>{n}</button>
});
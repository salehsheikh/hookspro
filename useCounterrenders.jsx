import React, { useRef } from 'react'
export const useCounterRenders=()=>{
    const render=useRef(0);
    console.log("render :",render);
};
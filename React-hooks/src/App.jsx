// import { useState } from 'react';
// const App=()=>{
//   const [count, setcount]= useState(10);
//   const [count2, setcount2]= useState(50);
//   return(
//     <div>
//     <button onClick={()=>{
//       setcount(c=>c+1);
//       setcount2(c=>c+1);
//     }}>+</button>
//       <div> count1:{count}</div>
//       <div> count2:{count2}</div>
//     </div>
//   ); 
// };
// export default App;
 import { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import useFetch from './useFetch';
 const App=()=>{
  const[ values, handleChange]= useForm({email:"",password:"",firstname:""});
  const[count,setCount]=useState(()=>JSON.parse(localStorage.getItem("count")));
  const {data,loading}= useFetch(`http://numbersapi.com/${count}/trivia`);
 useEffect(() => {
  localStorage.setItem("count",JSON.stringify(count));
 }, [count]);
 
  // const[hello,setShowhello]=useState(true);
//   const[ values, handleChange]= useForm({email:"",password:"",firstname:""});
//  useEffect(()=>{
//   const onMousemove=e=>{
//     console.log(e);
//   }
//   console.log("render");
//   window.addEventListener('mousemove',onMousemove);
//   return()=>{
//     window.addEventListener('mousemove',onMousemove);
//   }
//  },[]);
useEffect(()=>{
  console.log("mount1");
},[]);
useEffect(()=>{
  console.log("mount2");
},[]);
  return(
    <>
    <div> {!data?"loading...":data}</div>
    <div>count :{count}</div>
    <button onClick={()=>setCount(c=>c+1)}>increment</button>
   
    <div>
      {/* <button onClick={()=>setShowhello(!hello)}>toggle</button>
    { setShowhello && <Hello/>} */}
      <input type="text" name="name" placeholder='firstname'  value={values.name} onChange={handleChange} />
      <input type="text" name="email"  value={values.email} onChange={handleChange} />
      <input type="password" name="password" value ={values.password} onChange={handleChange} />
    </div>
    </>
  );
 };
 export default App;
import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import Login from './Login';

const Index = () => {
    const {user,setUser}= useContext(UserContext);
  return (
    <div>
        
        <pre>{JSON.stringify(user,null,2)}</pre>
       {user ? (<button onClick={()=>setUser(null)}> logout</button>):(
         <button onClick={async()=>{
          const user=await Login();
          setUser(user)}}>Login</button>
       )} 
    </div>
  )
}

export default Index;
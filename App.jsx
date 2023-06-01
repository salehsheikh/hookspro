import React, { useReducer, useState } from 'react';
function reducer(state,action) {
 switch (action.type) {
   case "add_todo":
     return{
       todos:[...state.todos,{text:action.text,completed:false}],
       countTodo:state.countTodo+1
      };
      case "toggle_todo":
     return{
       todos:state.todos.map((t,idx)=>idx===action.idx?{...t,completed:!t.completed}:t),
       countTodo:state.countTodo
      };
   default:
     return state;
 };
};
 const App = () => {
  const[{todos,countTodo},dispatch]=useReducer(reducer,{todos:[],countTodo:0});
  const [text,setText]=useState();
  return (
    <div>
      <form onSubmit={e=>{
        e.preventDefault();
        dispatch({type:"add_todo",text});
        setText( "");
      }}>
     <input type="text" value={text} onChange={e=>setText(e.target.value)} />
      </form>
      <div>todoCount:{countTodo}</div>
      {todos.map((t,idx)=>(
        <div key={t.text} onClick={()=>dispatch({type:"toggle_todo",idx})}
        style={{textDecoration:t.completed?"line-through":""}}>
          {t.text}</div>
      ))}
      
    </div>
  )
};
export default App;
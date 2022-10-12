

import {useDispatch, useSelector} from 'react-redux';


function App() {

  const counter= useSelector((state)=>state.counter);
  const usedispatch=useDispatch()

  const Increment= ()=>{
    usedispatch({ type:"INC"});

  }

  const Decrement=()=>{
    usedispatch( {type:"DEC"} )

  }

  const  Addby = () =>{
    usedispatch( {type:"ADD",payload:10})
  }
  return (
    <div>
      
      <h1> Counter App</h1>
      <h2> {counter}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Addby}> Add by 10</button>


    </div>
  );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {
  let count = useSelector(state=>state.count) 
  // selector는 함수를 매개변수로 받음, state는 store객체에 있는 값중 count값을 가져온것
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);
  let dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5}}) // 
    // dispatch를 통해 action을 던져줌 action은 단지 {}객체이다. {}안에는 type과 payload가 들어감
    // type에는 action의 이름이 들어감
    // payload에는 함수의 매개변수 같은 느낌 내가 원하는 정보를 보내줄 수 있음, 5씩 증가시키겠다
    //reducer는 dispatch가 던진 액션을 받아올 수 있다.
  }
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"pyo", password:"123"}})
  }
  return (
    <div>
      <h1>{id}, {password}</h1>
      
      <h1>{count}</h1> 
      <button onClick={increase}>증가버튼!</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );// count값은 
}

export default App;


// Component ->(useDispatch) Action ->Reducer ->Store
//       ↓                                        ↓  
//       ------------------useSelector-------------
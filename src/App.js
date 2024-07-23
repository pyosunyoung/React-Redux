import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  let count = useSelector(state => state.count);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);
  let dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  }

  const decrease = () => {
    dispatch({ type: "DECREASE", payload: { num: 5 } });
  }

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "pyo", password: "123" } });
  }

  const waterHeight = Math.min(Math.max(count, -100), 100); // -100 ~ 100 범위로 제한
  const waterStyle = {
    height: `${Math.abs(waterHeight)}%`
  };
  const waterClass = waterHeight >= 0 ? 'water positive' : 'water negative';

  return (
    <div className="container">
      <div className="header">물병에 물채우기</div>
      <div className="login-container">
        <button onClick={login}>Login</button>
        <h1>{id} {password}</h1>
      </div>
      <h1>{count}</h1>
      <div className="bottle-container">
        <div className={`${waterClass}`} style={waterStyle}></div>
      </div>
      <div className="buttons">
        <button onClick={increase} className='increase'>물 채우기 +</button>
        <button onClick={decrease} className='decrease'>물 빼내기 -</button>
      </div>
      <Box />
    </div>
  );
}

export default App;

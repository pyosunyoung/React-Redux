import { createStore } from 'redux' // redux에서 store를 만들어주는 함수
import reducer from './reducer/reducer'

let store = createStore(reducer)

//store안에 reducer를 추가해서 app에 적용시킨다.

export default store;
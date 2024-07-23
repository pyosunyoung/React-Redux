let initialState = {
  count : 0,
  id : "",
  password : "",
}

function reducer(state = initialState, action) { // reducer에 매개변수 두개가 들감
  console.log("action을 멀까?",action); // {type: 'INCREMENT'} dispatch의 action type이 출력됨
  if(action.type === "INCREMENT") {
    return {...state, count:state.count + action.payload.num}; // 이 return값을 통해서 store값을 바꿈
    // action.payload.num // dispatch에서 action type과 payload의 num값을 받음
  } else if(action.type === "LOGIN") {
    return {...state, id:action.payload.id, password : action.payload.password} // ...state count를 유지하고 id와 password값을 바꿔줘서 store에 던져주겠다.
  } else if(action.type === "DECREASE") {
    return {...state, count : state.count - action.payload.num};
  }
  
  return {...state};
  
  // 그래서 reducer는 항상 return값을 가져야 함
// ...state는 initalsatate안에는 여러개 state값이 존재할텐데 그 여러개 state값은 유지를 하되
// count값만 바꾼다는 뜻임, 새로운 객체를 전달받아야 store가 본인이 바뀐걸 인지한다
// 주고값이 같은 객체만 받으면 바뀐걸 인식 못한다.
// 그래서  ...state는 기본적으로 치고 들어가야한다.
// store는 return이 무조건 있어야해서 reducer에서는 무조건 기본리턴값이 필요함
}// 행동 지침이 들어감
//reducer는 if문, switch문 두개가 아무거나 써도됨 회사마다 다름
// switch(action.type) {
//   case "INCREMENT" : 
//     return { ...state, count : count:state.count + 1};
//   default:
//     return {...state}; 
export default reducer;
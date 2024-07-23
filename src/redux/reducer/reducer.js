let initialState = {
  count: 0,
  id: "",
  password: "",
}

function reducer(state = initialState, action) {
  console.log("action을 멀까?", action);

  if (action.type === "INCREMENT") {
    let newCount = state.count + action.payload.num;
    if (newCount > 100) newCount = 100; // 최대값 100으로 제한
    return { ...state, count: newCount };
  } else if (action.type === "LOGIN") {
    return { ...state, id: action.payload.id, password: action.payload.password };
  } else if (action.type === "DECREASE") {
    let newCount = state.count - action.payload.num;
    if (newCount < -100) newCount = -100; // 최소값 -100으로 제한
    return { ...state, count: newCount };
  }

  return { ...state };
}

export default reducer;

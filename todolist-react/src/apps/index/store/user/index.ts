// ======================================================
// reducer 中心此下面的 state会挂到总state下面 state.User={}
// ======================================================
interface IState {
  CORPORATIONSTORES?: any[];
  CURRENT_USER_PROVINCE_DATA: any;
}

const initState = {
  CURRENT_USER_PROVINCE_DATA: "",
};

function reducer(state: IState = initState, action: { type: string; data: { [name: string]: string } }) {
  if (action.type === 'EDITORUSER') {
    return Object.assign({}, state, action.data);
  }
  return state;
}

// ======================================================
// actions 触发reducer 改变 state
// ======================================================
// 行为--改变用户id
function editorUser(data: { [name: string]: string }) {
  return {
    type: 'EDITORUSER',
    data,
  };
}

export default {
  reducer,
  actions: { editorUser }
};

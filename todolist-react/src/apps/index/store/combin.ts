
import { connect as reduxConnect } from 'react-redux';
import User from './user';// 用户中心


export const connect = reduxConnect;
export const reducers = {
  User: User.reducer,
};
export const actions = {
  User: { ...User.actions },
};


/**
 * 产生一个整体的 Reducer 函数
 */
// import counter from 'reducers/counter';
// import userInfo from 'reducers/userInfo';

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action),
//     userInfo: userInfo(state.userInfo, action)
//   }
// }

// 优化combineReducers - 使用 redux 提供的一个 combineReducers 函数合并 reducer
import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

export default combineReducers ({
  counter,
  userInfo
})
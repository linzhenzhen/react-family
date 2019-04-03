/**
 * 学习理解 redux 
 * https://github.com/brickspert/blog/issues/22
 */

/**
 * 第一部分 - 封装一个状态
 * 持续更改 优化
 * 1. 增加 plan
 * 2. 增加 dispatch({type: Symbol()}) 代替 changeState
 * 3. 增加退订
 */
const createStore = function(plan, initStore) {
  let state = initStore;
  let listeners = [];

  /** 订阅、退订*/
  function subscribe(listener) {
    listener.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  function dispatch(action) {
    state = reducer(state, action)

    for (let i = 0, len = listeners.length; i < len; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function changeState(action) {
    // state = newState;
    // 按照计划来更改 state
    state = plan(state, action);

    /** 通知 */
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  dispatch({type: Symbol()})

  return {
    subscribe,
    changeState,
    dispatch,
    getState
  }
}

// 第一部分 - 我们来使用这个状态管理器管理多个状态 counter 和 info 试试
let initState = {
  counter: {
    count: 0,
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.info.name}: ${state.info.description}`);
})

store.subscribe(() => {
  let state = store.getState();
  console.log(store.counter.count);
})

store.changeState({
  ...store.getState(),
  info: {
    name: '前端九部',
    description: 'we are front-end`s friends.'
  }
})

store.changeState({
  ...store.getState(),
  counter: {
    count: 1
  }
})

/**
 * 第二部分 - 有计划的状态管理器
 */
let initState = {
  count: 0
}

let store = createStore(plan, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
})

// 自增
store.changeState({
  type: 'INCREMENT'
});

// 自减
store.changeState({
  type: 'DECREMENT'
})

// 随时改, plan 方法后是无效的，
// store.changeState({
//   count: 'abc'
// })

/**
 * 第三部分 - 解决 count 传了不同的类型
 * 注意：action = {type: '', other: ''} action 必须有一个 type 属性
 */
function plan(state, action) {
  switch(action.type) {
    case 'INCREMENT':
    return {
      ...state,
      count: state.count + 1
    }
    case 'DECREMENT':
    return {
      ...state,
      count: state.count - 1
    }
    default: 
    return state;
  }
}

/** 
 * 以上
 * plan 改为 reducer: 计划函数，接收旧的 state，返回新的 state
 * changeState 改为 dispatch
 * 
 * 第四部分 - 多文件协作
 */

// 各自的 reducer
// counterReducer, 一个子 reducer
// 注意：counterReducer 接收的 state 是 state.counter 
function counterReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
    return {
      count: state.count + 1
    }
    case 'DECREMENT':
    return {
      ...state,
      count: state.count - 1
    }
    default:
    return state;
  }
}

// InfoReducer 一个子 reducer
function infoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
    return {
      ...state,
      name: action.name
    }
    case 'SET_DESC':
    return {
      ...state,
      desc: action.desc
    }
    default:
    return state;
  }
}

// 用 combineReducers 函数把多个 reducer 函数合并成一个 reducer 函数
const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
})

// 尝试实现 combineReducers 函数
function combineReducers(reducers) {
  // ['counter', 'info']
  const reducerKeys = Object.keys(reducers);

  // 返回合并后的 reducer 函数
  return function combination(state = {}, action) {
    // 生成新的 state
    const nextState = {}

    // 遍历执行所有的 reducers, 整合成一个新的 state 
    for (let i = 0, len = reducerKeys.length; i < len; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];

      // 之前 key 的 state
      const prevStateForKey = state[key];
      // 获得新的 state
      const nextStateForKey = reducer(prevStateForKey, action)

      nextState[key] = nextStateForKey
    }

    return nextState;
  }
}

// 尝试一下 combineReducers 的威力
let initState = {
  counter: {
    count: 0
  },
  info: {
    name: 'front-end',
    desc: 'i am fe coders.'
  }
}

let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.desc);
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: 'front-end v2'
})

/**
 * 第五部分 - state 的拆分和合并
 * 
 * reducer 按照组件拆分了，但是 state 树会很庞大
 */
// 简单呈现大概是这样子的
let initState = {
  count: 0
}

function counterReducer(state, action) {
  // 注意：如果 state 没有初始值，旧给他个初始值
  if (!state) {
    state = initState
  }

  switch(action.type) {
    case 'INCREMENT':
    return {
      count: state.count + 1
    }
    default:
    return state;
  }
}

// 可以试试 dispath({type: Symbol()}) 初始化的 state 是什么
const store = createStore(reducer);
console.dir(store.getState());

/**
 * 第六部分 - 中间件 middleware
 * 
 * 中间件是对 dispatch 的扩展，或者说重写，增强 dispatch 的功能
 */

// 记录日志： 记录 state 的修改
const store = createStore(reducer);
const next = store.dispatch;

// 重写 store.dispatch
store.dispatch = action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

// 使用 dispatch
store.dispatch({
  type: 'INCREMENT'
})

// 日志输出
// this state {counter: {count: 0}}
// action {type: 'INCREMENT'}
// next state {counter: {count: 1}}

// 记录日常 - 再次修改 dispatch
const store = createStore(reducer);
const next = store.dispatch;

store.dispatch = action => {
  try {
    next(action);
  } catch(err) {
    console.log('错误报告', err);
  }
}

// 多中间件的合作
// 又记录日志，又记录日常
store.dispatch = action => {
  try {
    console.log('this state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
  } catch(err) {
    console.error('error', err);
  }
}

// 多中间件合作模式
// 1. 把 loogerMiddleware 提取出来
const store = createStore(reducer);
const next = store.dispatch;

const loggerMiddleware = action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

store.dispatch = action => {
  try {
    loggerMiddleware(action);
  } catch(err) {
    console.error(err);
  }
}

// 2. 把 exceptionMiddleware 提取出来
const exceptionMiddleware = action => {
  try {
    // next(action)
    loggerMiddleware(action);
  } catch(err) {
    console.error(err);
  }
}

store.dispatch = exceptionMiddleware;

// 3. 把 next(action) 变成动态的，不是固定的 loggerMiddleware(action);
const exceptionMiddleware = next => action => {
  try {
    // loggerMiddleware(action);
    next(action);
  } catch(err) {
    console.error(err);
  }
}

store.dispatch = exceptionMiddleware(loggerMiddleware);

// 4. 同样的道理，优化 loggerMiddleware 里无法扩展中间件
const loggerMiddleware = next => action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

// 以上 探索出一个扩展性很高的中间件合作模式
// 可单独建立 loggerMiddleware.js、exceptionMiddleware.js 
const store = createStore(reducer);
const next = store.dispatch;
store.dispatch = exceptionMiddleware(loggerMiddleware(next));

// 优化 store 作为参数传递给中间件
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    // loggerMiddleware(action);
    next(action);
  } catch(err) {
    console.error(err);
  }
}

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
store.dispatch = exception(logger(next));

// 以上 实现了两个中间件

// 使用以上中间件来实现 打印日志之前输出当前的时间戳
const timeMiddleware = (store) => (next) => (action) => {
  console.log('time', new Date().getTime());
  next(action);
}

const store = createStore(reducer);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));

/**
 * 第七部分 优化中间件的使用方式
 */

// 我们只需要知道三个中间件即可，把剩下的细节都可以封装起来，扩展 createStore 来实现 
import loggerMiddleware from './middleware/loggerMiddleware';
import exceptionMiddleware from './middleware/exceptionMiddleware';
import timeMiddleware from './middleware/timeMiddleware';

// ...

const store = createStore(reducer);
const next = store.dispatch;

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));

// 期望的用法及结果是
// 接收旧的 createStore 返回新的 createStore
const newCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)(createStore);
// 返回一个 dispatch 被重写的 store
const store = newCreateStore(reducer);

// 实现 applyMiddleware
const applyMiddleware = function(...middlewares) {
  /* 返回一个重写的 createStore 的方法 */
  return function rewriteCreateStoreFunc(oldCreateStore) {
    /* 返回重写后新的 createStore */
    return function newCreateStore(reducer, initState) {
      /* 1. 生产 store */
      const store = oldCreateStore(reducer, initState);
      /* 给每个 middleware 传下store 相当于 const logger = loggerMiddleware(store) */
      /* const chain = [exception, time, logger] */
      const chain = middlewares.map(middleware => middleware(sstore));
      let dispatch = store.dispatch;
      /* 实现 exception(time(logger(dispatch))) */
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch);
      });

      /* 2. 重写 dispatch */
      store.dispatch = dispatch;
      return store;
    }
  }
}

// 优化用户体验
import { createStore } from './redux';
import { bindActionCreators } from '../../../Library/Caches/typescript/3.3/node_modules/redux';
const store = createStore(reducer, initState);

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
const newCreateStore = rewriteCreateStoreFunc(createStore);
const store = newCreateStore(reducer, initState);

// 在优化
const createStore = (reducer, initState, rewriteCreateStoreFunc) => {
  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);

    //...
  }
}

/**
 * 第八部分 完整的 redux
 */
// 使用退订
const unsubscribe = store.subscribe(() => {
  let store = store.getState();
  console.log(store.counter.count);
})
unsubscribe();

// 中间件拿到的 store
const simpleStore = { getState: store.getState };
const chain = middlewares.map(middleware => middleware(simpleStore));

// compose
// 把 [A, B, C] 转换成 A(B(C(next)))
const chain = [A, B, C];
let dispatch = store.dispatch;
chain.reverse().map(middleware => {
  dispatch = middleware(dispatch);
})

const chain = [A, B, C];
dispatch = compose(...chain)(store.dispatch);

// compose 如何实现的
export default function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// 省略 initState
const store = createStore(reducer, {}, rewriteCreateStoreFunc);

// redux 可以这样写
const store = createStore(reducer, rewriteCreateStoreFunc);

function createStore(reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === 'function') {
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }
  // ...
}

// 2 行代码的 replaceReducer
const createStore = function(reducer, initState) {
  // ...
  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: Symbol() })
  } 
  // ...
  return {
    // ...
    replaceReducer
  }
}

// 尝试使用
const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(reducer);

const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

store.replaceReducer(nextReducer);

// bindActionCreators
const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

const store = createStore(reducer);

function increment() {
  return {
    type: 'INCREMENT'
  }
}

function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  }
}

const actions = {
  increment: function() {
    return store.dispatch(increment.apply(this, arguments))
  },
  setName: function() {
    return store.dispatch(setName.apply(this, arguments))
  }
}

/* 注意：我们可以把 actions 传到任何地方去
   其他地方实现自增的时候，根本不知道 dispatch，actionCreator 等细节
*/
action.increment();
action.setName('mslinzz');

// 提取公共代码
const actions = bindActionCreators({ increment, setName }, store.dispatch);

// bindActionCreators 的实现方式，通过闭包隐藏了 actionCreator 和 dispatch 
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  }
}

// actionCreattors 必须是 function 或者 object
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error()
  }

  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const actionCreator = actionCreator[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * 第十部分 最佳实践
 */
// 什么是纯函数: 纯函数是一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用
// 通俗来讲：两个要素
// 1. 相同的输入，一定会得到相同的输出
// 2， 不会又 “触发事件”，更多输入参数，依赖外部参数，打印 log 等等副作用

// 以下都不是纯函数
// 不是纯函数，不是相同的输出
function a(count) {
  return count + Math.random();
}

// 不是纯函数，arr 被修改
function b(arr) {
  return arr.push(1);
}
let arr = [1, 2, 3];
b(arr);
console.log(arr); // [1,2,3,1]

// 不是纯函数，因为依赖了外部的
let x = 1;
function c(count) {
  return count + x;
}

// reducer 计划函数，必须是一个纯函数！只要传入参数相同，返回计算得到下个 state 就一定相同。没有特殊情况
// 总结
// createStore
// 创建 store 对象，包含 getState，dispatch，subscribe，replaceReducer
// reducer
// reducer 是一个计划函数，接收旧的 state 和 action，生成新的 state
// action
// action 是一个对象，必须包含 type 字段
// dispatch
// dispatch(action) 触发action，生成新的 state
// subscribe
// 实现订阅功能，每次触发 dispatch 的时候，会执行订阅函数
// combineReducers
// 多 reducer 合并成一个reducer
// replaceReducers
// 替换 reducer 函数
// middleware
// 扩展 dispatch 函数

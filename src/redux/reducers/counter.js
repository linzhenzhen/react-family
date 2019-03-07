/* reducer 是一个纯函数，接收 action 和旧的 state， 生成新的 state */
import { INCREMENT, DECREMENT, RESET } from 'actions/counter';

/**
 * 初始化 state
 */
const initState = {
  count: 0
}

/**
 * reducer
 */
export default function reducer(state = initState, action) {
  switch(action.type) {
    case INCREMENT: 
    return {
      count: state.count + 1
    }
    case DECREMENT: 
    return {
      count: state.count - 1
    }
    case RESET: 
    return {
      count: 0
    }
    default:
    return state
    
  }
}
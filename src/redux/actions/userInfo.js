/* 通过 action 创建函数 userInfo */
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}

// 运用 redux-thunk 作为中间件来处理 action 函数
export function getUserInfo() {
  return function(dispatch) {
    dispatch(getUserInfoRequest());

    // 这里 user.json 的文件被 CleanWebpackPlugin 清理 dist 重新生成 dist 后删除了，为了测试，可以手动在新建一下
    return fetch('http://localhost:8080/api/user.json')
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch(getUserInfoSuccess(json))
    })
    .catch(() => {
      dispatch(getUserInfoFail())
    })
  }
}
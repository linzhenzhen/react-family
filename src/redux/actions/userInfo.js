/* 通过 action 创建函数 userInfo */
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

// function getUserInfoRequest() {
//   return {
//     type: GET_USER_INFO_REQUEST
//   }
// }

// function getUserInfoSuccess(userInfo) {
//   return {
//     type: GET_USER_INFO_SUCCESS,
//     userInfo
//   }
// }

// function getUserInfoFail() {
//   return {
//     type: GET_USER_INFO_FAIL
//   }
// }

// 运用 redux-thunk 作为中间件来处理 action 函数
// export function getUserInfo() {
//   return function(dispatch) {
//     dispatch(getUserInfoRequest());

//     return fetch('http://localhost:8080/api/user.json')
//     .then(response => {
//       return response.json()
//     })
//     .then(json => {
//       dispatch(getUserInfoSuccess(json))
//     })
//     .catch(() => {
//       dispatch(getUserInfoFail())
//     })
//   }
// }

// 运用 json 模拟请求数据
// dist/api/user.json
// {
//   "name": "mslinzz",
//   "intro": "i am a coder.nm "
// }

/** promise: client => client.get(`/api/user.json`);  */
// export function getUserInfo() {
//   return {
//     types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
//     promise: client => client.get(`http://localhost:8080/api/user.json`)
//   }
// }

// 运用 mock 请求模拟数据
export function getUserInfo() {
  return {
    types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
    promise: client => client.get(`/api/user`)
  }
}
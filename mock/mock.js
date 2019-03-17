// 使用 Mock.js 模拟时，生成虚假数据
// import Mock from 'mockjs';

// let Random = Mock.Random;

// Mock.mock('/api/user', {
//   'name': '@cname',
//   'intro': '@word(20)'
// });

// 使用 json-server 模拟时，但还用 mock生成虚假数据
let Mock = require('mockjs');

let Random = Mock.Random;

module.exports = function() {
  var data = {};
  data.user = {
    'name': Random.cname(),
    'intro': Random.word(20)
  }
  return data;
}
import _ from 'lodash';
// var _ = require('lodash');
// 如果没有配置babel，就无法使用import，只能使用require，因为import是ES6里的语法
import numRef from './ref.json';

function createTransalator() {
  return {
    numToWord: (num) => {
      return num < 0 || num > 5 ? 'This is a failure' : converttoword(num);
    },
    wordToNum: (word) => {
      const num = converttonum(word);
      return num === -1 ? 'This is a failure': num;
    }
  }
}

const converttoword = (num) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

const converttonum = (word) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1)
}

export default createTransalator();

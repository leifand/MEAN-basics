/*  jslib.js
    leif anderson 9/7/17
*/

var _ = {
  map: function(arr, callback) {
    let array_out = [];
    for (let i in arr) {
      array_out.push(callback(arr[i]));
    }
    return array_out;
  },
  reduce: function(arr, callback, memo) {
    for (let i = 0; i < arr.length; i++)
      memo = callback(memo, arr[i]);
    return memo;
  }
}

var result = _.map([1,2,3], function(num) {return num * num;});
console.log(result);

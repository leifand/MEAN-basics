function test(callback) {
  console.log('before');
  let users = [
    {name: 'leif'},
    {name: 'caleb'}]
  callback(users);
  console.log('end');
}

//function my_callback() {
//  console.log('inside');
//}

//test(my_callback);

function callbackWithData(users) {
  for (let user of users) console.log(user.name);
}

test(callbackWithData);

let promise = new Promise(function(resolve, reject) {
  // magic happens here
});

// arrow functions --
// - anon fn
// - preserving this
let arrow_promise = new Promise((resolve, reject) => {
  let status = true;
  if (status) resolve('success');
  else reject(Error('error'));
});

arrow_promise.then(resolve => console.log(resolve), reject => console.log(reject));

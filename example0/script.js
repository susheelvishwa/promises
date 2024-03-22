// lets try to understand how its work promiss

// let promise = new Promise()
// return new Promise()
// ------------------------------------------------------------

// if promises is resolve

let promise1 = new Promise(function (resolve, reject) {
  resolve([1, 2, 3, 4, 5]);
});


let promise2 = new Promise(function (reject, resolve) {
    setTimeout(function () {
      reject("server not Found 404");
    }, 3000);
});


promise1
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function (res) {
    console.log("will work for both");
  })

// -------------------------------------------------------------

// if promise is reject

promise2
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function (res) {
    console.log("will work for both");
  });

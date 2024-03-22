// now aplying promises

function getdata() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      dataArr = [
        {
          product: "bad",
          price: 5000,
        },
        {
          product: "almari",
          price: 3000,
        },
        {
          product: "sofa",
          price: 50000,
        },
        {
          product: "kitchen",
          price: 5000,
        },
        {
          product: "kitchen",
          price: 500000,
        },
      ];
      // resolve(dataArr);
      // if data is resolve
     reject("server not found") 
      //if data id rejected

    }, 5000);
  })
}
console.log(getdata());


function findProduct(name) {
  getdata()
    .then(function (dataArr) {
      // console.log(dataArr);
      let narr = dataArr.filter(function (ele) {
        return ele.product === name
      })
      console.log(narr);
    })
    .catch(function (err) {
    console.log("404 NOT FOUND");
  })
}
findProduct("almari")

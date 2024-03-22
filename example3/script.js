
// aplying callback here

function getdata(opration) {
  let dataArr = []
  console.log(opration);

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
            price: 500000,
          },
          {
            product: "kitchen",
            price: 500,
          },
        ];
      opration(dataArr)
    },1000)
    return dataArr
}


function findProduct() {

  // let data = getdata()
  // let narr = data.filter(function (ele) {
  //     return ele.product === name
  // })
  // console.log(data, narr);

  getdata(function (data) {
    let narr = data.filter(function (ele) {
      return ele.product === name;
    });
    console.log(data, narr);
  });
}


findProduct("kitchen");


// here we get the function but its os hard to understand the flow of the code so what we can do lets see in example 4
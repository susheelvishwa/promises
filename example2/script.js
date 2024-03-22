function getdata() {
    let dataArr = []

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
            product: "modular kitchen",
            price: 500000,
          },
        ];
    },1000)
    return dataArr
}


function findProduct() {
    
    let data = getdata()
    let narr = data.filter(function (ele) {
        return ele.product === name
    })
    console.log(data, narr);
}
findProduct("sofa")


//issu is data not get the console so what will we do
// lates see example no 3


// lets try to understand promise santax

let Hello = new Promise(function (resolve, reject) {
    // resolve("Get the data on UI")
    //so here promises state "fullfill" and promise_ result is "Get the data on UI"

    // and nothing willl happien so promis state is "pending" and promise_result is "undifine"

    // reject("Server not Found 404")
    // so here promises state is "rejected " and promise_result is "server not found 404"
})

console.log(Hello);


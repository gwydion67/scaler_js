let myPromise = new Promise(function(resolve , reject){
    const a = 3;
    const b = 4;

    setTimeout(()=> {
        if(a===b){
            resolve('the values are equal');
        }
        else{
            reject("error");
        }
    }, 2000)
})

console.log(myPromise);

myPromise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})


myPromise.then(function(result){
    console.log(result);
}, function(error){
    console.log(error);
})
// program to try out promises

function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink == 'coffee')
        {
            resolve('order received');
        }
        else {
            reject('order rejected')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`${order} is served`)
    })
}

placeOrder('coffee').then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced);
    return orderIsProcessed;

}).then(function(processedOrder){
    console.log(processedOrder)
})
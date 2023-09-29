function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Function: Your proimse has been resolve');
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolve');
                reject();
            }
        },2000);
    })
}

func1().then(function(){
    console.log('Aditya:Thank you for resolving');
}).catch(function(error) {
    console.log('Aditya: Very bad bro.Reason:'+ error);
})
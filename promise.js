// const promise = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log('Task is done');
//     },1000) 
//     resolve()
// })

// promise.then(function(){
//     console.log("promise is here now");
// })




const four = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Raman",password :"1234"}) // mostly we pass object
        }
        else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },2000)
})

four.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);
}).catch(function(error)
{
    console.log(error);
})
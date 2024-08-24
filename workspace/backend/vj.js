let myPromise =new Promise((myResolve,myReject)=>
{
    setTimeout(()=>{
    myReject('vijay');
    },8000)
})
myPromise.then(()=> 
{
    console.log('success');
}).catch(()=>{
    console.log('failed');
})
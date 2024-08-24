let myPromise = new Promise((myResolve, myReject)=>
{
    setTimeout(()=>{
        myResolve('Anand');

    },2000)
})
myPromise.then(()=>
{
    console.log('success')

}).catch(()=>{
    console.log('failed')
})
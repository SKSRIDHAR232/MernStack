let myPromise = new Promise((myresolve,myreject)=>

{
setTimeout(()=>{
    myresolve("Sridhar");
},100000)
}
)
myPromise.then(()=>{
    console.log("Success");

}).catch(()=>{
    console.log("failed");
})
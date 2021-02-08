//synchronous = serial wise
//asynchronous = not serial wise (we need to make it)

function doSomething(){
    console.log(100);
}
console.log(200);
// setTimeout(doSomething,2000);
//we also can do setTimOut in function 
//setTimeout(function(){
//     console.log('lazy and waiting')
// },2000)
//in array function
setTimeout(() => {
    console.log('see you later');
}, 2000);
console.log(300);
//set time out works in the last ,we can even set the time (set parameter for this)
//2000 means it works 2s later
setInterval(() => {
    console.log('hi people');
}, 1000);
//set interval : it keeps working 
//set time out executes once 
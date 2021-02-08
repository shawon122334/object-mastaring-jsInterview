//global scope 
const name="sabbir";
function add(num1,num2){
    //making result global by window
    window.result =num1+num2;
    function double(num){
        return num*2;
    }
    var total=double(result);
    return total;
}
var sum=add(20,30);
console.log(sum);
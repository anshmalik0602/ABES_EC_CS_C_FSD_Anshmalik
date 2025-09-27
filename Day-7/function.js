function ISODD (a){
    if(a % 2 !== 0){
        return "value is odd";
    }else{
        return "value is even";
    }

}
function ISODDUsingTernary(a){

    return (a % 2 !== 0) ? "value is odd" : "value is even";
    console.log(ISODDUsingTernary,"ISODDUsingTernary")
}
let funAsexpression = function ISODD(){
    return a%2 !== 0 ? "value is odd" : "value is even";

}
//arrow function
console.log((5));
const arrowFun = (a) => {
    return a % 2 !== 0 ? "value is odd" : "value is even";
}
console.log( "output for arrowFun(6):", arrowFun(6));

//IIFE - Immediately invoked function expression
(function IIFE(){
    console.log("inside IIFE Function");
})(7);
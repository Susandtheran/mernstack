function sumAll(...args){
    console.log(args)
    let sum =0;
    for(let arg of args){
        sum+= arg;
    return sum;
}
}
document.write(sumAll(1) + "<br/>");
document.write(sumAll(1,2)+ "<br/>");
document.write(sumAll(1,2,3,4,5,6));
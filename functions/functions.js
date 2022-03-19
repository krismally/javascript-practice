function add7(num){
    return num+7;
}
console.log(add7(5));

function multiply(num1, num2){
    return num1*num2;
}

console.log(multiply(2, 5));

function capitalize(str1){
    let init = str1.toLowerCase();
    let cap1 = init.charAt(0).toUpperCase() + init.slice(1);
    return cap1; 
}
console.log(capitalize('aDisUe'));

function lastLetter(str2){
    let sep = str2.slice('');
    return sep[sep.length-1];
}

console.log(lastLetter('asbd'));